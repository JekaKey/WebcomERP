Template.stores.helpers({
    stores: function () {
        return Stores.find({deletedAt: null});
    },
    selectedStores: function () {
        return Stores.findOne(Session.get("selectedStoresId"));
    }
});


//События
Template.stores.events({
    'click .reactive-table tbody tr': function (event) {
        event.preventDefault();

        var stores = this;

        //console.log(Stores.findOne({_id: this._id}));
        //
        //if (event.target.className == "delete") {
        //    //Stores.remove(stores._id)
        //    Stores.update(stores._id, {$set: {deletedAt: new Date()}});
        //} else {
        //    Session.set("selectedStoresId", this._id);
        //}


    },
    'click #addStore': function () { //Показываем окно добавления

        $('.modal').modal('show');
    },
    'click .edit': function() { //Изменение
        event.preventDefault();
        console.log('edit');

        var stores = this;
        Session.set("selectedStoresId", this._id);

    }
});