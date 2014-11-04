/*global Running, Backbone, JST*/

Running.Views = Running.Views || {};

(function () {
    'use strict';

    Running.Views.Details = Backbone.View.extend({
        render: function () {
            this.$el.html("");
            this.$el.append(
                new Running.Views.Properties({model: this.model}).render().el
            );
            this.$el.append(
                new Running.Views.Charts({model: this.model}).render().el
            );
            this.$el.append(
                new Running.Views.Map({model: this.model}).render().el
            );
            return this;
        }
    });

})();
