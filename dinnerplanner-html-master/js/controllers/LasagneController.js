var LasagneController = function(view, model) {

		var confirmDish = function() {
		
		$("#confirm").click(function(){
		var id = $(this).attr('id');
		console.log(id);
		model.removePendingDish();
		model.addDishToMenu(id);
		$("#LasagneMainView").hide();
		$("#ScreenAfterMainView").show();
		});

	}
}