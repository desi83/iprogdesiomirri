var LasagneController = function(view, model) {

		view.update();
		console.log("hej controller");

		var confirmDish = function() {
		
		$("#confirmButton").click(function(){
		var id = $(this).attr('id');
		console.log(id);
		model.removePendingDish();
		model.addDishToMenu(id);
		$("#LasagneMainView").hide();
		$("#ScreenAfterMainView").show();
		});
	}
	confirmDish();
};