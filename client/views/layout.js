// Dashboard Template

Template.dashboard.created = function(){
  console.log("dashboard created");
};

Template.dashboard.rendered = function(){
  console.log("dashboard rendered");
};

Template.dashboard.destroyed = function(){
  console.log("dashboard destroyed");
};

Template.dashboard.helpers({

});

Template.dashboard.events({

});


// Todo Template

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
    return ToDoCollection.find({userId: Meteor.userId()}).fetch();
  }
});

Template.todo.events({

});

