export default {
	bio: {
		// about: {
		// 	text: [
		// 		"Hi &#128075;",
		// 		"I'm Vinay Somawat. I’m currently working as a Software Engineer at Biofourmis India specialized in JavaScript Applications. I did my undergrad in CS from NIT Warangal.",
		// 		"I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
		// 		"I love to read, listen to music, and travel.",
		// 	],
		// },
		contact: {
			text: [
				"If you would like to get in touch please feel free to send me an email at shettya@usc.edu",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "JavaScript, C++",
			color: "1",
			percentage: "70",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Angular, Reactjs",
			color: "6",
			percentage: "50",
		},
		{
			title: "Backend",
			skillName: "Nodejs, MongoDB",
			color: "2",
			percentage: "40",
		},
		{
			title: "Clouds",
			skillName: "AWS(EC2, S3), Heroku, Netlify",
			color: "3",
			percentage: "30",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, SCSS",
			color: "4",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "GitHub, JIRA, Trello",
			color: "7",
			percentage: "70",
		},
		{
			title: "Tools",
			skillName: "Postman, Chrome DevTools",
			color: "3",
			percentage: "80",
		},
		{
			title: "Saas products",
			skillName: "CleverTap, FreshDesk",
			color: "5",
			percentage: "50",
		},
		{
			title: "Editor",
			skillName: "VS Code",
			color: "6",
			percentage: "70",
		},
	],
	projects: {
		web: [
			{
				projectName: "YelpHelper",
				image: "images/programmingdiaries.png",
				summary:
					"Deployed a responsive website to fetch information about 10 businesses satisfying user’s requirements. Bookings were saved in the localstorage of the system. The backend is developed on NodeJS which uses YELP API for data retrieval.",
				preview: "https://angular-yelp-project.wl.r.appspot.com/",
				techStack: [
					"Angular",
					"Node.JS",
					"Bootstrap",
					"JavaScript",
					"Google Cloud Platform",
				],
			},
			{
				projectName: "YELPify",
				image: "images/findyourbank.png",
				summary:
					"Deployed a website to fetch information about 20 businesses satisfying user’s requirements using Flask. Integrated ipinfo.io API to fetch user’s geolocation.",
				preview: "https://web-yelp-project.wl.r.appspot.com/",
				techStack: ["Python", "DOM", "JavaScript", "XMLHttpRequest", "Flask"],
			},
			{
				projectName: "Web Portfolio",
				image: "images/portfolio.png",
				summary:
					"Developed a website to help user to rent or borrow a vehicle. Orders and details were stored in MySQL database. Renters can view rented vehicles and then access details by means of dashboard.",
				preview: "https://github.com/A2U8C/Laravel_Project-Car_Rental_System",
				techStack: ["MySQL", "Bootstrap", "JavaScript","Laravel"],
			},
		],
		software : [
			{
				projectName: "Hybrid Recommendation System using Spark RDD",
				image: "images/pizzaorderchatbot.png",
				summary:
					"Developed a hybrid recommendation system using the weighted average approach to efficiently predict ratings for Yelp Data. The system is a combination of Item Based Collaborative filtering and model-based (XGBregressor) recommendation system. Achieved an RMSE of 0.9779 on the testing data.",
				preview:
					"https://github.com/A2U8C/Data_Mining-Competitive_Project",
				techStack: ["PySpark", "Python"],
			},
			{
				projectName: "Communities Detection using Spark GraphFrames",
				image: "images/pizzaorderchatbot.png",
				summary:
					"Implemented Girvan-Newman algorithm to find communities in a graph. The communities were created with a similar business taste. Implemented using edge Betweenness.",
				preview:
					"https://github.com/A2U8C/Scala_Data_Mining-Assignments/tree/main/Scala_DSCI553_Assignment_4",
				techStack: ["Spark", "Scala","GraphFrames"],
			},
			{
				projectName: "Hybrid Recommendation System using Spark RDD",
				image: "images/pizzaorderchatbot.png",
				summary:
					"Developed a hybrid recommendation system using the weighted average approach to efficiently predict ratings for Yelp Data. The system is a combination of Item Based Collaborative filtering and model-based (XGBregressor) recommendation system. Achieved an RMSE of 0.9779 on the testing data.",
				preview:
					"https://github.com/A2U8C/Data_Mining-Competitive_Project",
				techStack: ["PySpark", "Python"],
			},
			
		],
		android : [
			{
				projectName: "Yelper: Android application with Node.js backend and YELP API",
				image: "images/nitwcse.jpg",
				summary:
					"Devised an android application to fetch information about 9 businesses satisfying user’s requirements. Integrated Google API and GPS to fetch geolocation of the search. Bookings stored in sharedpreferance of the application.",
				preview: "https://github.com/vinaysomawat/NITW-CSE",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "CareerHigh-App",
				image: "images/carrerhigh.png",
				summary:
					"The Application display the webpages of website careerhigh.in in android devices.",
				preview: "https://github.com/vinaysomawat/CareerHigh-Android",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		freelance : [
			{
				projectName: "Precondition Inference using Deberta-V3-Large model",
				image: "images/whatsappbot.jpg",
				summary:
					"Dataset provided pair of sentences, the first one is considered as a precondition, while the second one is a statement. Built a system for detecting whether the precondition will enable or disable the statement. Achieved an accuracy of 90.54%. Placed in the top 20% for the accuracy of the system out of 300 students.",
				preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
				techStack: ["Deberta-V3-Large", "Python", "Machine Learning"],
			},
			{
				projectName: "Hotel reviews classification using Naive Bayes classifier",
				image: "images/billgenerator.png",
				summary:
					"Implemented a Naive Bayes classifier to identify hotel reviews as either truthful or deceptive, and either positive or negative. Achieved a mean F1 of 0.9219 on unseen testing data.",
				preview: "https://github.com/A2U8C/NLP_Assignments/tree/main/NLP_NaiveBayesAlgorithms",
				techStack: [" Naive Bayes","Machine Learning", "Python"],
			},
		],
	},
	experience: [
		{
			title: "University of Southern California, Los Angeles      ",
			duration: "May 2022 - Present",
			subtitle: "Graduate Research Assistant",
			details: [
				"Working under Dr. Neda Jahanshad. Worked on the ENIGMA Ontology, where coordinated for analyzing the data and generating information which was later uploaded to the wiki as documentation. Currently working to harmonize the alzheimer's disease data. "
			],
			tags: [
				"Python",
				"Pandas",
				"Numpy",
				"Data Processing",
			],
			icon: "heartbeat",
		},
		{
			title: "GFI Informatique India private limited",
			duration: "December 2019 - January 2020",
			subtitle: "INTERN",
			details: [
				"Worked on “Oracle Machine Learning”. Explored methods to integrate different tables for execution of machine learning model in database itself; training a model on a set of data directly retrieved from database.",
			],
			tags: [
				"Oracle Database",
				"Machine Learning",
				"Python",
			],
			icon: "group",
		},
	],
	education: [
		{
			title: "Master of Science in Computer Science",
			duration: "",
			subtitle: "University of Southern California, Los Angeles, California",
			details: [
				"GPA: 3.66 / 4.0",
			],
			tags: [
				"Analysis of Algorithms", 
				"Database Systems", 
				"Data Mining", 
				"Natural Language Processing", 
				"Web Technologies",
			],
			icon: "book",
		},
		{
			title: "Bachelor of Engineering in Computer Engineering",
			duration: "",
			subtitle: "Vivekanand Education Society's Institute of Technology, Mumbai University, India",
			details: [
				"GPA: 9.76 / 10.00",
				"Secured first place in second year engineering with a 10/10 GPA",
			],
			tags: [
				"Data Structures",
				"Operating Systems",
				"Database Management System",
				"Machine Learning",
				"Object Oriented Programming",
				"Cloud Computing",
			],
			icon: "graduation-cap",
		},
		
	],
	activities : [
		{
			title: "Master of Science in Computer Science",
			duration: "",
			subtitle: "University of Southern California, Los Angeles, California",
			details: [
				"GPA: 3.66 / 4.0",
			],
			tags: [
				"Analysis of Algorithms", 
				"Database Systems", 
				"Data Mining", 
				"Natural Language Processing", 
				"Web Technologies",
			],
			icon: "book",
		},
		{
			title: "Bachelor of Engineering in Computer Engineering",
			duration: "",
			subtitle: "Vivekanand Education Society's Institute of Technology, Mumbai University, India",
			details: [
				"GPA: 9.76 / 10.00",
				"Secured first place in second year engineering with a 10/10 GPA",
			],
			tags: [
				"Data Structures",
				"Operating Systems",
				"Database Management System",
				"Machine Learning",
				"Object Oriented Programming",
				"Cloud Computing",
			],
			icon: "graduation-cap",
		},
		
	],
	publication : [
		{
			title: "NewsCheck: A Fake News Detection and Analysis System",
			duration: "",
			subtitle: "2022",
			details: [
				"https://doi.org/10.1007/978-981-16-5301-8_42",
			],
			tags: [
			],
			preview: "https://doi.org/10.1007/978-981-16-5301-8_42",
			icon: "book",
		},
		{
			title: "Cataract Eye Detection Using Machine Learning Models",
			duration: "",
			subtitle: "2021",
			details: [
				"https://doi.org/10.1007/978-981-15-9774-9_84",
			],
			tags: [
			],
			preview: "https://doi.org/10.1007/978-981-15-9774-9_84",
			icon: "book",
		},
		{
			title: "A Proposal for a novel approach to analyze and detect the fake news using AI techniques",
			duration: "",
			subtitle: "2020",
			details: [
				"https://ieeexplore.ieee.org/document/9316056",
			],
			tags: [
			],
			preview: "https://ieeexplore.ieee.org/document/9316056",
			icon: "book",
		},
		
		
	],

	Achievements : [
		{
			title: "NewsCheck: A Fake News Detection and Analysis System",
			duration: "",
			subtitle: "2022",
			details: [
				"https://doi.org/10.1007/978-981-16-5301-8_42",
			],
			tags: [
			],
			icon: "book",
		},
		{
			title: "Cataract Eye Detection Using Machine Learning Models",
			duration: "",
			subtitle: "2021",
			details: [
				"https://doi.org/10.1007/978-981-15-9774-9_84",
			],
			tags: [
			],
			icon: "book",
		},
		{
			title: "A Proposal for a novel approach to analyze and detect the fake news using AI techniques",
			duration: "",
			subtitle: "2020",
			details: [
				"https://ieeexplore.ieee.org/document/9316056",
			],
			tags: [
			],
			icon: "book",
		},
		
		
	],


	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "Stackoverflow",
					link: "https://stackoverflow.com/users/8461233/vinay-somawat",
				},
				{
					text: "GitHub",
					link: "https://github.com/A2U8C",
				},
				{
					text: "LeetCode",
					link: "https://leetcode.com/ankush_A2U8C/",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/vinaysomawat/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/thesigmakid",
				},
				{
					text: "Buy me a coffee",
					link: "https://www.buymeacoffee.com/r194dME8y",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Vinay Somawat.",
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
