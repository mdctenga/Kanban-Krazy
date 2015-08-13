

Meteor.startup(function(){
  var sean = "xkFKifpjZu78zSa9h";
  var matt = "z5fnuu8ZosbjqrHne";

  // ToDoCollection.drop();



  if (ToDoCollection.find().fetch().length > 0) {
    ToDoCollection.remove({});
    var array = [{user: matt, message: 'hell0'},
                 {user: sean, message: 'butter mochi'},
                 {user: matt, message: 'konichiwa'},
                 {user: sean, message: 'peanut buttah choco bits'}
                ];
      array.forEach(function (element, index) {
        ToDoCollection.insert({
          userId: element.user,
          message: element.message,
          show: true,
          added: Date.now()
      });
    });
  }
});

