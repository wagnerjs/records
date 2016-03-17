Equipments = new Mongo.Collection('equipments');

Equipments.attachSchema(new SimpleSchema({
    type: {
        type: String,
        label: "Tipo",
        max: 100
    },
    brand: {
        type: String,
        optional: true,
        label: "Marca",
        max: 100
    },
    model: {
        type: String,
        optional: true,
        label: "Modelo",
        max: 100
    },
    serviceTag: {
        type: String,
        optional: true,
        label: "Service Tag",
        max: 100
    },
    originalOs: {
        type: String,
        optional: true,
        label: "Windows Original",
        max: 20
    },
    originalKey: {
        type: String,
        optional: true,
        label: "Chave"
    },
    currentOs: {
        type: String,
        optional: true,
        label: "Windows Atual",
        max: 20,

    },
    currentKey: {
        type: String,
        optional: true,
        label: "Chave Atual"
    },
    employee: {
        type: String,
        optional: true,
        label: 'Funcionário',
        autoform: {
            options: getEmployees
        }
    }
}));

// Helpers

function getEmployees() {
    return Employees.find().map(function(e) {
        return {
            label: e.name,
            value: e._id
        };
    })
}
