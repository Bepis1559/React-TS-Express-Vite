const pizzaIngredients: string[] = ["Mushroom", "Bell Pepper", "Olives", "Onion", "Ham", "Pineapple", "Tomato Sauce", "Mozzarella Cheese", "Pepperoni", "Sausage",
    "Bacon", "Chicken", "Beef", "Anchovies", "Jalapeno", "Spinach", "Artichoke", "Basil", "Garlic", "Feta Cheese", "Sun-Dried Tomatoes", "Barbecue Sauce",
    "Pesto", "Ricotta Cheese", "Prosciutto", "Arugula", "Eggplant", "Roasted Red Pepper", "Caramelized Onions", "Zucchini", "Calamari", "Clams",
    "Shrimp", "Tuna", "Capers", "Parmesan Cheese", "Gorgonzola Cheese", "Boursin Cheese", "Roasted Potato", "Grilled Vegetables", "Caramelized Apples",
    "Diced Tomatoes", "Gouda Cheese", "Smoked Salmon", "Roasted Chicken", "Grilled Steak", "Caramelized Shallots", "Pears", "Blue Cheese", "Smoked Sausage",
    "Mango", "Avocado", "Tofu", "Pesto Sauce", "Goat Cheese", "Parmesan Reggiano", "Basil Pesto", "Brie Cheese", "Caramelized Garlic", "Roasted Carrots",
    "Asparagus", "Grilled Peppers", "Honey Mustard Sauce", "Crabmeat", "Spicy Sausage", "Balsamic Glaze"]



const pancakeIngredients: string[] = ["Chocolate chips", "Blueberries", "Bananas", "Strawberries", "Maple syrup", "Whipped cream", "Peanut butter", "Cinnamon",
    "Sugar", "Honey", "Almonds", "Pecans", "Walnuts", "Macadamia nuts", "Cashews", "Raisins", "Cranberries", "Cherries", "Apples", "Peaches", "Plums", "Raspberries",
    "Blackberries", "Apricots", "Pineapple", "Coconut flakes", "Peanut butter chips", "Dark chocolate chips", "Milk chocolate chips", "White chocolate chips", "Yogurt",
    "Butterscotch chips", "Graham crackers", "Marshmallows", "Candy sprinkles", "Caramel sauce", "Butterscotch sauce", "Chocolate sauce", "Fruit syrups", "Caramelized onions",
    "Caramelized apples", "Sautéed mushrooms", "Sautéed bananas", "Sautéed berries", "Fried eggs", "Bacon bits", "Sausage crumbles", "Ham bits", "Grilled chicken", "Grilled steak",
    "Fruit compote", "Lemon curd", "Granola", "Coconut flakes", "Salted caramel sauce", "Nutella", "Peanut butter", "Cream cheese frosting",

]

const hamburgerIngredients: string[] = ["Beef patty", "Bacon", "Cheese", "Lettuce", "Tomato", "Onion", "Pickles", "Mustard", "Ketchup", "Mayonnaise", "BBQ sauce",
    "Jalapeños", "Avocado", "Mushrooms", "Grilled onions", "Egg", "Pineapple", "Sour cream", "Guacamole", "Hot sauce", "Honey mustard", "Teriyaki sauce", "Blue cheese dressing",
    "Ranch dressing", "Thousand Island dressing", "Hot peppers", "Relish", "Caramelized onions", "Barbecue pulled pork", "Grilled chicken", "Fried chicken", "Crushed Doritos",
    "Fried eggplant", "Pesto", "Aioli", "Tzatziki sauce", "Horseradish sauce", "Salsa", "Roasted red peppers", "Grilled zucchini", "Artichoke hearts", "Roasted garlic",
    "Sun-dried tomatoes", "Sautéed spinach", "Sautéed mushrooms", "Caramelized mushrooms", "Fried jalapeños", "Grilled asparagus", "Roasted sweet potato", "Roasted red onion",
    "Balsamic glaze", "Chipotle mayo", "Swiss cheese", "Cheddar cheese", "Pepper Jack cheese", "Brioche bun", "Sesame seed bun", "Whole grain bun"]





export const PizzaIngredients = () => pizzaIngredients
export const PancakeIngredients = () => pancakeIngredients
export const HamburgerIngredients = () => hamburgerIngredients


export const getIngredientsPerRow = (start: number, end: number, arrOfIgredients: string[]): string[] => arrOfIgredients.slice(start, end)

