var ScreenAfterController = function(view, model) {

	$("#buttonSearch").click(function(){
		console.log("buttonSearch");
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
		console.log("hej");
		model.addPendingDish(id);
		$("#ScreenAfterMainView").hide();
		$("#LasagneMainView").show();
		})

	}

	selectDish();
};
