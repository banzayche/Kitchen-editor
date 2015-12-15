define(['text!js/templates/choose_image.html', 'backbone', 'backbonemarionette', 'text!js/templates/img_el_template.html', 'img_collection', 'text!js/templates/shutterstock_img_template.html', 'jquery'], function(choose_image_template, Backbone, Marionette, img_el_template, img_collection, shutterstock_template_img) {
	
	var AppLayoutView = Marionette.LayoutView.extend({
		template: _.template(choose_image_template),
		ui: {
			close_list: '#close-list-img',
			category_button: '#accord_container button',
			// tabs
			tab1: '#img_tab1',
			tab2: '#img_tab2'
		},
		events: {
			'click @ui.close_list': '_closeListImg',
			'click @ui.category_button': '_getCategory',
			'click @ui.tab1': '_clickTab1',
			'click @ui.tab2': '_clickTab2',
		},
		_clickTab1: function(){
			this._show_hide_menu('main');
		},
		_clickTab2: function(){
			this._show_hide_menu('shutterstock');
		},


		_getCategory: function(e){
			var state = $(e.target).parent().attr('data-parent');
			if( state === 'shutterstock'){
				console.log(state);
				this._shutterstock_category = $(e.target).attr('data-category');
				this._sutterstock_images_view();
			} else{
				this.currentTheme = $(e.target).attr('data-category');
				this._main_images_view();
			}			
		},
		_closeListImg: function(){
			console.log('close')
			this.mainApp.vent.trigger("close_images_list", function(){
				return 'close list images';
			});
		},
		regions: {
			img_area: "#native-img",
			list_area: "#shutterhost_img"
		},
		currentTheme: 0,
		_shutterstock_category: 'animals',
		onRender: function(){
			this._showView()
			// this.list_area.show(new Marionette.CollectionView({
			// 	childView: item_list_view,
			// 	collection: new Backbone.Collection(img_collection)
			// }));
		},
		_main_images_view: function() {
			var self = this;
			var item_img_view = Marionette.ItemView.extend({
				mainApp: self.mainApp,
				template: _.template(img_el_template),
				ui: {
					image: 'img'
				},
				events: {
					'click': '_getSrc'					
				},
				_getSrc: function(){
					var src = this.model.get('src');
					console.log(src);
					this.mainApp.vent.trigger("change_image", function(){
						return src;
					});
				}				
			});
			this.img_area.show(new Marionette.CollectionView({
				childView: item_img_view,
				collection: new Backbone.Collection(img_collection[this.currentTheme].content)
			}));
		},
		_sutterstock_images_view: function(){
			var self = this;
			var view_2 = Marionette.ItemView.extend({
				mainApp: self.mainApp,
				template: _.template(shutterstock_template_img),
				ui: {
					image: 'img'
				},
				events: {
					'click': '_getSrc'					
				},
				_getSrc: function(){
					var src = this.model.attributes.assets.preview.url;

					console.log(src);
					this.mainApp.vent.trigger("change_image", function(){
						return src;
					});
				}				
			});
			
			var jqxhr = $.ajax({
		        url: 'https://api.shutterstock.com/v2' + '/' + 'image' + 's/search',
		        data: "query="+self._shutterstock_category+"&safe=true&image_type=photo&orientation=horizontal&page=1&per_page=20",
		        headers: {
		            Authorization: 'Basic ' + window.btoa('3352aeffbd24d33f8859' + ':' + '097f832242ad371d9f012770cabdb1e6cebc433a')
		        }
		    })
		    .done(function (data) {
		    	console.log(data.data)
		    	self.list_area.show(new Marionette.CollectionView({
					childView: view_2,
					collection: new Backbone.Collection(data.data)
				}));
		    });	
		},
		_showView: function(){
			// if(self._current_tab === 'main'){

			// } else{

			// }
			this._main_images_view();
			this._sutterstock_images_view();

			
			// var template;
			// if(data === 'main'){
			// 	template = _.template(img_el_template);
			// } else{
			// 	template = _.template(shutterstock_template_img);
			// }		    
		},
		onShow: function(){
			this._show_hide_menu('main');
		},
		_show_hide_menu: function(data){
			console.log('===================',data);
			if(data === 'main'){
				$('#accord_container #shutterstock_menu').hide();
				$('#accord_container #accordion').show();
			} else{
				$('#accord_container #accordion').hide();
				$('#accord_container #shutterstock_menu').show();
			}
		}
	});

	return AppLayoutView;
});