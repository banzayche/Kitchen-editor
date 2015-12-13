define(['text!js/templates/choose_image.html', 'backbone', 'backbonemarionette', 'text!js/templates/img_el_template.html', 'text!js/templates/list_menu_template.html', 'img_collection', 'jquery'], function(choose_image_template, Backbone, Marionette, img_el_template, list_menu_template, img_collection) {
	
	var item_img_view = Marionette.ItemView.extend({
		template: _.template(img_el_template)
	});
	var item_list_view = Marionette.ItemView.extend({
		template: _.template(list_menu_template)
	});

	var AppLayoutView = Marionette.LayoutView.extend({
		template: _.template(choose_image_template),

		regions: {
			img_area: "#native-img",
			// list_area: "#accord_container"
		},
		onRender: function(){
			this.img_area.show(new Marionette.CollectionView({
				childView: item_img_view,
				collection: new Backbone.Collection(img_collection)
			}));

			// this.list_area.show(new Marionette.CollectionView({
			// 	childView: item_list_view,
			// 	collection: new Backbone.Collection(img_collection)
			// }));
		}
	});

	return AppLayoutView;
});