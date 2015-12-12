define(['kitchen', 'jquery', 'jquery-ui', 'underscore', 'backbonewreqr', 'backbonebabysitter', 'backbone', 'backbonemarionette'], function(kitchenMainView) {
	var deferred = Marionette.Deferred();
	var mainApp;
	
	_.result(deferred, 'promise').then(function (target) {
	    console.log("Hello, " + target + "!");
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

		mainApp = new Marionette.Application({
			mainView: layoutView,
			regions: {
				aRegion: "#area-kitchen"
			}
		});
		mainApp.addInitializer(function(options){
			layoutView.mainApp = mainApp;
			mainApp.getRegion('aRegion').show(layoutView);
		});
		mainApp.vent.on("change_image", function(someData){
			var image = someData();
			mainApp.mainView.model.set({
				poster: image
			});
		});	

		deferred.resolve('true'); // asynchronous "Hello, world!"
	}();	
});