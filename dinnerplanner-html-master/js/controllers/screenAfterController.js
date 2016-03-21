var ScreenAfterController = function(view, model) {

	$("#buttonSearch").click(function(){
		view.updateSearch($("#typeSearch").val(), $("#searchWord").val());
		selectDish();
		$("#searchWord").val('');
		return false;
	});

$("#typeSearch").change(function() {
	view.updateSearch($(this).val(), $("#searchWord").val());
	selectDish();
});

	var selectDish = function() {
		
		$(".image").click(function(){
		var id = $(this).attr('id');
		console.log(id);
		model.addPendingDish(id);
		$("#ScreenAfterMainView").hide();
		$("#LasagneMainView").show();
		view.update();
		})

	}

	selectDish();

	var confirmDish = function() {
		
		$("#confirmButton").click(function(){
		var id = model.getPendingDish().id;
		model.removePendingDish();
		model.addDishToMenu(id);
		console.log(model.getFullMenu(), "hej");
		$("#LasagneMainView").hide();
		$("#ScreenAfterMainView").show();
		});
	}

	confirmDish();
};
