window.App = Ember.Application.create();
App.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', "Hello world!");
  }
});

App.ApplicationController = Ember.Controller.extend({
  appName: 'My First Example'
});
