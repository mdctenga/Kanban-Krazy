

Meteor.startup(function(){
  var sean = "xkFKifpjZu78zSa9h";
  var matt = "z5fnuu8ZosbjqrHne";

  if (KanbanCollection.find().fetch().length > 0) {
    KanbanCollection.remove({});
    var array = [{user: matt, message: 'hell0', status: "todo"},
                 {user: sean, message: 'butter mochi', status: "todo"},
                 {user: matt, message: 'konichiwa', status: "todo"},
                 {user: sean, message: 'peanut buttah choco bits', status: "todo"},
                 {user: matt, message: 'I like turtles', status: "progress"},
                 {user: matt, message: 'it is never done', status: "done"}
                ];
      array.forEach(function (element, index) {
        KanbanCollection.insert({
          userId: element.user,
          message: element.message,
          status: element.status,
          show: true,
          added: Date.now()
      });
    });
  }
});

