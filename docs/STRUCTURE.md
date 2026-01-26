# Quiz Funnel — Структура

## Общая информация

**Название:** Family Meal Planning Quiz Funnel
**Цель:** Собрать данные о семье пользователя и предложить персонализированный план питания
**Количество экранов:** 22
**Количество вопросов:** 12

---

## Фазы воронки

| # | Фаза | Название (RU) | Экраны | Цель |
|---|------|---------------|--------|------|
| 1 | engagement | ВОВЛЕЧЕНИЕ | 1-4 | Захват внимания, первый commitment, визуализация успеха |
| 2 | context | КОНТЕКСТ | 5-12 | Сбор данных о семье, диетах, оборудовании |
| 3 | reality | РЕАЛЬНОСТЬ | 13-15 | Диагностика текущей ситуации и паттернов неудач |
| 4 | diagnosis | ДИАГНОСТИКА | 16-17 | Финальный выбор приоритета, анализ данных |
| 5 | insight | ИНСАЙТ | 18 | Показать инсайты, которые пользователь не осознавал |
| 6 | solution | РЕШЕНИЕ | 19 | Демонстрация как система решает проблему |
| 7 | conversion | КОНВЕРСИЯ | 20-21 | Демонстрация ценности, сбор email |
| 8 | monetization | МОНЕТИЗАЦИЯ | 22 | Предложение подписки |

---

## Цветовая схема фаз

```
engagement:    bg-blue-500     (синий)
context:       bg-cyan-500     (циан)
reality:       bg-amber-500    (янтарный)
diagnosis:     bg-orange-500   (оранжевый)
insight:       bg-pink-500     (розовый)
solution:      bg-emerald-500  (изумрудный)
conversion:    bg-green-500    (зелёный)
monetization:  bg-purple-500   (фиолетовый)
```

---

## Типы экранов

| Тип | Описание | Примеры экранов |
|-----|----------|-----------------|
| `welcome` | Лендинг с value proposition | #1 |
| `goal_entry` | Первый вопрос (single choice) | #2 |
| `single` | Выбор одного варианта | #3, #9, #14, #15 |
| `single_dynamic` | Single choice с динамическими опциями | #16 |
| `multi` | Множественный выбор | #6, #8, #10, #11 |
| `multi_with_custom` | Multi + кастомное поле ввода | #7 |
| `number` | Числовой ввод (+-) | #5 |
| `micro_reward` | Валидация + social proof | #4 |
| `micro_reward_progress` | Прогресс персонализации | #12 |
| `interstitial_dynamic` | Переходный экран с динамическим текстом | #13 |
| `analyzing` | Анимация анализа данных | #17 |
| `insight` | Показ инсайтов | #18 |
| `solution` | Презентация решения | #19 |
| `value_demo` | Демонстрация ценности | #20 |
| `email` | Сбор email | #21 |
| `paywall` | Предложение подписки | #22 |

---

## Условная логика

### hasKids
Если `answers.kids > 0`, показывается экран #9 (Kids Challenge).

### Dynamic Options (экран #16)
Опции генерируются на основе:
1. `mainGoal` → первая опция
2. `midweekPattern` → дополнительные опции
3. `kidsChallenge` → дополнительные опции
4. Defaults до 4 штук

### Dynamic Text
- `interstitial3` — зависит от `mainGoal`
- `mainChallenge` — зависит от `mainGoal`
- `patternInsight` — зависит от `midweekPattern`
- `solutionHeadline` — зависит от `mainGoal`
- `priorityBenefit` — зависит от `priority`

---

## Собираемые данные (answers)

| Поле | Тип | Экран | Описание |
|------|-----|-------|----------|
| `mainGoal` | string | #2 | Главная цель |
| `idealOutcome` | string | #3 | Идеальный результат |
| `adults` | number | #5 | Количество взрослых |
| `kids` | number | #5 | Количество детей |
| `dietary` | array | #6 | Диетические ограничения |
| `allergies` | array | #7 | Аллергии |
| `customAllergies` | string | #7 | Кастомные аллергии |
| `nutritionPriorities` | array | #8 | Приоритеты питания |
| `kidsChallenge` | string | #9 | Проблема с детьми |
| `kitchenEquipment` | array | #10 | Кухонное оборудование |
| `mealComplexity` | array | #11 | Сложность блюд |
| `currentFrequency` | string | #14 | Частота готовки |
| `midweekPattern` | string | #15 | Паттерн к среде |
| `priority` | string | #16 | Главный приоритет |
| `email` | string | #21 | Email |

---

## Расчётные метрики

Формулы в `getCalculatedInsights()`:

```javascript
weeklyMeals = totalPeople * 21  // 3 meals × 7 days

hoursPerWeek = {
  'always': 14,
  'often': 10,
  'sometimes': 6,
  'rarely': 3
}

wastedFoodPerMonth = {
  'food_spoils': $180,
  'improvise': $120,
  'other': $80
}

decisionsPerDay = totalPeople > 2 ? 12 : 8

recipesFiltered = 2847 - dietary.length * 200 - allergies.length * 150

weeklyTimeSaved = hoursPerWeek * 0.6
monthlySavings = wastedFoodPerMonth * 0.7
```
