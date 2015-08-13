Template.todo.created = function(){
  console.log("created");
};
Template.todo.rendered = function(){
  console.log("rendered");
};

Template.todo.destroyed = function(){
  console.log("destroyed");
};


Template.todo.helpers({
  'todo': function () {
    var currentUser = Meteor.userId();
    return ToDoCollection.find({userId: currentUser}).fetch();
  }
});