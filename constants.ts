
export const EXAMPLE_TEXTS = [
  {
    title: "Recipe",
    content: `Classic Chocolate Chip Cookies

Ingredients:
- 1 cup (2 sticks) unsalted butter, softened
- 3/4 cup granulated sugar
- 3/4 cup packed brown sugar
- 1 tsp vanilla extract
- 2 large eggs
- 2 1/4 cups all-purpose flour
- 1 tsp baking soda
- 1/2 tsp salt
- 2 cups semi-sweet chocolate chips

Instructions:
1. Preheat oven to 375°F (190°C).
2. Cream together butter and sugars until light and fluffy.
3. Beat in vanilla and eggs one at a time.
4. In a separate bowl, whisk together flour, baking soda, and salt.
5. Gradually add dry ingredients to the wet mixture.
6. Stir in chocolate chips.
7. Drop by rounded tablespoons onto ungreased baking sheets.
8. Bake for 9-11 minutes or until golden brown.`,
  },
  {
    title: "Poem",
    content: `The silent moon, a silver coin,
Is tossed into the cosmic sea.
It ripples through the velvet dark,
A lonely light for you and me.

The stars, like dust of diamond bright,
Are scattered on a field of night.
They whisper tales of ancient lore,
Of dreams that were and are no more.`,
  },
  {
    title: "Code",
    content: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
  },
];
