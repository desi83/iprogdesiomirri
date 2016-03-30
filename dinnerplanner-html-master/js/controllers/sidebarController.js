var SidebarController = function(view, model) {

	var addGuest = function() {
		$("#up").click(function(){
		model.setNumberOfGuests(1);
		view.update(numberOfGuests);
		});
	}

	addGuest();

	var removeGuest = function() {
		$("#down").click(function(){
		model.setNumberOfGuests(-1);
		view.update(numberOfGuests);
		});
	}

	removeGuest();

	var confirmDinner = function(){
		$("#confirmDinner").click(function(){
			$("#ExampleView").hide()
			$("#LasagneMainView").hide()
			$("#ScreenAfterMainView").hide()
			$("#ViewSix").show()
			view.update();
		});
	}
	confirmDinner();

	var removeDish = function(){
		$(".btn btn-default btn-xs remove").click(function(){
			var id = $(this).attr('id');
			model.removeDishFromMenu(id);
			view.update();
		});
	}
	removeDish();
}