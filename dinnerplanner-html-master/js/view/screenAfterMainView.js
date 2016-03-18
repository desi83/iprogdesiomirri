var ScreenAfterMainView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.dishImage = container.find("#dishImage");

	var imagesStr = "";
	var getDishes = function (type, filter) {
		//console.log($("#dishImage"));
		var menuType = model.getAllDishes(type, filter);
		console.log(menuType);
		imagesStr = "";
		for (var i=0; i < menuType.length; i++){ 
			var dish = menuType[i];
			imagesStr = imagesStr + '<div class="image col-md-2" id='+dish.id+'>'
			 + '<center><img src="'+'images/'+dish.image+'"  alt="'+dish.name+'" style="width: 136px; height: 140px;"></img>'
			 + '<button class="dish" style=" border: 1px solid black; width: 136px;">'+dish.name+'</button>'	 
			 + '<p class="text-justify description">'+dish.description+'</p></div></center>';			
		}
		return imagesStr;
	}
 //ska skicka vidare det inmatade värdet från serach(fixas i controllern)
	//getDishes("main dish", "meat balls");

	this.updateSearch = function(type, filter) {
		this.dishImage.empty();
		this.dishImage.html(getDishes(type, filter));

	};

this.update = function(obj) {
	};

	model.addObserver(this);
}

