var StoresTracker = new Tracker.Dependency();
var currentSelect;

Template.stores.helpers({
    selector: function () {
        return {};
    },
    selectedStores: function () {
        return Stores.findOne(Session.get("selectedStoresId"));
    },
    hasValidationError: function (field) {
        StoresTracker.depend();

        if (currentSelect == undefined) {
            return false
        }
        else {
            currentSelect.validate(field);
            return currentSelect.hasValidationError(field);
        }
    },
    getValidationError: function (field) {
        StoresTracker.depend();

        if (currentSelect == undefined)
            return false
        else {
            currentSelect.validate(field);
            return currentSelect.getValidationError(field);
        }
    }
});


//События
Template.stores.events({
    'click #addStore': function () { //Показываем окно добавления
        $('#insertStoreWindow').modal('show');

    },
    'submit #insertStoreForm ': function () {
        event.preventDefault();

        console.log('Добавляем склад');
        console.log(event.target);

        var store = new Store();

        store.set({
            title: $('#title').val(),
            adress: $('#adress').val()
        });

        currentSelect = store;
        StoresTracker.changed();
        store.save();

        return;

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