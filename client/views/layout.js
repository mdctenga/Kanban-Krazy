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
  if (trim(message) === '') {
    return;
  }
  KanbanCollection.insert({
    userId: Meteor.userId(),
    message: message,
    status: "todo",
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
    return KanbanCollection.find({userId: Meteor.userId(), status: "todo"}).fetch();
  }
});

Template.todo.events({
  'click .card': function(evt, tmpl){
    KanbanCollection.update(
      {_id: this._id},
      {$set: {
        status: "progress"
      }}
    );
  }
});

// Progress Template

Template.progress.created = function(){
  console.log("created");
};
Template.progress.rendered = function(){
  console.log("rendered");
};

Template.progress.destroyed = function(){
  console.log("destroyed");
};


Template.progress.helpers({
  'progress': function () {
    return KanbanCollection.find({userId: Meteor.userId(), status: "progress"}).fetch();
  }
});

Template.progress.events({
  'click .card': function(evt, tmpl){
    console.log(this);
  }
});

// Done Template

Template.done.created = function(){
  console.log("created");
};
Template.done.rendered = function(){
  console.log("rendered");
};

Template.done.destroyed = function(){
  console.log("destroyed");
};


Template.done.helpers({
  'done': function () {
    return KanbanCollection.find({userId: Meteor.userId(), status: "done"}).fetch();
  }
});

Template.done.events({
  'click .card': function(evt, tmpl){
    console.log(this);
  }
});

