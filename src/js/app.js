define(['kitchen','choose_image', 'jquery', 'jquery-ui', 'underscore', 'backbonewreqr', 'backbonebabysitter', 'backbone', 'backbonemarionette', 'bootstrap'], function(kitchenMainView, chooseImageView) {
	var deferred = Marionette.Deferred();
	var mainApp;



			// var API_URL = 'https://api.shutterstock.com/v2';
			// function encodeAuthorization() {
			//     var clientId = '3352aeffbd24d33f8859';
			//     var clientSecret = '097f832242ad371d9f012770cabdb1e6cebc433a';

			//     return 'Basic ' + window.btoa(clientId + ':' + clientSecret);
			// }
			// // Search media by type
			// function search(opts, mediaType) {
			//     var createComponentFunc = mediaType === 'image';

			//     authorization = encodeAuthorization();
			//     if (!authorization) return;

			//     var jqxhr = $.ajax({
			//         url: API_URL + '/' + mediaType + 's/search',
			//         data: opts,
			//         headers: {
			//             Authorization: authorization
			//         }
			//     }).done(function (data) {
		 //        	if (data.total_count === 0) {
		 //            	return;
		 //        	}
		 //        	console.log(data.data);
		 //    	});

			//     return jqxhr;
			// }

			// search('animals', 'image');
			// $ curl "https://${client_id}:${client_secret}@api.shutterstock.com/v2/images/search?query=donkey&page=2&per_page=1"
			// var test = "https://${3352aeffbd24d33f8859}:${097f832242ad371d9f012770cabdb1e6cebc433a}@api.shutterstock.com/v2/images/search?query=cat&page=2&per_page=1"
			// var jqxhr = $.ajax({
		 //        url: 'https://api.shutterstock.com/v2' + '/' + 'image' + 's/search',
		 //        data: "query=cats&safe=true&image_type=photo&orientation=horizontal&page=1&per_page=30",
		 //        headers: {
		 //            Authorization: 'Basic ' + window.btoa('3352aeffbd24d33f8859' + ':' + '097f832242ad371d9f012770cabdb1e6cebc433a')
		 //        }
		 //    })
		 //    .done(function (data) {
		 //    	console.log(data)
		 //    	data.data.forEach(function(data){
		 //    		console.log(data.assets.preview.url);
		 //    		$('body').append('<img src="'+data.assets.preview.url+'">')
		 //    	});
		 //    });

	// return new Promise(function(resolve, reject) {
			var default_paths_images = {
			k1: './src/images/kitchen/k1-beige.png',
			k2: './src/images/kitchen/k2-beige.png',
			k3: './src/images/kitchen/k3-beige.png',
			color_number: 'color3',
			position: 'c_position',
			can_rotate: false,
			mainPath: './src/images/kitchen/',
			default_poster: './src/images/posters/number1/oliivid-oksdega1.jpg',
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

		// resolve(mainApp); // asynchronous "Hello, world!"
		return mainApp;
	// });	
});