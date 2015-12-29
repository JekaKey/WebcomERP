Stores = new Mongo.Collection("stores");

Stores.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Наименование",
        max: 200
    },
    adress: {
        type: String,
        label: "Адрес"
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();  // Prevent user from supplying their own value
            }
        },
        denyUpdate: true
    },
    deletedAt: {
        label: "Удален",
        type: Date,
        optional: true
    }

}));

TabularTables = {};

TabularTables.Stores = new Tabular.Table({
    name: "Stores",
    collection: Stores,
    autoWidth: false,
    columns: [
        {data: "title", title: "Наименование"},
        {
            tmpl: Meteor.isClient && Template.editButton,
            width: '5%'
        },
        {
            tmpl: Meteor.isClient && Template.deleteButton,
            width: '5%'
        }
    ]
});
