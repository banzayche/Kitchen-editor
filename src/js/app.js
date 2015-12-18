define(['kitchen','choose_image', 'jquery', 'jquery-ui', 'underscore', 'backbonewreqr', 'backbonebabysitter', 'backbone', 'backbonemarionette', 'bootstrap'], function(kitchenMainView, chooseImageView) {
	var deferred = Marionette.Deferred();
	var mainApp;
	// return new Promise(function(resolve, reject) {
	_.result(deferred, 'promise').then(function (target) {
	    console.log("The App is compiled successfully!");
	    setTimeout(function(){
	    	$('.cssload-container').hide();
	    	mainApp.start();
	    }, 1000);
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
			default_poster: './src/images/posters/number1/laimid_sidrun_munt_mustal_taustal1.jpg',
			scale: 1,
			top_place: 0,
			left_place: 0,
			scale_mirrow: false
		};
		var layoutView = new kitchenMainView(default_paths_images);
		var imagesView = new chooseImageView();

		mainApp = new Marionette.Application({
			mainView: layoutView,
			imagesView: imagesView,
			imagesListView: imagesView,
			regions: {
				aRegion: "#area-kitchen",
				bRegion: "#images_list"
			}
		});
		mainApp.addInitializer(function(options){
			layoutView.mainApp = mainApp;
			imagesView.mainApp = mainApp;
			mainApp.getRegion('aRegion').show(layoutView);
			mainApp.getRegion('bRegion').show(imagesView);
			$(mainApp.imagesListView.el).parent().hide();			
		});

		mainApp.vent.on("change_image", function(someData){
			var image = someData();
			mainApp.mainView.model.set({
				poster: image
			});
			$(mainApp.imagesListView.el).parent().hide(400);
			$(mainApp.mainView.el).parent().show(400);
		});

		mainApp.vent.on("close_images_list", function(someData){
			$(mainApp.imagesListView.el).parent().hide(400);
			$(mainApp.mainView.el).parent().show(400);
		});
		mainApp.vent.on("open_images_list", function(){
			$(mainApp.imagesListView.el).parent().show(400);
			$(mainApp.mainView.el).parent().hide(400);
		});
		deferred.resolve('true');
}();
	return 'App going to start';	
});