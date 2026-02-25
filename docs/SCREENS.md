# Quiz Funnel — Описание экранов

---

## Фаза 1: ВОВЛЕЧЕНИЕ (engagement)

### Экран #1 — Welcome Screen
**Тип:** `welcome`

**Title:** "Plan once. Prep twice. Eat all week."

**Subtitle:** "A personalized meal system for YOUR family — built in under 2 minutes."

**Bullets:**
- Portions calculated for your exact family size
- Recipes filtered for allergies, diets & picky eaters
- Breakfasts, lunches, and dinners — all covered

**CTA:** "Build My System →"

**Social Proof:** "Based on the prep-ahead system used by professional meal preppers"

**Trust Badge:** "📱 Instant access to your meal plan, shopping list & prep guides"

**Психология:** Захватить внимание, показать value proposition, начать commitment loop.

---

### Экран #2 — Goal Entry (Q1)
**Тип:** `goal_entry` (single choice)
**Поле:** `mainGoal`

**Title:** "What's your #1 goal with family meals?"

**Description:** "Pick the one that resonates most — we'll build your plan around it."

**Опции:**
| ID | Иконка | Текст |
|----|--------|-------|
| `mental_load` | 🧠 | End the daily "what to cook?" stress |
| `healthy_eating` | 🥗 | Get everyone eating healthier |
| `food_waste` | ♻️ | Stop wasting food and money |
| `time_saving` | ⏱️ | Spend less time in the kitchen |

**Психология:** Запустить commitment principle. Первый выбор = первая инвестиция. Определяет персонализацию всего квиза.

---

### Экран #3 — Ideal Outcome (Q2)
**Тип:** `single`
**Поле:** `idealOutcome`

**Title:** "A month from now, what does success look like?"

**Description:** "Pick the one that excites you most."

**Опции:**
| ID | Иконка | Текст |
|----|--------|-------|
| `no_decisions` | 📋 | I know exactly what we're eating — zero decisions |
| `calm_meals` | 😌 | Mealtimes are calm, everyone eats, no battles |
| `organized` | 🗂️ | Fridge organized, nothing spoils, no last-minute runs |
| `energy` | ✨ | I have energy left after meals — cooking doesn't drain me |

**CTA:** "That's my goal →"

**Психология:** Future pacing — создать эмоциональную картинку успеха. Усиливает мотивацию.

---

### Экран #4 — Micro-Reward 1
**Тип:** `micro_reward`

**Title:** "Great choice. Let's make it happen."

**Stat:** "89%"
**Stat Text:** "of families with your goal succeed with our system"

**CTA:** "Personalize my plan →"

**Психология:** Валидировать выбор, показать social proof (89%), создать anticipation.

---

## Фаза 2: КОНТЕКСТ (context)

### Экран #5 — Family Size (Q3)
**Тип:** `number`
**Поля:** `adults`, `kids`

**Title:** "Who are we feeding?"

**Description:** "We'll calculate exact portions — no waste, no leftovers."

**Fields:**
- 👨‍👩 Adults (default: 2)
- 👧 Kids (default: 2)

**CTA:** "Continue →"

**Психология:** Собрать данные для расчёта порций. Определяет показ вопроса про детей (hasKids).

---

### Экран #6 — Dietary Lifestyles (Q4)
**Тип:** `multi`
**Поле:** `dietary`

**Title:** "Any dietary lifestyles in your family?"

**Description:** "Select all that apply."

**Опции:**
| ID | Иконка | Текст |
|----|--------|-------|
| `none` | ✅ | No specific diet |
| `vegetarian` | 🥬 | Vegetarian |
| `vegan` | 🌱 | Vegan |
| `pescatarian` | 🐟 | Pescatarian |
| `keto` | 🥩 | Keto / Low-Carb |
| `paleo` | 🦴 | Paleo |
| `mediterranean` | 🫒 | Mediterranean |
| `halal` | ☪️ | Halal |
| `kosher` | ✡️ | Kosher |

**CTA:** "Continue →"

**Психология:** Определить lifestyle-диеты для фильтрации рецептов. Отдельно от аллергий.

---

### Экран #7 — Allergies & Exclusions (Q5)
**Тип:** `multi_with_custom`
**Поле:** `allergies`
**Custom поле:** `customAllergies`

**Title:** "Any foods to completely exclude?"

**Description:** "Allergies, intolerances, or foods you hate. These will NEVER appear."

**Опции:**
| ID | Иконка | Текст |
|----|--------|-------|
| `none` | ✅ | No exclusions |
| `gluten` | 🌾 | Gluten / Wheat |
| `dairy` | 🥛 | Dairy / Lactose |
| `nuts` | 🌰 | Tree Nuts |
| `peanuts` | 🥜 | Peanuts |
| `eggs` | 🥚 | Eggs |
| `shellfish` | 🦐 | Shellfish |
| `soy` | 🫘 | Soy |

**Custom Placeholder:** "Other allergies (comma-separated)"

**CTA:** "Continue →"

**Психология:** Собрать критические исключения (Big 9 аллергенов). Безопасность — must have.

---

### Экран #8 — Nutrition Priorities (Q6)
**Тип:** `multi`
**Поле:** `nutritionPriorities`

**Title:** "Any nutrition priorities?"

**Description:** "Optional — helps us suggest better recipes."

**Опции:**
| ID | Иконка | Текст |
|----|--------|-------|
| `high_protein` | 💪 | High protein |
| `more_veggies` | 🥦 | More vegetables |
| `lower_sugar` | 🍬 | Lower sugar |
| `lower_sodium` | 🧂 | Lower sodium |
| `budget` | 💰 | Budget-friendly |
| `skip` | ⏭️ | No preference |

**CTA:** "Continue →"

**Психология:** Дополнительная персонализация. Необязательный, но создаёт ощущение кастомизации.

---

### Экран #9 — Kids Challenge (Q7)
**Тип:** `single`
**Поле:** `kidsChallenge`
**Условие:** `hasKids` (показывается только если kids > 0)

**Title:** "What's the biggest challenge with feeding your kids?"

**Description:** "We'll add smart swaps and kid-tested options."

**Опции:**
| ID | Иконка | Текст |
|----|--------|-------|
| `picky` | 🙈 | They reject most new foods |
| `veggies` | 🥦 | Won't eat vegetables |
| `different_meals` | 🍕 | Want different meals than adults |
| `school_lunches` | 🎒 | School lunches are chaos |
| `no_challenge` | 🎉 | They eat most things |

**CTA:** "Continue →"

**Психология:** Понять главную боль с детьми. Влияет на dynamic Priority options.

---

### Экран #10 — Kitchen Equipment (Q8)
**Тип:** `multi`
**Поле:** `kitchenEquipment`

**Title:** "What equipment do you have?"

**Description:** "We'll only suggest recipes you can actually make."

**Опции:**
| ID | Иконка | Текст |
|----|--------|-------|
| `basic` | 🍳 | Basics (stovetop & oven) |
| `instant_pot` | ⚡ | Instant Pot / Pressure Cooker |
| `slow_cooker` | 🍲 | Slow Cooker / Crockpot |
| `air_fryer` | 🍟 | Air Fryer |
| `blender` | 🥤 | Blender / Food Processor |
| `sheet_pans` | 🍪 | Sheet Pans |
| `grill` | 🔥 | Grill / BBQ |

**CTA:** "Continue →"

**Психология:** Исключить рецепты для техники, которой нет. Реалистичность плана.

---

### Экран #11 — Meal Complexity (Q9)
**Тип:** `multi`
**Поле:** `mealComplexity`

**Title:** "What types of meals work for you?"

**Description:** "Select all that fit your lifestyle."

**Опции:**
| ID | Текст | Описание | Примеры |
|----|-------|----------|---------|
| `assembly` | 🥗 Assembly meals (5 min) | Pre-prepped components, just combine | Buddha bowls, wraps, grain bowls |
| `simple` | 🍳 Simple cooking (15-30 min) | Minimal prep, straightforward recipes | Sheet pan dinners, pasta, stir-fry |
| `complex` | 👨‍🍳 Complex cooking (45+ min) | I enjoy cooking and want full variety | Casseroles, braises, baked dishes |

**CTA:** "Continue →"

**Психология:** Определить сложность рецептов. УТП — component cooking. Большинство выберут первые 2.

---

### Экран #12 — Micro-Reward 2
**Тип:** `micro_reward_progress`

**Title:** "Your plan is taking shape."

**Progress Items:**
- Family: X people
- Dietary filters: X applied
- Excluded ingredients: X items
- Kitchen setup: X items

**Recipes Text:** "compatible recipes found"

**CTA:** "Almost there →"

**Психология:** Показать прогресс персонализации. Пользователь видит, что данные используются.

---

## Фаза 3: РЕАЛЬНОСТЬ (reality)

### Экран #13 — Reality Bridge
**Тип:** `interstitial_dynamic`
**Dynamic Key:** `interstitial3`

**Title:** "Now let's find what's not working."

**Dynamic Text по mainGoal:**
| mainGoal | Текст |
|----------|-------|
| `mental_load` | You're making X+ food decisions daily. Let's find where the system breaks down. |
| `healthy_eating` | Getting picky eaters to try new foods is hard. Let's see what's actually happening. |
| `food_waste` | Families like yours waste ~$X/month on spoiled food. Let's find out why. |
| `time_saving` | You're spending X+ hours weekly on food. Let's see where it's going. |
| `default` | To build a system that works, we need to understand what's not working now. |

**CTA:** "Diagnose my situation →"

**Психология:** Переход от "кто вы" к "что не работает". Dynamic text создаёт relevance.

---

### Экран #14 — Current Frequency (Q10)
**Тип:** `single`
**Поле:** `currentFrequency`

**Title:** "How many home-cooked meals per week?"

**Description:** "No judgment — we meet you where you are."

**Опции:**
| ID | Иконка | Текст |
|----|--------|-------|
| `rarely` | 🥡 | 0-3 meals — mostly takeout |
| `sometimes` | 🍳 | 4-7 meals — inconsistent |
| `often` | 👨‍🍳 | 8-14 meals — regular but exhausting |
| `always` | 😰 | 15+ meals — cooking takes over life |

**CTA:** "Continue →"

**Психология:** Baseline для расчёта time savings. Без осуждения — важно для trust.

---

### Экран #15 — Midweek Pattern (Q11)
**Тип:** `single`
**Поле:** `midweekPattern`

**Title:** "What usually happens by Wednesday?"

**Description:** "This is the #1 predictor of meal plan success."

**Опции:**
| ID | Иконка | Текст |
|----|--------|-------|
| `on_track` | ✅ | Still on track |
| `improvise` | 🔀 | Start improvising |
| `food_spoils` | 🥬 | Something has gone bad |
| `exhausted` | 😩 | Too tired — we order food |
| `never_tried` | 🤷 | Never stuck with a plan |

**CTA:** "Find my pattern →"

**Психология:** Диагностика паттерна неудач. Используется в Insight Mirror и Priority.

---

## Фаза 4: ДИАГНОСТИКА (diagnosis)

### Экран #16 — Priority (Q12)
**Тип:** `single_dynamic`
**Поле:** `priority`

**Title:** "If we solve ONE thing this week, what should it be?"

**Description:** "Your plan will be built around this."

**Dynamic Options Logic:**
1. `mainGoal` → первая опция
2. `midweekPattern` → дополнительные опции
3. `kidsChallenge` → дополнительные опции
4. Defaults до 4 штук

**Возможные опции:**
| ID | Иконка | Текст |
|----|--------|-------|
| `decisions` | 🧠 | Take all daily food decisions off my plate |
| `healthy` | 🥗 | Help my family eat nutritious meals without fights |
| `no_waste` | ♻️ / 🥬 | Stop throwing away food that spoiled |
| `save_time` | ⏱️ / 😴 | Cut cooking time in half |
| `picky_eaters` | 👶 | Get my kids to actually eat |
| `school_lunches` | 🎒 | Easy packable lunches |
| `flexibility` | 🔄 | A flexible plan that survives real life |

**CTA:** "Build my plan →"

**Психология:** Финальный commitment. Options генерируются динамически на основе всех ответов.

---

### Экран #17 — Analyzing
**Тип:** `analyzing`

**Title:** "Building your personalized system..."

**Analysis Checks (animated):**
1. Analyzed X weekly meals for Y people
2. Filtered X incompatible recipes
3. Found X recipes that match your family
4. Calculated X hours/week potential time savings
5. Estimated $X/month in reduced food waste

**CTA:** "See my results →"

**Психология:** Создать anticipation. Показать calculated numbers из ответов.

---

## Фаза 5: ИНСАЙТ (insight)

### Экран #18 — Insight Mirror
**Тип:** `insight`

**Title:** "Here's what we discovered:"

**Sections:**

**1. The Real Cost** (dynamic по mainGoal)
| mainGoal | Текст |
|----------|-------|
| `mental_load` | You're making X+ food decisions per year. That's Y full days of mental energy — just on "what should we eat?" |
| `healthy_eating` | You want your family to eat healthier, but getting everyone on board — especially the picky eaters — feels like a daily battle. |
| `food_waste` | Based on your pattern, you're likely wasting $X/year on food that spoils before you use it. That's not a willpower problem — it's a freshness cycle problem. |
| `time_saving` | You're spending X hours per year on food — that's Y full days. What would you do with that time back? |

**2. The Pattern** (dynamic по midweekPattern)
| midweekPattern | Текст |
|----------------|-------|
| `on_track` | Your planning works, but you want to optimize and make it effortless. |
| `improvise` | You start strong, but by Wednesday you're improvising — which brings back all the stress you were trying to avoid. |
| `food_spoils` | Your plans derail when food spoils. This isn't about planning better — it's about a 4-day freshness cycle instead of 7. |
| `exhausted` | By midweek, you're too exhausted to cook. That's exactly when the guilt kicks in. |
| `never_tried` | You haven't found a system realistic enough to try. Most meal plans assume you have time you don't have. |

**3. Your Focus** — отображает выбранный priority

**CTA:** "Show me the solution →"

**Психология:** Показать инсайты, которые пользователь НЕ вводил. "Мы понимаем вас лучше, чем вы сами."

---

## Фаза 6: РЕШЕНИЕ (solution)

### Экран #19 — Solution Preview
**Тип:** `solution`

**Headline (dynamic по mainGoal):**
| mainGoal | Текст |
|----------|-------|
| `mental_load` | Zero daily food decisions. Here's how: |
| `healthy_eating` | Healthy meals everyone actually eats. Here's how: |
| `food_waste` | Nothing spoils. Nothing wasted. Here's how: |
| `time_saving` | X hours back every week. Here's how: |

**System Visualization:**
📅 Plan Once (weekly) → 🥗 Prep Twice (you pick the days) → 😋 Eat All Week (5-min meals)

**Priority Benefit (dynamic по priority):**
| priority | Текст |
|----------|-------|
| `decisions` | Your entire week is planned. Just open the app and assemble. No thinking required. |
| `picky_eaters` | Same base ingredients, different presentations. Everyone eats, nobody complains. |
| `no_waste` | 4-day freshness cycle. Two prep sessions mean nothing sits long enough to spoil. |
| `save_time` | 5-minute assembly. Components are ready. You just combine and serve. |
| `school_lunches` | Every meal packs perfectly. No reheating needed. Mornings become easy. |
| `flexibility` | Swap meals, adjust portions, life happens — the system adapts with you. |
| `healthy` | Nutritious meals disguised as comfort food. No fights. No complaints. |

**Stats:**
- X hours saved weekly
- $Y saved per month

**CTA:** "See my 7-day plan →"

**Психология:** Показать КАК система решает проблему. Plan→Prep→Eat визуализация.

---

## Фаза 7: КОНВЕРСИЯ (conversion)

### Экран #20 — Value Demonstration
**Тип:** `value_demo`

**Title:** "Your Week 1 Plan Preview"

**Subtitle:** "Personalized for X people"

**Shopping List:** "$87 for the week"

**Sample Recipes:**
- 🥗 Mediterranean Chicken Bowls (Assembly: 5 min)
- 🌯 Honey Garlic Shrimp Wraps (Assembly: 5 min)
- 🍚 Teriyaki Beef Bowls (Assembly: 5 min)

**Blurred Preview:**
- + 18 more recipes tailored to your family...
- + Full prep guides for both sessions...
- + Organized shopping list...

**CTA:** "Get my full plan →"

**Психология:** Показать конкретную ценность ДО email capture. Рецепты, shopping list, savings.

---

### Экран #21 — Lead Capture
**Тип:** `email`
**Поле:** `email`

**Title:** "Where should we send your plan?"

**Testimonial:**
> "I got 4 hours of my week back. My kids actually eat dinner now without complaints."
> — Sarah, mom of 3

**CTA:** "Send my plan →"

**Footer:** "No spam. Unsubscribe anytime."

**Психология:** Собрать email. Testimonial для social proof. Low friction.

---

## Фаза 8: МОНЕТИЗАЦИЯ (monetization)

### Экран #22 — Transformation Paywall
**Тип:** `paywall`

**Title:** "Your life with vs. without the system"

**Without System:**
- 😰 Daily stress about what to cook
- 🥬 Food going bad in the fridge
- 😩 Exhausted by dinner time
- 💸 ~$X/month wasted on food

**With System:**
- 😌 Zero decisions — just open and assemble
- ✨ Fresh ingredients, zero waste
- ⚡ 5-minute meals, energy to spare
- 💰 Save ~$X/month on groceries

**Pricing:**
- **14-day free trial**
- then $14.99/month
- Cancel anytime • 30-day money-back

**Social Proof:** ⭐⭐⭐⭐⭐ 4.8 from 12,847 reviews

**CTA:** "Start my free trial →"

**Психология:** Before/After framing. Emotional contrast. Trial urgency.
