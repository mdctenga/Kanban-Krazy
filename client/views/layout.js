Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.layout('layout');
  this.render('main');
});

Router.route('/dashboard', function () {
  this.render('dashboard');
});

Router.route('login', function () {
  this.render('login');
});