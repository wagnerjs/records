(function() {
    'use strict';

    Router.route('/equipments', {
        template: 'equipments'
    });

    Template.equipments.helpers({
        equipments: getEquipments
    });

    // Functions

    function getEquipments(argument) {
        return Equipments.find({});
    }
})();
