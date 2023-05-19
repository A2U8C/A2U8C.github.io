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
			title: "Web Technology",
			skillName: "JavaScript, HTML, CSS",
			color: "1",
			percentage: "80",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Angular, Nodejs, React",
			color: "6",
			percentage: "80",
		},
		{
			title: "Languages",
			skillName: "Python, Scala",
			color: "2",
			percentage: "90",
		},
		{
			title: "Clouds",
			skillName: "Google Cloud Platform",
			color: "3",
			percentage: "65",
		},
		{
			title: "Languages",
			skillName: "Java, C/C++, C#",
			color: "4",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "GitHub",
			color: "7",
			percentage: "75",
		},
		{
			title: "Tools",
			skillName: "Jupyter Notebook, Pycharm",
			color: "3",
			percentage: "90",
		},
		{
			title: "Frameworks",
			skillName: "PySpark, Flask",
			color: "5",
			percentage: "90",
		},
		{
			title: "API",
			skillName: "RestFul Api",
			color: "4",
			percentage: "95",
		},
	],
	projects: {
		web: [
			{
				projectName: "PD WG Enigma Application",
				image: "images/PD_WG.jpg",
				summary:
					"Developing a REACT Application, based on Parkinson Disease Wiki. Worked on Flask Restful API for retrieving information from Parkinson Disease WIKI. Retrieving information about different cohorts using Flask Restful library of Python and SPARQL.",
				preview: "https://github.com/A2U8C/React_Enigma_Application",
				techStack: ["React", "Python", "SPARQL","Node.JS"],
			},
			{
				projectName: "YelpHelper",
				image: "images/YelpHelper.jpg",
				summary:
					"Deployed a responsive Angular application to fetch information about 10 businesses satisfying user’s requirements. Bookings were saved in the localstorage of the system. The backend is developed on NodeJS which uses YELP API for data retrieval.",
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
				image: "images/YELPify.jpg",
				summary:
					"Deployed a website to fetch information about 20 businesses satisfying user’s requirements using Flask. Integrated ipinfo.io API to fetch user’s geolocation.",
				preview: "https://web-yelp-project.wl.r.appspot.com/",
				techStack: ["Python", "DOM", "JavaScript", "XMLHttpRequest", "Flask"],
			},
			{
				projectName: "Car Rental management system using Laravel",
				image: "images/laravel.jpg",
				summary:
					"Developed a website to help user to rent or borrow a vehicle. Orders and details were stored in MySQL database. Renters can view rented vehicles and then access details by means of dashboard.",
				preview: "https://github.com/A2U8C/Laravel_Project-Car_Rental_System",
				techStack: ["MySQL", "Bootstrap", "JavaScript","Laravel"],
			},
		],
		software : [
			{
				projectName: "Hybrid Recommendation System using Spark RDD",
				image: "images/pyspark.jpg",
				summary:
					"Developed a hybrid recommendation system using the weighted average approach to efficiently predict ratings for Yelp Data. The system is a combination of Item Based Collaborative filtering and model-based (XGBregressor) recommendation system. Achieved an RMSE of 0.9779 on the testing data.",
				preview:
					"https://github.com/A2U8C/Data_Mining-Competitive_Project",
				techStack: ["PySpark", "Python"],
			},
			{
				projectName: "Communities Detection using Spark GraphFrames",
				image: "images/pyspark.jpg",
				summary:
					"Implemented Girvan-Newman algorithm to find communities in a graph. The communities were created with a similar business taste. Implemented using edge Betweenness.",
				preview:
					"https://github.com/A2U8C/Scala_Data_Mining-Assignments/tree/main/Scala_DSCI553_Assignment_4",
				techStack: ["Spark", "Scala","GraphFrames"],
			},
			{
				projectName: "Frequent itemsets using SON Algorithm approach with Spark RDD ",
				image: "images/pyspark.jpg",
				summary:
					"Developed a system to find frequent itemset amongst two large dataset using the SON Algorithm approach. The system is used to find all the possible combinatoins of the frequent itemset.",
				preview:
					"https://github.com/A2U8C/Data_Mining-Assignments/tree/main/DSCI533_Assignment-2",
				techStack: ["PySpark", "Python"],
			},
			
		],
		android : [
			{
				projectName: "Yelper: Android application with Node.js backend and YELP API",
				image: "images/yelp_Android.jpg",
				summary:
					"Devised an android application to fetch information about 9 businesses satisfying user’s requirements. Integrated Google API and GPS to fetch geolocation of the search. Bookings stored in sharedpreferance of the application.",
				preview: "https://drive.google.com/file/d/15h078xfydJKFq2671zy3gyHzdkPFc2Wj/view?usp=sharing",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "Android Application for Patrolling officers",
				image: "images/ds164.jpeg",
				summary:
					"Coded a mobile application for Patrolling officers to increase safety and efficiency. Application provides SOS feature, enabling an officer to contact closest officer via location of all officers. Additionally, it records movement of user.",
				preview: "https://github.com/A2U8C/DS164_A2M",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		freelance : [
			{
				projectName: "Precondition Inference using Deberta-V3-Large model",
				image: "images/nlp_img.png",
				summary:
					"Dataset provided pair of sentences, the first one is considered as a precondition, while the second one is a statement. Built a system for detecting whether the precondition will enable or disable the statement. Achieved an accuracy of 90.54%. Placed in the top 20% for the accuracy of the system out of 300 students.",
				preview: "https://github.com/A2U8C/",
				techStack: ["Deberta-V3-Large", "Python", "Machine Learning"],
			},
			{
				projectName: "Hotel reviews classification using Naive Bayes classifier",
				image: "images/nlp_img.png",
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
				"Worked on the ENIGMA Ontology, where coordinated for analyzing the data and generating information for documentation. Currently working on adding features to UKBB_parser using Pandas, Numpy library in python. Also working on building API for Parkinson Disease project for retrieving information about different cohorts using Flask Restful library of Python and SPARQL."
			],
			tags: [
				"Python",
				"Pandas",
				"Numpy",
				"Data Processing",
				"Plotly",
				"SPARQL",
				"REACT"
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
				"GPA: 3.72 / 4.0",
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
			title: "Secured first place in second year engineering with a 10/10 GPA in semesters III and IV during undergraduate.",
			preview: "https://drive.google.com/file/d/1KbYyEhgUYT5L0gju4kBHFN7KfmWWmSZk/view?usp=sharing",
			subtitle: "",
		},
		{
			title: "Led a team of 3 members to secure 3rd place in SYRUS HACKATHON2019 at VESIT in March 2019",
			preview: "/#",
			subtitle: "",
		},
		{
			title: "Headed a team of 6 members to be placed in top 4 positions in National level Smart India Hackathon 2020, where represented the university.",
			preview: "/#",
			subtitle: "",
		},
		{
			title: "Completed Certificate course on C/C++ programming languages from Aptech Institute, India",
			preview: "https://drive.google.com/file/d/1SDn48TeLURDan5MAEHe0djGKH6gNQziy/view",
			subtitle: "",
			duration: "",
		},
		{
			title: "Participated in TSEC HACKATHON 2018",
			preview: "/#",
			subtitle: "",
			duration: "",
		},
		{
			title: "Participated in TSEC HACKATHON 2019",
			preview: "/#",
			subtitle: "",
			duration: "",
		},
		{
			title: "Participated in DMCE HACKATHON 2020",
			preview: "/#",
			subtitle: "",
			duration: "",
		},
		{
			title: "A member of Rotaract Club of Mumbai Salt City, where was a part of the organising committee.",
			preview: "/#",
			subtitle: "",
			duration: "",
		},
		{
			title: "Successfully completed courses on Natural Language Processing, Machine Learning and other courses from Coursera.",
			preview: "/#",
			subtitle: "",
			duration: "",
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
