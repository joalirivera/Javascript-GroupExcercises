class FoodItem {
	constructor (name, calories, vegan, glutenFree, citrusFree) {
		this.name 		= name;
		this.calories 	= calories; //number
		this.vegan 		= vegan || false; //boolean
		this.glutenFree = glutenFree || false; //boolean
		this.citrusFree = citrusFree || false; //boolean
	}
	myString (){
		console.log(this.name, this.calories, this.vegan, this.glutenFree, this.citrusFree);
	}
}

var item1 = new FoodItem('beef', 500000, false, true, true);
var item2 = new FoodItem('pasta', 1000000, true, false, true);
var item3 = new FoodItem('peppers', 5, true, true, true );
var item4 = new FoodItem('beans', 10, true, true, true );
var item5 = new FoodItem('cheese', 100500, false, true, true);
var item6 = new FoodItem('avocados', 50, true, true, true);
var item7 = new FoodItem('onion', 5, true, true, true);
var item8 = new FoodItem('tomato', 5, true, true, true);
var item9 = new FoodItem('lime', 0, true, true, false);
var item10 = new FoodItem('salt', 0, true, true, true);
var item11 = new FoodItem('pepper', 0, true, true, true);


class Drink {
    constructor(name, description, price, ingredients){
        this.name        = name;
        this.description = description;
        this.price       = price; //number
        this.ingredients = ingredients; //Array of FoodItem ingredients
    }
    myString () {
        console.log(this.name, this.description, this.price, this.ingredients.toString());
        //for (var i = 0; i < this.igredients.length; i++);
    }
}

var drink1 = new Drink ('Margarita', 'Ouch, tasty', 10, ['Vodka', 'Everclear', 'Isopropal Alcohol']);

class Plate{
    constructor(name, description, price, ingredients){
        this.name        = name;
        this.description = description;
        this.price       = price; //number
        this.ingredients = ingredients; //Array of FoodItem ingredients
    }
    myString(){
        console.log(this.name, this.description, this.price, this.ingredients.toString());
        //for (var i = 0; i < this.ingredients.length; i++){
        //}
    }
    isVegan(){
        for (var i = 0; i < this.ingredients.length; i++){
        if (this.ingredients[i].vegan == false){
            return false;
            }
        } return true;
    };
    isGlutenFree(){
        for (var i = 0; i < this.ingredients.length; i++){
        if(this.ingredients[i].glutenFree == false){
            return false;
            }
        } return true;
    };
    isCitrusFree(){
        for (var i = 0; i < this.ingredients.length; i++){
        if(this.ingredients[i].citrusFree == false){
            return false;
            }
        } return true;
    };
}

var plate1 = new Plate ('Burrito', 'Stuffed with awesomeness', 50, [item4, item1, item5]);
var plate2 = new Plate ('Guacamole', 'Our special recipe', 20, [item6, item7, item8, item9, item10, item11]);

class Order {
    constructor(plates){
        this.plates = plates; //Array of Plate plates
    }
    myString(){
        for (var i = 0; i < this.plates.length; i++){
            this.plates[i].myString()
        }
    }
}

class Menu {
    constructor(plates){
        this.plates = plates; //Array of Plate plates
    }
    myString(){
        for(var i = 0; i < this.plates.length; i++){
            this.plates[i].myString()
        }
    }
}

var menu1 = new Menu ([plate1, plate2, drink1]);

class Restaurant{
    constructor(name, description, menu){
        this.name = name;
        this.description = description;
        this.menu = menu;
    }
    myString () {
        console.log(this.name, this.description, this.menu);
    }
}

var restaurant = new Restaurant('Lizardo', 'A Weird Place', menu1);



class Customer{
    constructor(dietaryPreference){
        this.dietaryPreference = dietaryPreference;
    }
    myString(){
        console.log(dietaryPreference);
    }
}   
Add Comment Collapse