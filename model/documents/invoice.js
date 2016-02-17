documentsInvoice = new Mongo.Collection("documentsInvoice");

documentInvoice = Astro.Class({
    name: 'journalInvoicesRow',
    collection: documentsInvoice,
    fields: {
        date: {
            type: 'string'
        },
        supplier: {
            type: 'string'
        },
        status: {
            type: 'string'
        },
        title: {
            type: 'string'
        }
    }
});

TabularTablesDocumentsInvoices = new Tabular.Table({
    name: "Invoices",
    collection: documentsInvoice,
    autoWidth: false,
    columns: [
        {data: "status", title: "Статус"}
    ]
});