# Quiz Funnel — Логика и переходы

---

## Навигация

### Основной flow
1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → [9] → 10 → 11 → 12 → 13 → 14 → 15 → 16 → 17 → 18 → 19 → 20 → 21 → 22

### Условные экраны
- **Экран #9 (Kids Challenge)** — показывается только если `answers.kids > 0`

### Auto-advance
Экраны с `single` и `goal_entry` типами автоматически переходят на следующий после выбора (300ms delay).

---

## State Management

### Initial State
```javascript
const [answers, setAnswers] = useState({
  mainGoal: null,
  idealOutcome: null,
  adults: 2,
  kids: 2,
  dietary: [],
  allergies: [],
  customAllergies: '',
  nutritionPriorities: [],
  eatingGoal: null,
  kidsChallenge: null,
  kitchenEquipment: [],
  mealComplexity: [],
  prepComfort: null,
  currentFrequency: null,
  midweekPattern: null,
  priority: null,
  email: ''
});
```

### Computed Values
```javascript
const hasKids = answers.kids > 0;
const totalPeople = answers.adults + answers.kids;
```

---

## Dynamic Content Logic

### interstitial3 (Экран #13)
```javascript
dynamicContent.interstitial3[answers.mainGoal]
// fallback: dynamicContent.interstitial3.default
```

### mainChallenge (Экран #18)
```javascript
dynamicContent.mainChallenge[answers.mainGoal]
```

### patternInsight (Экран #18)
```javascript
// Показывается только если midweekPattern !== 'on_track'
dynamicContent.patternInsight[answers.midweekPattern]
```

### solutionHeadline (Экран #19)
```javascript
dynamicContent.solutionHeadline[answers.mainGoal]
```

### priorityBenefit (Экран #19)
```javascript
dynamicContent.priorityBenefit[answers.priority]
```

---

## Priority Options Generation (Экран #16)

```javascript
const getPriorityOptions = () => {
  let options = [];

  // 1. Goal-based option (first)
  const goalOptions = {
    mental_load: { id: 'decisions', text: "...", icon: '🧠' },
    healthy_eating: { id: 'healthy', text: "...", icon: '🥗' },
    food_waste: { id: 'no_waste', text: "...", icon: '♻️' },
    time_saving: { id: 'save_time', text: "...", icon: '⏱️' }
  };

  if (mainGoal && goalOptions[mainGoal]) {
    options.push(goalOptions[mainGoal]);
  }

  // 2. Pattern-based options
  if (midweekPattern === 'food_spoils' && mainGoal !== 'food_waste') {
    options.push({ id: 'no_waste', text: "A system where nothing goes bad", icon: '🥬' });
  }
  if (midweekPattern === 'exhausted' && mainGoal !== 'time_saving') {
    options.push({ id: 'save_time', text: "5-minute meals on tired days", icon: '😴' });
  }
  if (midweekPattern === 'improvise') {
    options.push({ id: 'flexibility', text: "A flexible plan that survives real life", icon: '🔄' });
  }

  // 3. Kids-based options
  if (kidsChallenge === 'picky' && mainGoal !== 'healthy_eating') {
    options.push({ id: 'picky_eaters', text: "Get my kids to actually eat", icon: '👶' });
  }
  if (kidsChallenge === 'school_lunches') {
    options.push({ id: 'school_lunches', text: "Easy packable lunches", icon: '🎒' });
  }

  // 4. Fill with defaults up to 4
  const defaults = [
    { id: 'decisions', text: "Take all daily food decisions off my plate", icon: '🧠' },
    { id: 'save_time', text: "Spend less time cooking", icon: '⏱️' },
    { id: 'no_waste', text: "Stop wasting food and money", icon: '♻️' },
    { id: 'flexibility', text: "A plan that adapts to chaos", icon: '🔄' }
  ];

  // Add defaults not already in options
  return options.slice(0, 4);
};
```

---

## Calculated Insights Logic

```javascript
const getCalculatedInsights = () => {
  const weeklyMeals = totalPeople * 21;

  const hoursPerWeek = {
    'always': 14,
    'often': 10,
    'sometimes': 6,
    'rarely': 3
  }[answers.currentFrequency] || 3;

  const hoursPerYear = hoursPerWeek * 52;
  const daysPerYear = Math.round(hoursPerYear / 24);

  const wastedFoodPerMonth = {
    'food_spoils': 180,
    'improvise': 120
  }[answers.midweekPattern] || 80;

  const wastedFoodPerYear = wastedFoodPerMonth * 12;
  const decisionsPerDay = totalPeople > 2 ? 12 : 8;
  const decisionsPerYear = decisionsPerDay * 365;

  const dietaryCount = answers.dietary?.length || 0;
  const allergiesCount = answers.allergies?.length || 0;

  return {
    weeklyMeals,
    hoursPerWeek,
    hoursPerYear,
    daysPerYear,
    wastedFoodPerMonth,
    wastedFoodPerYear,
    decisionsPerDay,
    decisionsPerYear,
    recipesFiltered: 2847 - dietaryCount * 200 - allergiesCount * 150,
    recipesMatched: 2847 - (dietaryCount * 200 + allergiesCount * 150) - 194,
    weeklyTimeSaved: Math.round(hoursPerWeek * 0.6),
    monthlySavings: Math.round(wastedFoodPerMonth * 0.7)
  };
};
```

---

## Multi-Select Logic

```javascript
const handleMultiAnswer = (field, value) => {
  setAnswers(prev => {
    const current = prev[field] || [];

    // "none" clears all other selections
    if (value === 'none') {
      return { ...prev, [field]: ['none'] };
    }

    // Remove "none" if selecting something else
    const withoutNone = current.filter(v => v !== 'none');

    // Toggle selection
    if (current.includes(value)) {
      return { ...prev, [field]: withoutNone.filter(v => v !== value) };
    }
    return { ...prev, [field]: [...withoutNone, value] };
  });
};
```

---

## Analyzing Animation (Экран #17)

```javascript
useEffect(() => {
  if (screen?.type === 'analyzing' && !isAnalyzing) {
    const checks = getAnalysisChecks();
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setAnalysisStep(step);

      if (step >= checks.length) {
        clearInterval(interval);
        setTimeout(() => setIsAnalyzing(true), 600);
      }
    }, 500);

    return () => clearInterval(interval);
  }
}, [currentScreen, screen?.type]);
```

**Timing:**
- 500ms между каждым check
- 600ms delay после последнего check перед показом кнопки

---

## Visible Screens Filter

```javascript
const getVisibleScreens = () => {
  return screens.filter(screen => {
    if (screen.conditional === 'hasKids') return hasKids;
    return true;
  });
};
```

---

## Progress Calculation

```javascript
const progress = ((currentScreen) / (visibleScreens.length - 1)) * 100;
```

Progress bar показывается начиная с экрана #2 (currentScreen > 0).
