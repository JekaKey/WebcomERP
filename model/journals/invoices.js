journalInvoices = new Mongo.Collection("journalInvoices");

journalInvoicesRow = Astro.Class({
    name: 'journalInvoicesRow',
    collection: journalInvoices,
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

TabularTablesInvoices = new Tabular.Table({
    name: "Invoices",
    collection: journalInvoices,
    autoWidth: false,
    columns: [
        {data: "title", title: "Наименование"}
    ]
});