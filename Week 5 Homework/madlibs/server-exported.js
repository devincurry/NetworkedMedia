var servi = require('servi');

var app = new servi(true);


var commentsdb = useDatabase("comments");

serveFiles("public");

route('/', getComments);
route('/comments', getComments);
route('/savecomment', saveComment);

function getComments(request) {
  console.log("getComments");

  commentsdb.getAll(gotComments);

  function gotComments(allComments) {
    //console.log(allComments);
    // Format the data from the database so we can access it easily in our template
    var toRender = {
      title: "Comments",
      allComments: allComments
    };
    //var toRender = {title: "Madlibs", loc1: };
    request.render("index.html", toRender);
    //request.render("template.html", toRender);

  }
}

function saveComment(request) {
  console.log("saveComment: " + request.params.loc1 + " " + request.params.famousperson + " " + request.params.adj1 + " " + request.params.sound + " " + request.params.animal1 + " " + request.params.food + " " + request.params.verb1 + " " + request.params.verb2 + " " + request.params.person1 + " " + request.params.noun1 + " " + request.params.verb3 + " " + request.params.business + " " + request.params.person2 + " " + request.params.adj2 + " " + request.params.woman + " " + request.params.verb4 + " " + request.params.group + " " + request.params.loc2 + " " + request.params.game + " " + request.params.surface + " " + request.params.verb5 + " " + request.params.achievement + " " + request.params.noun2 + " " + request.params.athlete + " " + request.params.adj3);
  commentsdb.add({
    loc1: request.params.loc1,
    famousperson: request.params.famousperson,
    adj1: request.params.adj1,
    sound: request.params.sound,
    animal1: request.params.animal1,
    food: request.params.food,
    verb1: request.params.verb1,
    verb2: request.params.verb2,
    person1: request.params.person1,
    noun1: request.params.noun1,
    verb3: request.params.verb3,
    business: request.params.business,
    person2: request.params.person2,
    adj2: request.params.adj2,
    woman: request.params.woman,
    verb4: request.params.verb4,
    group: request.params.group,
    loc2: request.params.loc2,
    game: request.params.game,
    surface: request.params.surface,
    verb5: request.params.verb5,
    achievement: request.params.achievement,
    noun2: request.params.noun2,
    athlete: request.params.athlete,
    adj3: request.params.adj3
  });
  request.redirect("/comments");
}


if (typeof run === 'function') {
  app.defaultRoute(run);
}
start();