var current;

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
  var title = tmpl.find('#title').value;
  var message = tmpl.find('#message').value;
  if (message.trim() && title.trim() === '') {
    return;
  }
  KanbanCollection.insert({
    userId: Meteor.userId(),
    title: title,
    message: message,
    status: "todo",
    show: true,
    added: Date.now()
  });
  tmpl.find('#title').value ="";
  tmpl.find('#title').focus();

  tmpl.find('#message').value = "";
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
  'drop .column': function(evt, tmpl){
    KanbanCollection.update(
      {_id: current._id},
      {$set: {
        status: "todo"
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
  'drop .column': function(evt, tmpl){
    KanbanCollection.update(
      {_id: current._id},
      {$set: {
        status: "progress"
      }}
    );
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
  'drop .column': function(evt, tmpl){
    KanbanCollection.update(
      {_id: current._id},
      {$set: {
        status: "done"
      }}
    );
  }
});

Template.card.events({
  'click .delete': function(evt, tmpl){
    KanbanCollection.remove(
      {_id: this._id}
    );
  },
  'blur .title': function(evt, tmpl){
    KanbanCollection.update(
      {_id: this._id},
      {$set: {
        title: evt.target.innerText
      }}
    );
  },
  'blur .message': function(evt, tmpl){
    KanbanCollection.update(
      {_id: this._id},
      {$set: {
        message: evt.target.innerText
      }}
    );
  },
  'drag .card': function (evt, tmpl){
    current = this;
  }
});
