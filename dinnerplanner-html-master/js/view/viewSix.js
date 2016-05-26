//ExampleView Object constructor
var ViewSix = function (container, model) {
// Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.dishInfoViewSix = container.find("#dishInfoViewSix");

	var imagesStr = "";
	var getDishes = function () {
		// body...
		var fullMenu = model.getFullMenu();
		imagesStr = "";
		var totalPrice = 0;
		for (var i=0; i < fullMenu.length; i++){ 
			var dish = fullMenu[i];
			var amountOfGuests = model.getNumberOfGuests();			
			var selectedPrice = 0;
			for(var j=0; j < dish.Ingredients.length; j++){
				selectedPrice = selectedPrice + parseInt((dish.Ingredients[j].MetricQuantity)*amountOfGuests);
			}
			imagesStr = imagesStr + '<div class="col-md-2 ">'
			 + '<img src="'+dish.ImageURL+'"  alt="'+dish.Title+'" style="width: 136px; height: 140px;    border-top: 2px solid black;   border-left: 2px solid black;   border-right: 2px solid black;">'
			 + '<b><p style="text-align: center; background-color: Gainsboro; padding-right: 5px; padding-top: 5px; padding-left: 1px; font-size: 18px; width: 136px;    border-bottom: 2px solid black;    border-top: 2px solid black;   border-left: 2px solid black;   border-right: 2px solid black;">'+dish.Title+
			 '</p></b>'
			 +'<p style="text-align: left;">'+"SEK "+selectedPrice+'</p></div>';
			totalPrice += selectedPrice;
		}
		this.totalMenuPrice = container.find("#priceee");
		console.log(totalPrice)
		this.totalMenuPrice.html(totalPrice);
		return imagesStr;
	}
	
this.update = function() {
	this.numberOfGuests = container.find("#numOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
	getDishes();
	this.dishInfoViewSix.html(imagesStr);
	};

	model.addObserver(this);

//	this.specPrice.html(getDishPrice());
}