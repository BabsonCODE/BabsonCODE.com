var text = {
	helpGreeting: function(){
		var random = Math.floor((Math.random() * 3) + 1);
		console.log(random);
		switch(random){
			case 1:
				return "What's up";
			case 2:
				return "Nice to meet you!"
			case 3:
				return "Hello,"
		}
	},
	help: function() {
		return this.helpGreeting() + "\n\n"
		+ "Try one of the following commands:\n\n"
		+ "\tinfo: Information about us\n\n"
		+ "\tcontact: Email us\n\n"
		+ "\tprojects: What we do\n\n"
		+ "\tmembers: Get to know the community\n\n"
		+ "\tevents: Calendar\n\n"
		+ "\tclear: Clears the console\n\n"
	},
	notRight: "Oops, that's not a valid command... try '?'\n",
	clear: function() {
		location.reload();
	}
}
