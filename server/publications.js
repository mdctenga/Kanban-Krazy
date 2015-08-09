Meteor.publish('todo', function () {
  return ToDoCollection.find();
});

Meteor.publish('progress', function () {
  return InProgCollection.find();
});

Meteor.publish('done', function () {
  return DoneCollection.find();
});