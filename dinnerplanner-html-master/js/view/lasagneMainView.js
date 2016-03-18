var LasagneMainView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	//var id = model.getPendingDish();
	console.log("hej lasagne");
	this.dishInfo = container.find("#dishInfo");

	var imagesStr = "";
	var getDishes = function () {
		console.log("hej imagesStr");
		var imagesStr = "";
		var dish = model.getPendingDish();
		imagesStr = imagesStr + '<div class="col-md-5">'
		+ '<text style="font-size: 30px;">'+dish.name+'</text></br>'
		+ '<img src="'+'images/'+dish.image+'"  alt="'+dish.name+'" style="width: 136px; height: 140px;"></img>'	 
		+ '<p class="text-justify description">'+dish.description+'</p></div>';			
		return imagesStr;
	}
	//getDishes(100);
	//this.dishInfo.html(imagesStr);

	this.numbOfGuests = container.find("#numbOfGuests");
	this.numbOfGuests.html(model.getNumberOfGuests());
	var guests = (model.getNumberOfGuests());

	this.allIngredients = container.find("#allIngredients")


	var ingredientList = "";
	var getIngredients = function () {
		console.log("hej ingredients")
		var dish = model.getPendingDish();
		var ingredientList = "";
		for(var i=0; i < dish.ingredients.length; i++){
		ingredientList = ingredientList + '<tr>'
		+ '<td style="padding-bottom:10px; padding-right: 70px;">'+dish.ingredients[i].quantity*guests+dish.ingredients[i].unit+'</td>'
		+ '<td style="padding-bottom:10px; padding-right: 70px;">'+dish.ingredients[i].name+'</td>'	 
		+ '<td style="padding-bottom:10px; padding-right: 70px;">'+dish.ingredients[i].price*guests+'</td></tr>';		
		}
		return ingredientList;
	}
	//getIngredients(100);
	//this.allIngredients.html(ingredients);

	this.update = function() {
		this.dishInfo.html(getDishes());
		this.allIngredients.html(getIngredients());
		this.specPrice = container.find("#specPrice");
		var dish = model.getPendingDish().id;
		this.specPrice.html(model.getDishPrice(dish));

	};

	model.addObserver(this);
}