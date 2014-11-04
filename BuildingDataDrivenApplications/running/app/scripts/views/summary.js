/*global Running, Backbone, JST*/

Running.Views = Running.Views || {};

(function () {
    'use strict';

    Running.Views.Summary = Backbone.View.extend({
        template: JST['app/scripts/templates/summary.ejs'],
        tagName: 'table',
        initialize: function () {
            this.listenTo(this.collection, 'change', this.render);
            return this;
        },
        render: function () {
            this.$el.html(this.template());
            this.collection.each(this.renderRun, this);
            return this;
        },

        renderRun: function (run) {
            this.$('tbody').append(new Running.Views.SummaryRow({
                model: run
            }).render().el);
        }
    });

})();
