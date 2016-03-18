//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.numberOfGuests = container.find("#amountOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.numberOfGuests = container.find("#amountOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.selectedDish = container.find("#selectedDish");
	this.selectedDish.html(model.getSpecificDish(100));

	this.specPrice = container.find("#selectedPrice");
	this.specPrice.html(model.getDishPrice(100));

	this.specPrice = container.find("#pendingPrice");
	this.specPrice.html(model.getDishPrice(2));

	this.totalMenuPrice = container.find("#totalPrice");
	this.totalMenuPrice.html(model.getTotalMenuPrice());

	model.addObserver(this);

this.update = function(obj) {
	};

}
