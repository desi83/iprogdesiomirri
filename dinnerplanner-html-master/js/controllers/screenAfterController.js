var ScreenAfterController = function(view, sidebarview, model) {

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
		model.addPendingDish(id);
		$("#ScreenAfterMainView").hide();
		$("#ViewSix").hide();
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
		sidebarview.addDish(id);
		$("#LasagneMainView").hide();
		$("#ScreenAfterMainView").show();
		});
	}

	confirmDish();
	
	var goBack = function() {
		$("#backButton").click(function(){
			console.log('hej från back')
			$("#LasagneMainView").hide()
			$("#ScreenAfterMainView").show()
		});
	}
	goBack();
	

};
