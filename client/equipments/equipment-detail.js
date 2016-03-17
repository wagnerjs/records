(function() {
    'use strict';

    Router.route('/equipments/:_id', {
        action: function() {
            if (this.params._id === 'new') {
                this.render('equipmentCreate');
            } else {
                this.render('equipmentDetail');
            }
        },
        data: function() {
            return Equipments.findOne({
                _id: this.params._id
            });
        }
    });

    Router.route('/equipments/:_id/edit', {
        template: 'equipmentEdit',
        data: function() {
            return Equipments.findOne({
                _id: this.params._id
            });
        }
    });

    Template.equipmentDetail.helpers({

    });

    Template.equipmentEdit.helpers({

    });
})();
