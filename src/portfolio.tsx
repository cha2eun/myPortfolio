import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'CHAEEUN JANG',
	title: "Chaeeun's Portfolio",
	subTitle: [ {sub: emoji("📅 생년월일 : 1993.10.29")}
	,{sub:emoji("😀 이름 : 장채은")}
	,{sub:emoji("🏠 주소 : 서울특별시 영등포구")}
	,{sub:emoji("✏ 학력 : 동덕여자대학교 (2013~2017) ")}],
	role: "📢ABOUT ME",
	resumeLink: "/subPage",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/cha2eun',
	linkedin: 'https://www.linkedin.com/in/chaeny1029',
	email: 'chaeny111@naver.com',
	facebook: 'Your facebook link',
	twitter: "Your twitter link",
	instagram: "Your instagram link",
	medium: 'Your medium link',
	stackoverflow: 'Your stackoverflow link'
};

export const skills = {
	title: emoji("Skills 💻"),
	subTitle: "사용가능한 기술스택",
	/* describeSkills: [
		emoji("✔ describe first"),
		emoji("✔ describe second"),
		emoji("✔ describe third"),
		emoji("✔ describe forth"),
		emoji("✔ describe fifth"),
	], */
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	// lists: [
	// 	{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 80},
	// 	{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70},
	// 	{fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
	// 	{fontAwesome: "fab fa-sass", text: "Sass", proficiency: 30},
	// 	{fontAwesome: "fab fa-react", text: "React", proficiency: 60},
	// 	{fontAwesome: "fab fa-aws", text: "AWS", proficiency: 20},
	// ],
	skillStack:[
		{subTitle:emoji("✔ Main Skills"), 
		lists:[{fontAwesome: "fab fa-js", text: "JS", proficiency: "-실무에서 주로 사용\n\n-이해하고 응용이 가능"},
					{fontAwesome: "fab fa-java", text: "JAVA", proficiency: "-실무에서 주로 사용\n\n-이해하고 응용이 가능"},
					]
		},
		{subTitle:emoji("✔ Front-End"), 
		lists:[{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: "-전달받은 html 퍼블리싱파일을 jsp로 이용"},
				{fontAwesome: "fab fa-css3-alt", text: "CSS", proficiency: "-퍼블리싱받은 파일을 프로그램에 적용이 가능"},
				{fontAwesome: "fa-solid fa-file-code", text: "jQuery", proficiency: "-실무에서 주로 사용\n"},
				{fontAwesome: "fab fa-react", text: "React", proficiency: "-개인적으로 학습"},
				]
		},
		{subTitle:emoji("✔ Back-End"), 
		lists:[{fontAwesome: "fab fa-aws", text: "JAVA", proficiency: "20"},
			{fontAwesome: "fab fa-aws", text: "PostgreSQL", proficiency: "20"},
			{fontAwesome: "fab fa-aws", text: "Oracle", proficiency: "20"},
			{fontAwesome: "fab fa-html5", text: "MySQL", proficiency: "2번"},
			{fontAwesome: "fab fa-html5", text: "Linux", proficiency: "2번"},
			]
		},
	],
	view: true
};

export const experience = {
	title: "Experience",
	lists: [
		{
			date: "2019.12 ~ 2020.06",
			company: "비트캠프",
			role: "풀스택 웹 개발자 양성과정",
		},
		{
			date: "2020.10 ~",
			company: "웹케시 그룹",
			role: "비플제로페이 웹&서버 개발부",
		}
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: false
}

export const projects = {
	title: emoji("Career 💻"),
	subTitle: "실무 개발 경력",
	lists: [
		{
			title: "Project1",
			desc: "very very very very very very very very very very very very very very long very long description for clamp testing",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: false
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: false
}

export const contactInfo = {
	title: "Contact To Me",
	subTitle: "가장 빠른 응답이 가능한 연락처입니다.",
	// introduce: emoji("📞a"),
	introduce: [{intro : emoji("✉ chaeny111@naver.com")},
				{intro : emoji("📞 010-9017-7424")},
				],
	view: true
}

export const subTop = {
	from : "sub",
	view:true
}

export const mainTop = {
	from : "main",
	view:true
}