var LasagneMainView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	//var id = model.getPendingDish();

	var imagesStr = "";
	var getDishes = function (id) {
		var imagesStr = "";
		model.getDish(id, function(dishes){
			var dish = dishes;
			imagesStr = imagesStr + '<div class="col-md-5">'
			+ '<text style="font-size: 30px;">'+String(dish.Title)+'</text></br>'
			+ '<img src="'+String(dish.ImageURL)+'"  alt="'+String(dish.Title)+'" style="width: 136px; height: 140px;"></img>'	 
			+ '<p class="text-justify description">'+String(dish.Instructions)+'</p>'
			+ '<button id="'+ dish.RecipeID +'" type="button" class="specDish btn btn-warning" style="margin-top: 20px;">Confirm Dish</button></div>';	
			this.dishInfo = container.find("#dishInfo");
			this.dishInfo.html(imagesStr);
		});
	}
	//getDishes(100);
	//this.dishInfo.html(imagesStr);


	var ingredientList = "";
	var getIngredients = function (id) {
		if (id != undefined){
		model.getDish(id, function(dishes){
			var dish = dishes;
			var guests = (model.getNumberOfGuests());
			var ingredientList = "";
			var price = "";

			for(var i=0; i < dish.Ingredients.length; i++){
				ingredientList = ingredientList + '<tr>'
				+ '<td style="padding-bottom:10px; padding-right: 70px;">'+String(dish.Ingredients[i].MetricQuantity)*guests+String(dish.Ingredients[i].MetricUnit)+'</td>'
				+ '<td style="padding-bottom:10px; padding-right: 70px;">'+String(dish.Ingredients[i].Name)+'</td>'	 
				+ '<td style="padding-bottom:10px; padding-right: 70px;">'+String(dish.Ingredients[i].MetricQuantity)*guests+'</td></tr>';	
				price = parseInt(price + (dish.Ingredients[i].MetricQuantity)*guests);
			}

			this.specPrice = container.find("#specPrice");
			this.pendingPrice = container.find("#pendingPrice");
			this.specPrice.html(price);
			this.pendingPrice.html(price);
			this.allIngredients = container.find("#allIngredients");
			this.allIngredients.html(ingredientList);
		});
	}
	}

	//getIngredients(100);
	//this.algetlIngredients.html(ingredients);
	$("#backButton").append('<button id="backButton" type="button" class="btn btn-warning" style="margin-top: 20px; margin-left:950px; padding-right: 10px; padding-left: 10px; ">Go Back</button>');

	this.update = function(id) {
		this.numbOfGuests = container.find("#numbOfGuests");
		this.numbOfGuests.html(model.getNumberOfGuests());
		getDishes(id);
		getIngredients(id);
		//var dishTwo = model.getPendingDish().RecipeID;
		//this.specPrice.html(model.getDishPrice(dishTwo));


	};

	model.addObserver(this);
}