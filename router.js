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
    this.render('journalsInvoices');
}, {
    name: 'journalsInvoices'
});


/******* Документы ********/


//Приходная накладная
Router.route('/documents/invoice/:_id', function () {

    console.log('Документ', this.params._id);

    this.render('documentsInvoice');
}, {
    name: 'documentsInvoice'
});