Employees = new Mongo.Collection('employees');

Employees.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Nome",
        max: 100
    }
}));
