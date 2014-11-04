/*global Running, Backbone, JST*/

Running.Views = Running.Views || {};

(function () {
    'use strict';

    Running.Views.Map = Backbone.View.extend({

        template: JST['app/scripts/templates/map.ejs'],

        tagName: 'div',

        id: 'map',

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
