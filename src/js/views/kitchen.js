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
					this.set({scale: +scale+.1});
				}
			} else {
				if(scale>1){
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
			function get_move(){
				var el1 = document.getElementById('main-poster');
				var el2 = document.getElementById('draggable');
				setTimeout(function(){	
					if(el1 !== null && el2 !== null){
						self._try_two();
					} else{						
						get_move();				
					}
				}, 100);
			}
			get_move();
			// setTimeout(function(){
			// 	self._try_two();
			// }, 1000);
		},
		onShow: function(){
			// this._try_two();
		},
		
		// ====================================================
		_try_two: function(){
			var y_start;
			var x_start;
			// инфа про картинку
			var rect_img;
			// инфа про один обьект
			var rect_crop;
			var ball = document.getElementById('draggable');
    		var poster = $('#main-poster');
    		var x_y_save = {y:0, x:0};
    		ball.onmousedown = function(e) {			    
			    x_y_save.y = e.pageY;
			    x_y_save.x = e.pageX;
			    // console.log('x: ',x_y_save.x,' y: ',x_y_save.y);

    			document.onmousemove = function(e) {
    				// инфа про картинку
					rect_img = document.getElementById("main-poster").getBoundingClientRect();
					// console.log('rect_img',rect_img);
					// инфа про один обьект
					rect_crop = document.getElementById("crop-area").getBoundingClientRect();
					// console.log('rect_crop',rect_crop);
					// -----------------------------------
					var plusing_elemts={x:0,y:0};
					// -----------------------------------
					var top_img = poster.css('top');
    				var left_img = poster.css('left');
    				top_img = parseInt(top_img, 10);
    				left_img = parseInt(left_img, 10);

    				// =====check what is happened
    				if(e.pageX>x_y_save.x){    					
    					// console.log("x - UP");
    					x_y_save.x = e.pageX;
    					plusing_elemts.x = 2;
    				};
    				if(e.pageY>x_y_save.y){
    					// console.log("y - UP");
    					x_y_save.y = e.pageY;
    					plusing_elemts.y = 2;
    				};
    				if(e.pageX<x_y_save.x){
    					// console.log("x - DOWN");
    					x_y_save.x = e.pageX;
    					plusing_elemts.x = -2;
    				};
    				if(e.pageY<x_y_save.y){
    					// console.log("y - DOWN");
    					x_y_save.y = e.pageY;
    					plusing_elemts.y = -2;    					
    				};

					// =====when do not need any events
					if(rect_img.left >= rect_crop.left){												
						// console.log('wrong left. img: '+rect_img.left+'rect: '+rect_crop.left);
						plusing_elemts.x = -2;
					} else if(rect_img.top >= rect_crop.top){
						// console.log('wrong top. img: '+rect_img.top+'rect: '+rect_crop.top);
						plusing_elemts.y = -2;			
					} else if(rect_img.right <= rect_crop.right){
						plusing_elemts.x = 2;
						// console.log('wrong right. img: '+rect_img.right+'rect: '+rect_crop.right);
					} else if(rect_img.bottom <= rect_crop.bottom){
						plusing_elemts.y = 2;
						// console.log('wrong bottom. img: '+rect_img.bottom+'rect: '+rect_crop.bottom);
					}

					// changing Top: and Left:
    				poster.css('top', top_img+plusing_elemts.y);
    				poster.css('left', left_img+plusing_elemts.x);		    	
			    };
		    	document.onmouseup = function(e) {  		
			        document.onmousemove = null;
			        ball.onmouseup = null;
			    };
			    function done(){      	
			      	document.onmousemove = null;
			        ball.onmouseup = null;
			    };    			
    		};
    		// prevent default event of browser
    		ball.ondragstart = function() {
			    return false;
			};
		}
	});

	return AppLayoutView;
});