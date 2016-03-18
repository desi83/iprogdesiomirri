$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and view

	var homeView = new HomeView($("#HomeView"), model);
	var exampleView = new ExampleView($("#ExampleView"), model);
	var viewSeven = new ViewSeven($("#ViewSeven"), model);
	var screenAfterMainView = new ScreenAfterMainView($("#ScreenAfterMainView"), model);
	var lasagneMainView = new LasagneMainView($("#LasagneMainView"), model);
	var viewSix = new ViewSix($("#ViewSix"), model);


	var homeController = new HomeController(homeView, model);
	var screenAfterController = new ScreenAfterController(screenAfterMainView, model);
	var lasagneController = new LasagneController(lasagneMainView, model);
});