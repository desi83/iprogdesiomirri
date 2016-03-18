//ExampleView Object constructor
var ViewSix = function (container, model) {
// Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
this.numberOfGuests = container.find("#numOfGuests");
this.numberOfGuests.html(model.getNumberOfGuests());
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.dishInfoViewSix = container.find("#dishInfoViewSix");

	var imagesStr = "";
	var getDishes = function () {
		// body...
		var menuType = model.getFullMenu(); //alla ids för våra dishes
		for (var i=0; i < menuType.length; i++){ 
			var dish = menuType[i];
			var dishprice = model.getDishPrice(dish.id);
			imagesStr = imagesStr + '<div class="col-md-2 ">'
			 + '<img src="'+'images/'+dish.image+'"  alt="'+dish.name+'" style="width: 136px; height: 140px;    border-top: 2px solid black;   border-left: 2px solid black;   border-right: 2px solid black;">'
			 + '<b><p style="text-align: center; background-color: Gainsboro; padding-right: 5px; padding-top: 5px; padding-left: 1px; font-size: 18px; width: 136px;    border-bottom: 2px solid black;    border-top: 2px solid black;   border-left: 2px solid black;   border-right: 2px solid black;">'+dish.name+
			 '</p></b>'
			 +'<p style="text-align: left;">'+"SEK "+dishprice+'</p></div>';
		}
		return imagesStr;
	}
	getDishes();
	this.dishInfoViewSix.html(imagesStr);
	this.totalMenuPrice = container.find("#priceee");
	this.totalMenuPrice.html(model.getTotalMenuPrice());
	
this.update = function(obj) {
	};

	model.addObserver(this);

//	this.specPrice.html(getDishPrice());
}