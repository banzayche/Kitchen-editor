requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: './src',
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
        'backbone': '../bower_components/backbone/backbone-min',
        'backbonebabysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter.min',
        'backbonemarionette': '../bower_components/backbone.marionette/lib/backbone.marionette.min',
        'backbonewreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr.min',        
        'underscore': '../bower_components/underscore/underscore-min',
        'text': '../bower_components/text/text',
        'jquery-ui': '../bower_components/jquery-ui/jquery-ui.min',
        'kitchen': './js/views/kitchen',
        'app': './js/app'
        // 'app': '../dist/app'
    },
    shim: {
        'jquery-ui': {
            deps: ['jquery']
        },
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'app': {
            deps: ['backbone']
        }
    }
});
