/*global Running, Backbone, JST*/

Running.Views = Running.Views || {};

(function () {
    'use strict';

    Running.Views.SummaryRow = Backbone.View.extend({
        template: JST['app/scripts/templates/summaryRow.ejs'],
        tagName: 'tr',
        events: {},
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            return this;
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

})();
