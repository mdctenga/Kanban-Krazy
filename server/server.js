

Meteor.startup(function(){
  var sean = "xkFKifpjZu78zSa9h";
  var matt = "z5fnuu8ZosbjqrHne";

  if (KanbanCollection.find().fetch().length === 0) {
    KanbanCollection.remove({});
    var array = [{user: matt, message: 'hell0'},
                 {user: sean, message: 'butter mochi'},
                 {user: matt, message: 'konichiwa'},
                 {user: sean, message: 'peanut buttah choco bits'}
                ];
      array.forEach(function (element, index) {
        KanbanCollection.insert({
          userId: element.user,
          message: element.message,
          show: true,
          added: Date.now()
      });
    });
  }
});

