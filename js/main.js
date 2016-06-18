$(function () {
  var jqconsole = $('#console').jqconsole("In a world where technology is expanding into every field of business," + "\n" + "we work to expand students' technological skillsets to complement" + "\n" + "their entrepreneurial mindsets one </div> at a time." + "\n\n" + "Tips: Type what you need in the command line to be redirected. Type '?' if you need help. \n\n");

  function process(input){
    var parsed = input.split(" ");
    switch(parsed[0]){
      case "?":
      case "ls":
      case "help":
        return text.help();
      case "info":
        return text.info;
      case "work":
        return text.work();
      case "positions":
        return text.positions();
      case "projects":
        return text.projects();
      case "fun":
        return text.fun();
      case "contact":
        return text.contact;
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
