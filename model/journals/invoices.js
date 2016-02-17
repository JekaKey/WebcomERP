

TabularTablesInvoices = new Tabular.Table({
    name: "Invoices",
    collection: documentsInvoice,
    autoWidth: false,
    columns: [
        {data: "status", title: "Статус"}
    ]
});