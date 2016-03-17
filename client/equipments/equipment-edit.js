(function() {
    'use strict';

    Router.route('/equipments/new', {
        template: 'equipmentEdit',
        data: {}
    });

    Template.equipmentEdit.helpers({
        schema: function() {
            return new SimpleSchema({
                name: {
                    type: String
                }
            });
        }
    })
})();
