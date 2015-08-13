Meteor.publish('kanban', function () {
  return KanbanCollection.find();
});