const Ingredients: string[] = ["Mushroom", "Bell Pepper", "Olives", "Onion", "Ham", "Pineapple", "Tomato Sauce", "Mozzarella Cheese", "Pepperoni", "Sausage",
    "Bacon", "Chicken", "Beef", "Anchovies", "Jalapeno", "Spinach", "Artichoke", "Basil", "Garlic", "Feta Cheese", "Sun-Dried Tomatoes", "Barbecue Sauce",
    "Pesto", "Ricotta Cheese", "Prosciutto", "Arugula", "Eggplant", "Roasted Red Pepper", "Caramelized Onions", "Zucchini", "Calamari", "Clams",
    "Shrimp", "Tuna", "Capers", "Parmesan Cheese", "Gorgonzola Cheese", "Boursin Cheese", "Roasted Potato", "Grilled Vegetables", "Caramelized Apples",
    "Diced Tomatoes", "Gouda Cheese", "Smoked Salmon", "Roasted Chicken", "Grilled Steak", "Caramelized Shallots", "Pears", "Blue Cheese", "Smoked Sausage",
    "Mango", "Avocado", "Tofu", "Pesto Sauce", "Goat Cheese", "Parmesan Reggiano", "Basil Pesto", "Brie Cheese", "Caramelized Garlic", "Roasted Carrots",
    "Asparagus", "Grilled Peppers", "Honey Mustard Sauce", "Crabmeat", "Spicy Sausage", "Balsamic Glaze"]







export const getIngredientsArr = () => Ingredients

export const getIngredients = (start: number, end: number): string[] => Ingredients.slice(start, end)

