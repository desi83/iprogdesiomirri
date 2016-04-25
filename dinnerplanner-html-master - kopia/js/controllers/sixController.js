var SixController = function(view, viewSeven, model) {
	var editDinner = function() {
		$("#editDinner").click(function(){
			console.log("inne i sexan")
			$("#ExampleView").show()
			$("#ScreenAfterMainView").show()
			$("#ViewSix").hide()
		});
	}

	editDinner();

	var printDish = function() {
		$("#printButton").click(function(){
		$("#ViewSix").hide();
		$("#ViewSeven").show();
		viewSeven.update();
		});
	}

	printDish();
}