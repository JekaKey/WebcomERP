Stores = new Mongo.Collection("stores");

//Stores.attachSchema(new SimpleSchema({
//    title: {
//        type: String,
//        label: "Наименование",
//        max: 200
//    },
//    adress: {
//        type: String,
//        label: "Адрес"
//    }
//}));

Store = Astro.Class({
    name: 'Store',
    collection: Stores,
    fields: {
        title: {
            type: 'string',
            validator: Validators.required('', 'Необходимо заполнить Наименование!')
        },
        adress: {
            type: 'string',
            validator: Validators.required('', 'Необходимо заполнить Адрес!')
        }
    }
});


TabularTablesStores = new Tabular.Table({
    name: "Stores",
    collection: Stores,
    autoWidth: false,
    columns: [
        {data: "title", title: "Наименование"},
        {
            tmpl: Meteor.isClient && Template.editButton,
            width: '5%'
        }
    ]
});


