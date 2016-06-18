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
	info: "Stanford '20 (on a gap year). I like to code. I do a lot of JS and web dev. I do some NLP/ML research. \n"
         + "I try to learn new stuff as much as possible. dancing is fun. I enjoy freestyling.\n"
         + "I pop and wave but try to incorporate other styles (i.e. bboy, turf, krump). \n"
         + "I like to write too. Check out my <a href='http://brandontruong.com'>blog</a>!\n"
         + "Check out my work or projects for more info on tech stuff.\n",
	workObj: [
    {
      name: "Developer",
      company: "HelloToken",
      url: "http://www.hellotoken.com",
      time: "Spring 2015 -> Present"
    },
    {
			name: "Growth Hacker/Developer",
			company: "Apptopia",
			url: "http://www.apptopia.com",
			time: "Summer 2014"
		},
		{
			name: "Full Stack Javascript Engineer",
			company: "AdmitHub",
			url: "http://www.admithub.com",
			time: "May 2014 -> September 2014"
		},
		{
			name: "Researcher",
			company: "UNT Dept. of Computer Science and Engineering",
			url: "http://www.cse.unt.edu/~ccaragea/research.html",
			time: "November 2013 -> Present"
		},
		{
			name: "CTO",
			company: "Rigg-r",
			url: "http://rigg-r.com"
		},
		{
			name: "Summer Web Developer",
			company: "Atomic Design & Consulting",
			url: "http://www.atomicdc.com",
			time: "Summer 2013"
		},
		{
			name: "Developer",
			company: "Signet Education",
			url: "https://signeteducation.com/",
			time: "Summer 2012"
		}
	],
	work: function(){
		var output = "My work exp:\n\n";
		this.workObj.forEach(function(item){
			output += ("\t"
				+ item.name
				+  " @ <a href='"
				+ item.url
				+ "'>"
				+ item.company
				+ "</a>"
				+ "\n\n");
		});

		return output;
	},
	positionsObj: [
	{
		position: "President",
		organization: "RESOLV",
		url: "http://resolv.club"
	},
	{
		position: "President (@ chs, tams)",
		organization: "DFC",
		url: "http://thedfcnetwork.com/"
	},
	{
		position: "Vice President",
		organization: "CSO",
		url: "http://tamscompsci.com/"
	}
	],
	positions: function(){
		var output = "positions:\n\n";
		this.positionsObj.forEach(function(item){
			output += ("\t"
				+ item.position
				+  " of <a href='"
				+ item.url
				+ "'>"
				+ item.organization
				+ "</a>"
				+ "\n\n");
		});
		return output;
	},
	projObj: [
  {
    name: 'HelloToken',
    url: 'http://hellotoken.com',
    description: 'Designed the website and working on building out backend infrastructure. (rails, js)'
  },
	{
		name: "Bayesian Classification of Tweets During Natural Disasters",
		url: "https://www.asis.org/asist2014/proceedings/submissions/posters/349poster.pdf",
		description: "I led an NLP/ML research project with Dr. Caragea at UNT. (java, opennlp, bayes)"
	},
	{
		name: "EnergyPal (Grand Prize in Energy at NTx Apps Challenge)",
		url: "https://play.google.com/store/apps/details?id=com.ionicframework.energypal312399",
		description: "Live appliance-by-appliance energy monitoring system. You can see how much your computer is using from your phone, live! (ionic, js, java-hardware code)"
	},
	{
		name: "AdmitHub",
		url: "https://github.com/AndrewMagliozzi/Admit",
		description: "Get your college application reviewed by former admin officers. I built the first rendition of the web-app. (meteor, google apis)"
	},
  {
    name: 'CLTR',
    url: 'https://github.com/btroo/CLTR',
    description: 'Actiony-puzzley game I couldn\'t finish because game dev causes carpal tunnel... (libgdx, java) (WIP).'
  },
  {
    name: 'Slacking',
    url: 'https://github.com/btroo/slacking',
    description: 'Slack integration to show you a random HN article'
  },

	{
		name: "Akin Programming Language",
		url: "https://github.com/btroo/Akin",
		description: "NLP based programming language. (antlr, java/jvm)"
	},
  {
    name: "Campus 2.0 (1st at Campus 2.0 Hackathon)",
    url: "http://hello.brandontruong.com/campus",
    description: "App to gamify the usage of campus resources. (cordova, web)"
  },
	{
		name: "RayRay",
		url: "https://github.com/btroo/rayray",
		description: "NLP tools for keyword identification. (node) (wip)"
	},
	{
		name: "Hexal",
		url: "http://hello.brandontruong.com/hexal/",
		description: "Experimental color chooser. (web)"
	},
	{
		name: "Where's my car (2nd at Dallas 20 over 20 hackathon)",
		url: "https://github.com/simplyianm/wheres-my-car",
		description: "Helps you find your car in a parking lot. (phonegap)"
	},
	{
		name: "GitHub",
		url: "https://github.com/btroo",
		description: "Look at all my open source (some listed above)"
	}
	],
	projects: function(){
		var output = "Some stuff I've worked on (some are part of my work experience):\n\n";

		this.projObj.forEach(function(item){
			output += "\t"
			+ "<a href='"
			+ item.url
			+ "'>"
			+ item.name
			+ "</a>\n"
			+ "\t  "
			+ item.description
			+ "\n\n";
		});

		return output;
	},
	fun: function(){

		var facts = [
			"I have a fairly substantial music library. (yes, I download my music still)",
			"I love pho.",
			"I don't like sweets (sometimes in moderation it's okay).",
			"I'm a linux guy although I may make the move to mac life once I can get my hands on a mac",
			"I enjoy sitting in a cafe all day, writing or coding... with a black iced coffee, of course.",
			"I like shopping... but I am often found at the clearance rack for steals!",
			"I smile pretty much 100% of the time when I'm dancing. My friends knock me for it.",
			"C++ was my first programming language, but I barely remember anything regarding it now.",
			"A lot of my friends call me a bboy although I rarely bboy seriously.",
			"I have lived in Texas for my entire life. hopefully that'll change when college comes around."	,
			"I walk around my dorm in boxers even when it's cold.",
      "I might take a gap year."
		];

		var random = Math.floor((Math.random() * facts.length));
		return facts[random] + '\n';
	},
	contact: "say hey <a href='mailto:me@brandontruong.com'>here</a>\n",
	clear: function() {
		location.reload();
	}
}
