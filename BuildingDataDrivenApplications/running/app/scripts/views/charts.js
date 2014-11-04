/*global Running, Backbone, JST*/

Running.Views = Running.Views || {};

(function () {
    'use strict';

    Running.Views.Charts = Backbone.View.extend({

        template: JST['app/scripts/templates/charts.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
