(function() {
    'use strict';

    Router.route('/equipments', function() {
        this.render('equipments');
    });

    Template.equipments.helpers({
        equipments: getEquipments
    });

    // Functions

    function getEquipments(argument) {
        return Equipments.find({});
    }
})();
