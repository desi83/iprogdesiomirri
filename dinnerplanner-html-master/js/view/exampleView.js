//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	this.updatePending = function() {
		this.numberOfGuests = container.find("#numberOfGuests");
		this.numberOfGuests.html(model.getNumberOfGuests());

		this.specPrice = container.find("#pendingPrice");
		var id = model.getPendingDish().id;
		this.specPrice.html(model.getDishPrice(id));

	};
	
	this.addedDishes = container.find("#addedDishes");


	var dishStr = "";
	 var addDish = function() {
		var fullMenu = model.getFullMenu();
		console.log(fullMenu)
		dishStr = "";
		for (i in fullMenu) {
			this.selectedDish = container.find("#selectedDish");
			this.selectedDish.replaceWith(fullMenu[i].name);

			this.numberOfGuests = container.find("#amountOfGuests");
			this.numberOfGuests.replaceWith(model.getNumberOfGuests());

			this.specPrice = container.find("#selectedPrice");
			this.specPrice.replaceWith(model.getDishPrice(fullMenu[i].id));

			dishStr = dishStr + '<div class="row addDishesRow" style="background-color: #D8D8D8; color: #B40404; border: 2px solid black; margin-top: 10px; margin-left: 1px; margin-right: 1px;">'
				+'<div class="col-md-2" id="amountOfGuests" style="font-size: 12px; text-align: left;"></div>'
				+	'<div class="col-md-6" id="selectedDish" style="font-size: 12px; text-align: right;"></div>'
				+	'<div class="col-md-4" id="selectedPrice" style="font-size: 12px; text-align: right;"></div>'
				+'<button type="button" class="btn btn-default btn-xs remove" style="background-color: #B40404; border-radius: 15px; margin-left: 175px; margin-top: -20px;"><span class="glyphicon glyphicon-remove"></span></button></div>';
		}
		
		this.totalMenuPrice = container.find("#totalPrice");
		this.totalMenuPrice.html(model.getTotalMenuPrice());
		return dishStr;
	}

$("#ExampleView").append('<div class="row" style="padding-top: 15px; padding-bottom: 15px; padding-left: 20px;">'
				+ '<text><b style="font-size: 18px;">My Dinner</b></br>People</text><text class="counter" id="numberOfGuests" style="font-size: 16px; font-family: Arial; padding-left: 30px;"></text>'
				+		'<div class="btn-group" id="guestSelect">'
				+			'<div id="upDown">'
				+				'<span class="addGuest"><button type="button" id="up" class="btn btn-default btn-xs">'
				+					'<span class="glyphicon glyphicon-chevron-up"></span></button></span>'
				+				'<span class="subtractGuest"><button type="button" id="down" class="btn btn-default btn-xs">'
				+					'<span class="glyphicon glyphicon-chevron-down"></span></button></span></div></div></div>'
				+'<div class="row" style="background-color: rgb(180,180,180); border: 2px solid black;">'
				+	'<div class="col-md-6" style="font-size: 12px; text-align: left;">Dish Name</div>'
				+	'<div class="col-md-6" style="font-size: 12px; text-align: right;">Cost</div></div>'
				+'<span id="addedDishes"></span>'
				+ '<div class="row" style="color: #B40404; margin-left: 1px; margin-right: 1px;">'
				+	'<div class="col-md-4" id="pendingDish" style="font-size: 12px; text-align: right; padding-left: 75px;">Pending</div>'
				+	'<div class="col-md-4" id="pendingPrice" style="font-size: 12px; text-align: right; padding-left: 50px;">0.00</div></div>'
				+'<div class="row" style="color: #B40404; border-top: 2px solid black; margin-top: 6px; margin-left: 1px; margin-right: 1px;">'
				+	'<div class="col-md-12" style="margin-top: 20px; font-size: 12px; text-align: right;">SEK <text id="totalPrice"></text></div></div>'
				+'<button class ="confirm" id="confirmDinner" type="button" class="btn btn-default" style="background-color:Moccasin; border: 1px solid black; margin-left: 30px; margin-top: 20px;">Confirm Dinner</button>');


	this.update = function() {
		console.log("hej från sidebarViewn")
		addDish();
		this.addedDishes.html(dishStr);
	};

model.addObserver(this);

}

