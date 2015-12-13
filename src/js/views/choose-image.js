define(['text!js/templates/choose_image.html', 'backbone', 'backbonemarionette', 'text!js/templates/img_el_template.html', 'img_collection', 'jquery'], function(choose_image_template, Backbone, Marionette, img_el_template, img_collection) {
	
	var AppLayoutView = Marionette.LayoutView.extend({
		template: _.template(choose_image_template),
		ui: {
			close_list: '#close-list-img',
			category_button: '.accord_menu_ul button'
		},
		events: {
			'click @ui.close_list': '_closeListImg',
			'click @ui.category_button': '_getCategory'
		},
		_getCategory: function(e){
			this.currentTheme = $(e.target).attr('data-category');
			this._showView();
		},
		_closeListImg: function(){
			console.log('close')
			this.mainApp.vent.trigger("close_images_list", function(){
				return 'close list images';
			});
		},
		regions: {
			img_area: "#native-img",
			// list_area: "#accord_container"
		},
		currentTheme: 0,
		onRender: function(){
			this._showView()
			// this.list_area.show(new Marionette.CollectionView({
			// 	childView: item_list_view,
			// 	collection: new Backbone.Collection(img_collection)
			// }));
		},
		_showView: function(){
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
		}
	});

	return AppLayoutView;
});