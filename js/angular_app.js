var app = angular.module('code-website',[]);

app.controller('teamController',['$scope', function($scope) {

  $scope.memberImage = function(image) {
    return "img/members/" + image + ".jpg";
  }

  $scope.url = function (name) {
    return name.replace(/\s/g,"-").toLowerCase();
  }

  $scope.members = [
    {
      name: "Arpit Bansal",
      origin: "Mumbai, India",
      interests: ["3D Modelling","Design","Finance","Web Development"],
      description: "Part time builder, full time vegetarian & probably sleeping. Always down for a great conversation — Coffee’s on me ;) 1-866-448-7698",
      year: "Sophomore"
    },
    {
      name: "Gabe Ficht",
      origin: "Newburyport, MA",
      interests: ["Antique Dealing","Web Development"],
      description: "Hi I’m Gabe Ficht a 20 year old, 17th-18th century antique dealer, founder of Ficht Antiques, co founder of Jinn Tech (software development firm), and middle distance runner who loves to travel and may be a German citizen.",
      year: "Sophomore"
    },
    {
      name: "April Chen",
      origin: "Honk Kong, Hong Kong",
      interests: ["Graphic Design", "Calligraphy", "Social Entrepreneurship"],
      description: "April was born in Chicago, and grew up in Singapore and Hong Kong. She first saw the Helvetica documentary 7 years ago and ever since has been designing things. She is a fan of experimenting with hand lettering, binge-reading articles and stalking aesthetic Instagram feeds.",
      year: "Sophomore"
    },
    {
      name: "Valerie Tetu",
      origin: "Quebec City, Canada",
      interests: ["Fashion","Emerging Technologies"],
      description: "Hi! I'm Val - a curious and passionate learner, interested in everything that sparks my creativity and enriches my cultural exposures. I absolutely adore bananas, spontaneous adventures, and funky conversations. If you have anything interesting/funny/cool/weird to share, please knock on my door! Oh, and also, I'm the nomad of the bunch...Where can you find me? Outside of my comfort zone. Note: anything fashion related: COME TO ME",
      year: "Sophomore"
    },
    {
      name: "Michael Losi",
      origin: "Murrieta, CA",
      interests: ["Rock Climbing","RC Car Racing","Meditation"],
      description: "My name is Michael Losi and this is my autobiography (so far) of Saturday February 4th 2017. Today I woke up sometime around 7 my with my laptop dead next to me since I had fallen asleep last night watching The Lord of the Rings. After my quick morning shower I made breakfast in the CodePlex kitchen consisting of quinoa, flaxseed, barley and amaranth oatmeal prepared with unsweetened hemp milk (I am currently eating a wholefoods plant-based diet {healthy vegan}). Following breakfast I spent about half an hour meditating, doing yoga, and practicing pranayama before departing to spend some time with my classwork for early next week. This semester I’m taking MAC/TOM, and Electronics at Babson and Modern Poetry and ‘Rationality and Action’ (a philosophy course I’m auditing) at Wellesley College. After wading through my MAC/TOM and Electronics for next week, I spend some time investigating weakness of will and self-deception for ‘Rationality and Action’ and deciphering some of W.B. Yeats later poetry. Now it’s time for lunch for which I head to Trim to eat a salad and any decent vegan options they’re currently serving. After eating I had back to CodePlex for the bonding event at which I am writing this. The rest of the day I plan on spending Rock Climbing with BOW Climbing at Central Rock Watertown an indoor climbing gym until around 7. Once back I’m planning on spending dinner with friends making our own pizzas. Pardon any errors I’m going to get some reading done before climbing and don’t want to bother editing this.",
      year: "Sophomore"
    },
    {
      name: "Tyler Graybill",
      origin: "Baltimore, MD",
      interests: ["Accounting","Travel","SQL","Doing cool shit"],
      description: "Tyler is a sophomore who grew up in a rural area with very little interaction with tech. No Uber, no google maps, no google chrome, and no slack. But with the help of some friends he had his eyes opened to the world of technology. Now leading the organization of CODE, the tech club of Babson, Tyler has a new passion for learning and understanding all things innovative. From learning SQL to leaving internet explorer, Tyler hopes to shares his experiences and help other students understand the importance of integrating tech and business.",
      year: "Sophomore"
    },
    {
      name: "Peter Sorenson",
      origin: "Blacksburg, VA",
      interests: ["Hiking Barefeet","Hands-on Construction","Swimming","Snorkling","Lifting"],
      description: "Born in Richmond VA. Raised in Blacksburg VA. Homeschooled until 9th grade. Swimming and diving for 8 years. Recruited by Babson for swimming and diving. Enjoy hike barefoot. VT fan. Currently rooming with a hippie.",
      year: "Sophomore"
    },
    {
      name: "Abe Storey",
      origin: "San Francisco, CA",
      interests: ["Growth Hacking","Marketing","Content Creation"],
      description: "Abe is a 19 YEAR OLD GROWTH MARKETER, CODER, AND STUDENT at 10 years old he taught himself web development and search marketing. At 12, he launched his first iOS app. Since then, he created and sold a SaaS business, made an app that was considered a 'best new app' by Apple, and worked for rad companies like Yoshirt, Neon Roots, and Cibo. He believes life is in.",
      year: "First Year"
    },
    {
      name: "Abby Sardjono",
      origin: "Singapore, Singapore",
      interests: ["Yoga","Socialising"],
      description: "My name is Abby which is short for Abbygail which I understand is weird af. I was born in Oklahoma City but I’ve lived in Singapore since I was 2. I like to travel, eat, and hangout with my friends. I have positions in Chi Omega and Delta Sigma Pi. I am currently learning how to code and want to get more involved with CODE.",
      year: "Sophomore"
    },
    {
      name: "Waree Rungsiriwat",
      origin: "Bangkok, Thailand",
      interests: ["Design"],
      description: "Waree is from Bangkok, Thailand. Currently a junior, concentrating in Business Analytics and Economics. She loves Basketball, makeup and cooking. Fun fact: her first sales job was when she was 8 years old.",
      year: "Junior"
    },
    {
      name: "Mike Daboll",
      origin: "San Diego, CA",
      interests: ["Car Detailing","Bartending"],
      description: "Mike Daboll is the second sexiest blonde kid of CODE.  He is the founder and head detailer at Aspire Auto Detailing, a premium detailing service in San Diego that specializes in paint correction and ceramic coatings.  99% of his free time is spent working and detailing cars, but he also enjoys restoring his 1981 Datsun 280zx, DJ’ing, bartending, and having a great time with friends.e",
      year: "Sophomore"
    },
    {
      name: "Joe Oliver",
      origin: "Waterville, ME",
      interests: ["Music","Pizza","Skiing"],
      description: "Joe is a sophomore in his first semester with CODE. In addition to CODE he also performs in the campus acapella group: the Rocket Pitches. He is exited to take part in CODE events.",
      year: "Sophomore"
    },
    {
      name: "Xudong Zheng",
      origin: "New York, NY",
      interests: ["Programming","Hacking","Table Tennis"],
      description: "Xudong develops web, desktop, and mobile applications using Go, HTML, CSS, JavaScript, and C#. He enjoys juggling and playing table tennis. He is interested in mathematics and computer security.",
      year: "Sophomore"
    },
    {
      name: "Julie Ko",
      origin: "Atlanta, GA",
      interests: ["Design","Project Management"],
      description: "Julie Ko, originally from Georgia, is a sophomore at Babson. Like most, she hopes to start her own business one day, preferably in the field concerning both tech and visual arts. Asides from currently working at the library, she has spent many years working for a non-profit organization. Her interests include art, music, and fitness (a pretty basic mix). She can be awkward sometimes, but really enjoys meeting new people. Feel free to message her on FB or come visit her at C108",
      year: "Sophomore"
    },
    {
      name: "Sunny Saluja",
      origin: "Philadelphia, PA",
      interests: ["Talking","Sales","Finance"],
      description: "Born in raised in suburban Philadelphia. Bright turbans, aspiring DJ, and full-time foodie.",
      year: "Sophomore"
    },
    {
      name: "Waseem Shabout",
      origin: "Dallas, TX",
      interests: ["Design","Bullshitting","People","FinTech"],
      description: "No matter where I go or what I do I love the adventure in every challenge I come across. I’m UX and Bizdev designer for Modo Payments, co-founder at Jinn.Tech and passionate about the human side of technology.complete without strong coffee and Thai food.",
      year: "Sophomore"
    },
    {
      name: "Eagle Wu",
      origin: "Doylestown, PA",
      interests: ["Programming","Virtual Reality","Doges"],
      description: "In high school, Eagle worked as a bus boy/dishwasher every weekend until he had enough money to buy his first laptop. On that laptop, he taught himself how to code Android Mobile webapps and simple websites, and during Freshman Year he won a Fellowship to the Horizons School of Technology to become a FullStack developer. His passion is in emerging technology industries, especially Virtual Reality. Eagle was one of the original Founders of CODE.",
      year: "Sophomore"
    },
    {
      name: "Amani Mehta",
      origin: "Austin, TX",
      interests: ["Photography","Social Media Analytics","Anime","Health & Wellness","Personal Training","Short Films"],
      description: "Amani Mehta is a sophomore passionate about digital marketing and social analytics. She is curious about tech innovation and connected devices. Amani also hopes to empower others to lead a healthy lifestyles: mind, body, and soul.",
      year: "Sophomore"
    },
    {
      name: "Angelica Vasquez",
      origin: "Boston, MA",
      interests: ["Fashion"],
      description: "Angelica is a sophomore at Babson. She is from Tucson Arizona and is interested in SEO and digital marketing. Her hobbies include dancing in the Babson Dance Ensemble, cooking, and laughing and memes!",
      year: "Sophomore"
    },
    {
      name: "Liam McCafferty",
      origin: "Portsmouth, NH",
      interests: ["Sports","Helping people"],
      description: "He was born in Portsmouth, NH to John and Maura McCafferty, and grew up in the town. A former baby model, Liam will be remembered for his stunningly handsome looks and his unbelievable athleticism, winning the MVP for Rec. Basketball in the 8th grade. His last words were “Brady is the GOAT.” Liam is survived by his two younger sisters and his dog Dewey. A celebration of his life will be held at an undisclosed location at an undisclosed time.",
      year: "Sophomore"
    }
  ]

}]);
