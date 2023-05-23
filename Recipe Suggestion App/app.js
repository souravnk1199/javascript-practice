const recipes = [
  {
    name: "Chicken Curry",
    ingredients: [
      "chicken",
      "onion",
      "tomato",
      "ginger garlic paste",
      "chicken masala",
      "oil",
      "cumin",
      "coriander",
    ],
    pluralIngredients: [
      "chickens",
      "onions",
      "tomatoes",
      "oils",
      "cumins",
      "corianders",
    ],
    link: "https://simpleindianrecipes.com/chickencurry.aspx",
    isIngredient: false,
    mainIngredients: ["chicken"],
    mainIngredientsPlural: ["chickens"],
  },
  {
    name: "Rava Idli",
    ingredients: [
      "rava",
      "green chilly",
      "sour curd",
      "onion",
      "baking soda",
      "coriander",
      "salt",
    ],
    pluralIngredients: ["green chillies", "onions", "corianders"],
    link: "https://simpleindianrecipes.com/ravaidli.aspx",
    isIngredient: false,
    mainIngredients: ["rava"],
    mainIngredientsPlural: [],
  },
  {
    name: "Chicken Tikka Masala",
    ingredients: [
      "chicken",
      "tomato",
      "ginger garlic paste",
      "cashew",
      "cream",
      "oil",
      "salt",
      "kasoori methi",
      "coriander",
      "cumin",
      "garam masala",
    ],
    pluralIngredients: [
      "tomatoes",
      "chickens",
      "cashews",
      "creams",
      "corianders",
      "cumins",
      "oils",
    ],
    link: "https://simpleindianrecipes.com/chickentikkamasala.aspx",
    isIngredient: false,
    mainIngredients: ["chicken", "tomato"],
    mainIngredientsPlural: ["chickens", "tomatoes"],
  },
  {
    name: "Malabar Chicken Curry",
    ingredients: ["chicken", "cashew", "coconut", "salt", "oil"],
    pluralIngredients: ["chickens", "cashews", "coconuts", "oils"],
    link: "https://simpleindianrecipes.com/chickentikkamasala.aspx",
    isIngredient: false,
    mainIngredients: ["chicken", "coconut"],
    mainIngredientsPlural: ["chickens", "coconuts"],
  },
  {
    name: "Sprouts Salad",
    ingredients: [
      "sprout",
      "onion",
      "tomato",
      "green chilly",
      "lemon",
      "coriander",
      "mint leaf",
    ],
    pluralIngredients: [
      "sprouts",
      "onions",
      "tomatoes",
      "green chilles",
      "lemons",
      "corianders",
      "mint leaves",
    ],
    link: "https://simpleindianrecipes.com/sproutssalad.aspx",
    isIngredient: false,
    mainIngredients: ["sprout"],
    mainIngredientsPlural: ["sprouts"],
  },
  {
    name: "vegetable Salad",
    ingredients: [
      "cucumber",
      "onion",
      "tomato",
      "capsicum",
      "green chilly",
      "lemon",
      "coriander",
      "mint leaf",
    ],
    pluralIngredients: [
      "cucumbers",
      "onions",
      "tomatoes",
      "capsicums",
      "green chillies",
      "lemons",
      "corianders",
      "mint leaves",
    ],
    link: "https://simpleindianrecipes.com/sproutssalad.aspx",
    isIngredient: false,
    mainIngredients: ["cucumber"],
    mainIngredientsPlural: ["cucumbers"],
  },
  {
    name: "Dosa",
    ingredients: ["dosa batter", "oil"],
    pluralIngredients: ["oils"],
    link: "https://simpleindianrecipes.com/dosa.aspx",
    isIngredient: false,
    mainIngredients: ["dosa batter"],
    mainIngredientsPlural: [],
  },
  {
    name: "Dosa Batter",
    ingredients: ["rice", "urad dal", "fenugreek seed", "salt"],
    pluralIngredients: ["rices", "urad dals", "fenugreek seeds"],
    link: "https://simpleindianrecipes.com/dosa.aspx",
    isIngredient: true,
    mainIngredients: ["rice", "urad dal"],
    mainIngredientsPlural: ["rices", "urad dals"],
  },
  {
    name: "Egg Fried Rice",
    ingredients: ["egg", "onion", "chilly", "salt", "oil", "rice"],
    pluralIngredients: ["eggs", "onions", "chillies", "oils", "rices"],
    link: "https://www.indianhealthyrecipes.com/egg-fried-rice/",
    isIngredient: false,
    mainIngredients: ["egg", "rice"],
    mainIngredientsPlural: ["eggs", "rices"],
  },
];

const getMatcingRecipes = (userInput) => {
  const matchingRecipes = [];

  for (const recipe of recipes) {
    let ingredientsMatched = 0;
    let mainIngredientsMatched = 0;

    for (const ingredient of userInput) {
      if (
        recipe.ingredients.includes(ingredient) ||
        recipe.pluralIngredients.includes(ingredient)
      ) {
        ingredientsMatched++;
        if (
          recipe.mainIngredients.includes(ingredient) ||
          recipe.mainIngredientsPlural.includes(ingredient)
        ) {
          mainIngredientsMatched++;
        }
      }
    }

    let percentage = ingredientsMatched / recipe.ingredients.length;

    if (recipe.isIngredient && percentage >= 0.8) {
      userInput.push(recipe.name.toLowerCase());
    }

    if (mainIngredientsMatched !== recipe.mainIngredients.length) {
      continue;
    }

    if (percentage >= 0.8) {
      matchingRecipes.push(recipe);
    }
  }

  return matchingRecipes;
};

const main = () => {
  let input = prompt("Enter ingredients you have separated by comas.", "");
  let inputArray = input.split(",").map((i) => i.trim().toLowerCase());
  let inputArray2 = [...inputArray];
  let matchedRecipes = getMatcingRecipes(inputArray);
  if (inputArray2.length !== inputArray.length) {
    matchedRecipes = getMatcingRecipes(inputArray);
  }
  if (matchedRecipes.length === 0) {
    console.log("No Matching Recipes Found!");
  } else {
    console.log("You can make the following recipes:\n");
    let i = 1;
    for (let recipe of matchedRecipes) {
      console.log(`${i}. ${recipe.name} - ${recipe.link}`);
      i++;
    }
  }
};

main();

/*
chicken,onion,tomato,ginger garlic paste,chicken masala, oil, cumin, coriander
rava,green chilly,sour curd,onion,baking soda,coriander,salt,
chicken,tomato,ginger garlic paste,cashew,cream,oil,salt,kasoori methi,coriander,cumin,garam masala,
chicken,cashew,coconut,salt,oil
sprout,onion,tomato,green chilly,lemon,coriander,mint leaf,
cucumber,onion,tomato,capsicum,green chilly,lemon,coriander,mint leaf,
rice,urad dal,fenugreek seed,salt,oil
egg,onion,chilly,salt,oil,rice
*/
