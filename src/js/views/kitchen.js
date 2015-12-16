define(['text!js/templates/kitchen_main.html', 'backbone', 'backbonemarionette', 'jquery'], function(kitchen_template, Backbone, Marionette) {
	var modelKitchen = Backbone.Model.extend({
		kitcehn_bg: void 0,
		poster: void 0,
		position: void 0,
		rotate: void 0,
		can_rotate: void 0,
		current_color_of_panel: void 0,
		scale: void 0,
		top_place: void 0,
		left_place: void 0,
		scale_mirrow: void 0,

		_changeScale: function(data){
			var scale = this.get('scale');
			if(data === 'plus') {
				if(scale<2){
					console.log(scale);
					this.set({scale: +scale+.1});
				}
			} else {
				if(scale>1){
					console.log(scale);
					this.set({scale: +scale-.1});
				}
			}
		},
		_changeMirrow: function(){
			if(this.get('scale_mirrow') === true){
				this.set({scale_mirrow: false});
			} else{
				this.set({scale_mirrow: true});
			}
		}
	});

	var panels_array = {
		color1: 'black',
		color2: 'white',
		color3: 'beige',
		color4: 'wood'
	};

	var AppLayoutView = Marionette.ItemView.extend({
		template: _.template(kitchen_template),
		id: 'main-kitchen',
		model: new modelKitchen(),
		initialize: function(options) {			
			this.panels_various = panels_array;
			this._setDefaultStates(options);
		},
		_setDefaultStates: function(data){
			this.model.set({
				kitcehn_bg: data.k2,
				position: data.position,
				rotate: 'rotate-main',
				can_rotate: data.can_rotate,
				current_color_of_panel: data.color_number,
				poster: data.default_poster,
				scale: data.scale,
				top_place: data.top_place,
				left_place: data.left_place,
				scale_mirrow: data.scale_mirrow
			});
		},		
		ui: {
			main_poster: '#main-poster',
			left_position: "#position-left",
			center_position: "#position-center",
			right_position: "#position-right",
			// rotate kitchen panel
			rotate_main_button: '.rotate-main .rotate',
			rotate_side_button: '.rotate-side .rotate',
			// color ui
			color_button: '#control-panel .color-button',
			// scale
			scale_button: '#control-panel .scale-button',
			// mirrow
			mirrow_button: '.mirrow-panel .mirrow-button',
			// open imgs
			open_img_button: '#choose_img_button'
		},
		modelEvents: {
			"change": "render"
		},
		events: {
			"click @ui.left_position": "_getLeftKitchen",
			"click @ui.center_position": "_getCenterKitchen",
			"click @ui.right_position": "_getRightKitchen",
			// rotate
			'click @ui.rotate_main_button': "_rotatingMain",
			'click @ui.rotate_side_button': "_rotatingSide",
			// color
			'click @ui.color_button': "_changeColor",
			// scale
			'click @ui.scale_button': '_changeScale',
			// mirrow
			'click @ui.mirrow_button': '_getMirrow',
			// images
			'click @ui.open_img_button': '_openImageList'
		},
		_openImageList: function(){
			this.mainApp.vent.trigger("open_images_list", function(){
				return 'images open';
			});
		},
		_getLeftKitchen: function() {
			var kitchen = this._checkPathPanel('k1');
			this.model.set({
				kitcehn_bg: kitchen,
				position: 'l_position',
				rotate: 'rotate-main',
				can_rotate: true
			});
		},
		_getCenterKitchen: function() {
			var kitchen = this._checkPathPanel('k2');
			this.model.set({
				kitcehn_bg: kitchen,
				position: 'c_position',
				rotate: 'rotate-main',
				can_rotate: false
			});
		},
		_getRightKitchen: function() {
			var kitchen = this._checkPathPanel('k3');
			this.model.set({
				kitcehn_bg: kitchen,
				position: 'r_position',
				rotate: 'rotate-main',
				can_rotate: true
			});
		},

		_rotatingMain: function() {
			var str = this.model.get('kitcehn_bg');
			this._whatTheSide(str);
			this.model.set({
				rotate: 'rotate-side'
			});
		},
		_rotatingSide: function() {
			var str = this.model.get('kitcehn_bg');
			this._whatTheSide(str);
			this.model.set({
				rotate: 'rotate-main'
			});
		},
		_whatTheSide: function(data) {
			if(data.indexOf("k1-")!==-1 || data.indexOf("k2-")!==-1 || data.indexOf("k3-")!==-1) {
				if(data.indexOf("k1-")!==-1){
					data = data.replace('k1-','k1r-');
				}else if(data.indexOf("k2-")!==-1){
					data = data.replace('k2-','k2r-');
				}else if(data.indexOf("k3-")!==-1){
					data = data.replace('k3-','k3r-');
				}
				this.model.set({
					kitcehn_bg: data
				});
			} else if (data.indexOf("k1r-") || data.indexOf("k2r-") || data.indexOf("k3r-")){
				if(data.indexOf("k1r-")!==-1){
					data = data.replace('k1r-','k1-');
				}else if(data.indexOf("k2r-")!==-1){
					data = data.replace('k2r-','k2-');
				}else if(data.indexOf("k3r-")!==-1){
					data = data.replace('k3r-','k3-');
				}
				this.model.set({
					kitcehn_bg: data
				});
			}
		},
		_checkPathPanel: function(data) {
			var color = this.panels_various[this.model.get('current_color_of_panel')];
			var main = this.options.mainPath;
				main = main+data+'-'+color+'.png';
			return main;
		},
		_changeColor: function(e) {
			var target = e.target.id;
			var path = this.model.get('kitcehn_bg');

			if(path.indexOf(this.panels_various['color1'])!==-1){
				path = path.replace(this.panels_various['color1'],this.panels_various[target]);
			}else if(path.indexOf(this.panels_various['color2'])!==-1){
				path = path.replace(this.panels_various['color2'],this.panels_various[target]);
			}else if(path.indexOf(this.panels_various['color3'])!==-1){
				path = path.replace(this.panels_various['color3'],this.panels_various[target]);
			}else if(path.indexOf(this.panels_various['color4'])!==-1){
				path = path.replace(this.panels_various['color4'],this.panels_various[target]);
			}
			this.model.set({
				kitcehn_bg: path,
				current_color_of_panel: target
			});
			// wip

			// this.mainApp.vent.trigger("change_image", function(){
			// 	return './src/images/posters/puuviljad-murul1.jpg';
			// });
		},
		_changeScale: function(e){
			var target = e.target.id;
			this.model._changeScale(target);
		},
		_getMirrow: function(){
			this.model._changeMirrow();
		},
		onRender: function() {
			var self = this;
			setTimeout(function() {
				$('#draggable').draggable({
					drag: function(event, ui) {						
					    // ui.position.left = 0;
					    // ceep position for image
					    var image = $('#main-poster');
					    ui.ceep = {};
					    ui.ceep.top = ui.position.top;
					    ui.ceep.left = ui.position.left;
					    
					    self.model.set({
					    	top_place: ui.ceep.top,
					    	left_place: ui.ceep.left
					    });

					    // image.css('top', ui.ceep.top);
					    // image.css('left', ui.ceep.left);
					    // none draggable cube
					    ui.position.left = ui.originalPosition.left;
					    ui.position.top = ui.originalPosition.top;
				   }
				});

			// $('#draggable').click(function(e) {
			// 	var x = e.offsetX==undefined?e.layerX:e.offsetX;
			// 	var y = e.offsetY==undefined?e.layerY:e.offsetY;
			// 	console.log(x +'x'+ y);
			// });

				// инфа про картинку
				var rect_img = document.getElementById("main-poster").getBoundingClientRect();
				console.log('rect_img',rect_img);
				// инфа про один обьект
				var rect_crop = document.getElementById("crop-area").getBoundingClientRect();
				console.log('rect_crop',rect_crop);

				if(rect_img.left > rect_crop.left){
					alert('wrong left. img: '+rect_img.left+'rect: '+rect_crop.left);
				}
				if(rect_img.top > rect_crop.top){
					alert('wrong top. img: '+rect_img.top+'rect: '+rect_crop.top);				
				}
				if(rect_img.right < rect_crop.right){
					alert('wrong right. img: '+rect_img.right+'rect: '+rect_crop.right);
				}
				if(rect_img.bottom < rect_crop.bottom){
					alert('wrong bottom. img: '+rect_img.bottom+'rect: '+rect_crop.bottom);
				}
			},1000);
		}
	});

	return AppLayoutView;
});