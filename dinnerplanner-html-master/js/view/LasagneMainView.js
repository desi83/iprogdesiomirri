var LasagneMainView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var id = model.getPendingDish();
	console.log(id);
	this.dishInfo = container.find("#dishInfo");

	var imagesStr = "";
	var getDishes = function (id) {
		var imagesStr = "";
		var dish = model.getDish(id);
		imagesStr = imagesStr + '<div class="col-md-5">'
		+ '<text style="font-size: 30px;">'+dish.name+'</text></br>'
		+ '<img src="'+'images/'+dish.image+'"  alt="'+dish.name+'" style="width: 136px; height: 140px;"></img>'	 
		+ '<p class="text-justify description">'+dish.description+'</p></div>';			
		return imagesStr;
	}
	//getDishes(100);
	//this.dishInfo.html(imagesStr);

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
	var guests = (model.getNumberOfGuests());

	this.allIngredients = container.find("#allIngredients")


	var ingredients = "";
	var getIngredients = function (id) {
		var dish = model.getDish(id);
		var ingredients = "";
		for(var i=0; i < dish.ingredients.length; i++){
		ingredients = ingredients + '<tr>'
		+ '<td style="padding-bottom:10px; padding-right: 70px;">'+dish.ingredients[i].quantity*guests+dish.ingredients[i].unit+'</td>'
		+ '<td style="padding-bottom:10px; padding-right: 70px;">'+dish.ingredients[i].name+'</td>'	 
		+ '<td style="padding-bottom:10px; padding-right: 70px;">'+dish.ingredients[i].price*guests+'</td></tr>';		
		}
		return ingredients;
	}
	//getIngredients(100);
	//this.allIngredients.html(ingredients);

	this.specPrice = container.find("#selectedPrice");
	this.specPrice.html(model.getDishPrice(id));
this.update = function(obj) {
	this.dishInfo.html(getDishes(id));
	this.allIngredients.html(getIngredients(id));

	};

	model.addObserver(this);
}