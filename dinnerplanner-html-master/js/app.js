$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and view

	var homeView = new HomeView($("#HomeView"), model);
	var homeController = new HomeController(homeView, model);

	var exampleView = new ExampleView($("#ExampleView"), model);

	var lasagneMainView = new LasagneMainView($("#LasagneMainView"), model);
	var screenAfterMainView = new ScreenAfterMainView($("#ScreenAfterMainView"), model);
	var screenAfterController = new ScreenAfterController(screenAfterMainView, model);


	var viewSix = new ViewSix($("#ViewSix"), model);
	var viewSeven = new ViewSeven($("#ViewSeven"), model);

//	var lasagneController = new LasagneController(lasagneMainView, model);

	// masterController();

});

/*var masterController = function(model) {
	console.log("go")
	$("#HomeView").show()
	$("#ExampleView").hide()
	$("#ScreenAfterMainView").hide()
	$("#LasagneMainView").hide()
	$("#ViewSix").hide()
	$("#ViewSeven").hide()
	

	};*/