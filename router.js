
//Главная
Router.route('/', {
    layoutTemplate: 'main',
    template: 'home'
});



/******* Справочники ********/

Router.route('/brands', {
    name: 'brands',
    layoutTemplate: 'main',
    template: 'brands'
});

Router.route('/objects', {
    name: 'objects',
    layoutTemplate: 'main',
    template: 'objects'
});

Router.route('/stores', {
    name: 'stores',
    layoutTemplate: 'main',
    template: 'stores'
});
