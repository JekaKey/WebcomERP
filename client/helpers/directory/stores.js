Template.stores.helpers({
    stores: function () {
        return Stores.find({deletedAt: null});
    },
    selector: function () {
        return ({deletedAt: null});
    },
    selectedStores: function () {
        return Stores.findOne(Session.get("selectedStoresId"));
    }
});


//События
Template.stores.events({
    'click #addStore': function () { //Показываем окно добавления

        $('#insertStoreWindow').modal('show');
    },
    'click .edit': function () { //Изменение
        event.preventDefault();

        Session.set("selectedStoresId", this._id);

        $('#updateStoreWindow').modal('show');

    },
    'click .delete': function () { //Удаление

        console.log('delete');

        event.preventDefault();

        Session.set("selectedStoresId", this._id);
        Stores.update(this._id, {$set: {deletedAt: new Date()}});

    },
    'click #showDelete': function () {
        console.log('test');

    }
});