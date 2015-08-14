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
  'keypress #message': function(evt, tmpl){
    if(evt.keyCode === 13){
      addMessage(evt, tmpl);
    }
  },
  'click #submit': function(evt, tmpl){
    addMessage(evt, tmpl);
  }
});

function addMessage(evt, tmpl){
  var message = tmpl.find('#message').value;
  if (message === '') {
    return;
  }
  KanbanCollection.insert({
    userId: Meteor.userId(),
    message: message,
    todo: true,
    progress: false,
    done: false,
    show: true,
    added: Date.now()
  });
  tmpl.find('#message').value = "";
  tmpl.find('#message').focus();
}


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
    return KanbanCollection.find({userId: Meteor.userId()}).fetch();
  }
});

Template.todo.events({
  'click .card': function(evt, tmpl){
    console.log(this);
  }
});

