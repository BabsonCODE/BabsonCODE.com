$(function () {
  var jqconsole = $('#console').jqconsole("");

  function process(input) {
    var parsed = input.split(" ");
    switch(parsed[0].toLowerCase()){
        case "?":
            return text.help();
        case "help":
            return text.help();
        case "info":
            return text.info;
        case "contact":
            return text.contact;
        case "projects":
            return text.showProjects();
        case "members":
            return text.showMembers();
        case "events":
            return text.showEvents();
        case "clear":
            return text.clear();
        default:
            return text.notRight;
    }
  }

  var startPrompt = function () {
    jqconsole.Prompt(true, function (input) {
      if(input) jqconsole.Write(process(input), 'jqconsole-output', false);
      else jqconsole.Write(text.notRight, 'jqconsole-output');
      startPrompt();
    });
  };

  startPrompt();
});
