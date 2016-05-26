var ScreenAfterController = function(view, sidebarview, lasagnemainview, model) {

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
	$('#dishImage').on('click', '.image', function(){
			 //hämtar attributet id från den dishen vi har klickat på
			var id = $(this).attr('id');
			$("#ScreenAfterMainView").hide();
			$("#ViewSix").hide();
			$("#LasagneMainView").show();
			sidebarview.updatePending(id);
			lasagnemainview.update(id);
		})

	}

	selectDish();

	var confirmDish = function() {
		$("#dishInfo").on('click', '.specDish', function(){
			var id = $(this).attr('id');
			console.log(id)
			model.addDishToMenu(id);
			$("#LasagneMainView").hide();
			$("#ScreenAfterMainView").show();
			sidebarview.update();
			});
	}

	confirmDish();

	var goBack = function() {
		$("#backButton").click(function(){
			$("#LasagneMainView").hide();
			$("#ScreenAfterMainView").show();
			sidebarview.update();
		});
	}
	goBack();

	$(document).ajaxStart(function() {
		$(".loading").show();
	});
	$( document ).ajaxStop(function() {
		$( ".loading" ).hide();
	});


};
