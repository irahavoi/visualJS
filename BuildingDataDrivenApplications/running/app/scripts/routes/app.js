/*global Running, Backbone*/

Running.Routers = Running.Routers || {};

(function () {
    'use strict';

    Running.Routers.App = Backbone.Router.extend({
    	routes: {
	        '':         'summary',
	        'runs/:id': 'details'
	    },
	    summary: function() {
		    this.runs = new Running.Collections.Runs([], 
		        {authorizationToken: 'authorize me'});
		    this.runs.fetch();
		    this.summaryView = new Running.Views.Summary({collection: this.runs});
		    $('body').html(this.summaryView.render().el);
		},
		details: function(id) {
		    this.run = new Running.Models.Run();
		    this.run.id = id;
		    this.run.fetch();
		    this.detailsView = new Running.Views.Details({model: this.run});
		    $('body').html(this.detailsView.render().el);
	    },
    });

})();
