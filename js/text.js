var text = {
	helpGreeting: function(){
		var random = Math.floor((Math.random() * 3) + 1);
		console.log(random);
		switch(random){
			case 1:
				return "What's up";
			case 2:
				return "Nice to meet you!";
			case 3:
				return "Hello,";
		}
	},
	help: function() {
		return "\n" + this.helpGreeting() + "\n\n"
		+ "Try one of the following commands:\n\n"
		+ "\tinfo: Information about us\n\n"
		+ "\tcontact: Email us\n\n"
		+ "\tprojects: What we do\n\n"
		+ "\tmembers: Get to know the community\n\n"
		+ "\tevents: Calendar\n\n"
		+ "\tclear: Clears the console\n\n"
	},
	info: "\nXYZ\n\n",
	contact: "\nReach out to us at <a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=babsoncode@gmail.com' target='_blank'>babsoncode@gmail.com</a>\n\n",
	projects: [
		{
			id: 1,
			name: "Example 1",
			description: "Description 1",
			url: "www.google.com",
			status: "Ongoing"
		},
		{
			id: 2,
			name: "Example 2",
			description: "Description 2",
			url: "www.facebook.com",
			status: "Completed"
		}
	],
	showProjects: function () {
		var projectOutput = "\nProjects:\n\n";

		this.projects.forEach(function (project) {
			projectOutput += ("\t"
			+ project.id + ". " + project.name
			+ "\n\t   "
			+ project.description
			+ "\n\t   "
			+ "<a href='" + project.url + "'>" + project.url + "</a>"
			+ "\n\t   "
			+ "Status: " + project.status
			+ "\n\n");
		});

		return projectOutput;
	},
	members: [
		{
			name: "Arpit Bansal",
			age: 18,
			email: "abansal3@babson.edu",
			linkedIn: "www.linkedin.com",
			skills: "Web Dev"
		},
		{
			name: "Waseem Shabout",
			age: 19,
			email: "wshabout1@babson.edu",
			linkedIn: "www.linkedin.com",
			skills: "UX/UI Design"
		}
	],
	showMembers: function () {
		var memberOutput = "\nMembers:\n\n";

		this.members.forEach(function (member) {
			memberOutput += ("\t"
			+ member.name + ", " + member.age
			+ "\n\t" + "<a href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=" + member.email + "' target='_blank'>" + member.email + "</a>"
			+ "\n\t" + member.linkedIn
			+ "\n\n");
		});

		return memberOutput;
	},
	showEvents: function () {

		var xhttp = new XMLHttpRequest();
		xhttp.open("GET","http://localhost:8080/calendar",false);
		
		xhttp.send();
		return xhttp.responseText + "\n\n";
	},
	notRight: "Oops, that's not a valid command... try '?'\n",
	clear: function() {
		location.reload();
	}
}
