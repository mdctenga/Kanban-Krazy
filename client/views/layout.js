Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.layout('layout');
  this.render('main');
});

Router.onBeforeAction(function () {
    if (! Meteor.userId()) {
      if (Meteor.loggingIn()) {
        Router.go('/dashboard');
      } else {
        Router.go('/');
      }
    }
  });

Router.route('/dashboard', function () {
  this.render('dashboard');
});

// Router.route('login', function () {
//   this.render('login');
// });