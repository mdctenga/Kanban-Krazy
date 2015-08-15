

Meteor.startup(function(){
  var sean = "xkFKifpjZu78zSa9h";
  var matt = "z5fnuu8ZosbjqrHne";


  // if (Meteor.users.find().count() === 0) {
  //   Meteor.users
  // }

  if (KanbanCollection.find().fetch().length > 0) {
    KanbanCollection.remove({});
    var array = [{user: matt, message: 'hell0', status: "todo", title: "Welcome"},
                 {user: sean, message: 'butter mochi', status: "todo", title: "to"},
                 {user: matt, message: 'konichiwa', status: "todo", title: "the"},
                 {user: sean, message: 'peanut buttah choco bits', status: "todo", title: "black"},
                 {user: matt, message: 'I like turtles', status: "progress", title: "Parade"},
                 {user: matt, message: 'it is never done', status: "Ya hippie"}
                ];
      array.forEach(function (element, index) {
        KanbanCollection.insert({
          userId: element.user,
          title: element.title,
          message: element.message,
          status: element.status,
          show: true,
          added: Date.now()
      });
    });
  }
});

