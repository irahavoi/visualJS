/*global Running, Backbone*/

Running.Collections = Running.Collections || {};

(function () {
    'use strict';

    Running.Collections.Runs = Backbone.Collection.extend({
    	url: 'https://api.nike.com/v1/me/sport/activities/',
        model: Running.Models.Run

    });

})();
