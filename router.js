Router.configure({
    // the default layout
    layoutTemplate: 'main'
});

//Главная
Router.route('/', {
    layoutTemplate: 'main',
    template: 'home'
});


/******* Справочники ********/

Router.route('/directory/brands', function () {
    this.render('directoryBrands');
}, {
    name: 'directoryBrands'
});


Router.route('/directory/objects', function () {
    this.render('directoryObjects');
}, {
    name: 'directoryObjects'
});

Router.route('/directory/stores', function () {
    this.render('directoryStores');
}, {
    name: 'directoryStores'
});


/******* Журналы ********/
Router.route('/journals/invoices', function () {
    this.render('journals.invoices');
}, {
    name: 'journals.invoices'
});