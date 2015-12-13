define(['kitchen', 'choose_image', 'jquery', 'jquery-ui', 'underscore', 'backbonewreqr', 'backbonebabysitter', 'backbone', 'backbonemarionette'], function(kitchenMainView, chooseImageView) {
	var deferred = Marionette.Deferred();
	var mainApp;
	
	_.result(deferred, 'promise').then(function (target) {
	    // console.log("Hello, " + target + "!");
	    mainApp.start();
	});

	var getReady = function(){
		var default_paths_images = {
			k1: './src/images/kitchen/k1-beige.png',
			k2: './src/images/kitchen/k2-beige.png',
			k3: './src/images/kitchen/k3-beige.png',
			color_number: 'color3',
			position: 'c_position',
			can_rotate: false,
			mainPath: './src/images/kitchen/',
			default_poster: './src/images/posters/puuviljad-murul1.jpg',
			scale: 1,
			top_place: 0,
			left_place: 0,
			scale_mirrow: false
		};
		var layoutView = new kitchenMainView(default_paths_images);
		var imagesView = new chooseImageView();

		mainApp = new Marionette.Application({
			mainView: layoutView,
			imagesListView: imagesView,
			regions: {
				aRegion: "#area-kitchen",
				bRegion: "#images_list"
			}
		});
		mainApp.addInitializer(function(options){
			layoutView.mainApp = mainApp;
			mainApp.getRegion('aRegion').show(layoutView);
			mainApp.getRegion('bRegion').show(imagesView);			
		});

		function hide_show(){
			$(mainApp.imagesListView.el).hide();
			setTimeout(function() {
				console.log(mainApp.mainView.el);
				$(mainApp.mainView.el).hide();
				$(mainApp.imagesListView.el).show();
				// mainApp.getRegion('aRegion').show(imagesView);
			}, 2000);
			setTimeout(function() {
				console.log(mainApp.mainView.el);
				$(mainApp.imagesListView.el).hide();
				$(mainApp.mainView.el).show();
				// mainApp.getRegion('aRegion').show(layoutView);
			}, 3000);
		}


		mainApp.vent.on("change_image", function(someData){
			var image = someData();
			mainApp.mainView.model.set({
				poster: image
			});
		});	

		deferred.resolve('true'); // asynchronous "Hello, world!"
	}();	
});