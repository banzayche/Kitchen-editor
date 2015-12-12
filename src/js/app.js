define(['kitchen', 'jquery', 'underscore', 'backbonewreqr', 'backbonebabysitter', 'backbone', 'backbonemarionette'], function(kitchenMainView) {
	var default_paths_images = {
		k1: './src/images/kitchen/k1-beige.png',
		k2: './src/images/kitchen/k2-beige.png',
		k3: './src/images/kitchen/k3-beige.png',
		color_number: 'color3',
		position: 'c_position',
		can_rotate: false,
		mainPath: './src/images/kitchen/',
		default_poster: './src/images/posters/punased-ounad-korvidega1.png',
		scale: 1,
		top_place: 0,
		left_place: 0,
		scale_mirrow: false
	};
	var layoutView = new kitchenMainView(default_paths_images);

	var mainApp = new Marionette.Application({
		mainView: layoutView,
		regions: {
			aRegion: "#test2"
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

	mainApp.start();

	
});