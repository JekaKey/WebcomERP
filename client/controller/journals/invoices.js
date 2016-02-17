Template.journalsInvoices.helpers({
    selector: function () {
        return {};
    }
});


//События
Template.journalsInvoices.events({
    'click .addInvoice': function () {

        var invoice = new documentInvoice();
        invoice.set({status:'Новый'});
        invoice.save();

    }
});
