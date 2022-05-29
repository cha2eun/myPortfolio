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
		lists:[{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: "-전달받은 html 퍼블리싱 파일을 jsp로 이용"},
				{fontAwesome: "fab fa-css3-alt", text: "CSS", proficiency: "-퍼블리싱받은 파일을 프로그램에 적용이 가능"},
				{fontAwesome: "fa fa-code", text: "jQuery", proficiency: "-실무에서 주로 사용\n"},
				{fontAwesome: "fab fa-react", text: "React", proficiency: "-개인적으로 학습"},
				]
		},
		{subTitle:emoji("✔ Back-End"), 
		lists:[{fontAwesome: "fab fa-java", text: "JAVA", proficiency: "-백엔드 개발시 주로 사용합니다."},
			{fontAwesome: "fa fa-database", text: "PostgreSQL", proficiency: "-실무에서 사용하는 쿼리랭귀지입니다.\nCRUD 및 JOIN,\n집계 등을 이용하여 데이터 추출이 가능합니다."},
			{fontAwesome: "fa fa-database", text: "Oracle", proficiency: "-일부 업무 및 프로젝트시 활용경험이 있습니다.\n간단한 CRUD 및 rownum, join 등이 가능합니다."},
			{fontAwesome: "fa fa-database", text: "MySQL", proficiency: "-개인 공부에 활용한 경험이 있으며\n간단한 CRUD가 가능합니다."},
			{fontAwesome: "fab fa-linux", text: "Linux", proficiency: "-실무에서 서버 접근을 위해 활용하였습니다.\n간단한 리눅스 명령어 사용이 가능합니다."},
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
			content: "자바,자바스크립트,제이쿼리,\n\n스프링부트 프레임워크 등을 이용한 프로젝트",
			role: "풀스택 웹 개발자 양성과정",
		},
		{
			date: "2020.10 ~",
			company: "웹케시 그룹",
			content: "어드민페이지 개발, 배치 개발/관리,\n\n 비플제로페이 앱운영, 비플제로페이 앱 신규기능 개발",
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
	subTitle: "Project ",
	lists: [
		{
			title: "Ae-Ho",
			desc: "깨끗한 팬 문화를 위한 웹 커뮤니티 AE-HO\n국비과정 중 수행한 웹프로젝트로 카테고리로 분기되는 게시판 개발 (CRUD 및 ajax)",
			url: "#",
			skills:"[사용기술] SpringBoot, Oracle, myBatis, jQuery, jsp, css, html, bootstrap, ajax, summernote"
		},
		{
			title: "Admin Page",
			desc: "비플제로페이 앱 서비스용 어드민 페이지 기능 개발(집계정보/알림톡 대량발송/푸시 대상자 추출 등)",
			url: "#",
			skills:"[사용기술] JexFameWork, jsp, html, css, postgreSQL, iframe"
		},
		{
			title: "알림톡",
			desc: "bgf알림톡 모듈을 이용하여 자사앱 알림톡 자동/수기발송 로직 개발",
			url: "#",
			skills:"[사용기술] JexFameWork, jsp, html, css, postgreSQL, iframe, batch "
		},
		{
			title: "신규 결제기능 개발",
			desc: "빠른결제/식권(법인)결제/메인UI개선/앱 고도화",
			url: "#",
			skills:"[사용기술] JexFameWork, jsp, html, css, postgreSQL, API(http)"
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

export const workExp = {
	pageTit: emoji("경력기술서📝"),
	work:[
		{title:emoji("✔ 이력"), 
		lists:{ subTit: ""
		, text: "2013(입학) ~ 2017(졸업)    : 동덕여자대학교 컴퓨터학과\n2019.12 ~ 2020.06          : 비트캠프 (신촌) 웹개발자 풀스택 과정 수료\n2020.10 ~                  : 웹케시 (비플제로페이 - 제로페이개발부)"
		}},
		{title:emoji("✔ 자격사항"), 
		lists:{ subTit: ""
		, text: "2016        : 정보처리기사\n2021        : sqld"
		}},
		{title:emoji("✔ 소개"), 
		lists:{ subTit: "", text: " 안녕하세요. 핀테크 개발자로 재직 중인 주니어 개발자 장채은입니다.\n\n  학부에서 배웠던 웹개발 지식이 부족하다고 느껴 국비 교육에 참여하여 SpringBoot기반의 웹 프로젝트를 경험하였습니다. 4명이 팀을 이뤄  oracle 데이터베이스, java, springBoot, security jQuery, javascript, python 크롤링 등을 이용하여 이미지 게시판/글 및 다중 리댓글 게시판/투표/채팅 등의 기능을 포함한 아이돌 팬 커뮤니티 웹사이트를 개발하였습니다. 협업은 git을 이용하였습니다. 이 중 부트스트랩 적용과 카테고리 선택 및 다중 리댓글이 가능한 게시판 개발을 담당했습니다. 게시판은 RestfulAPI로 카테고리 선택이 가능하였으며, 파일 작성기능은  Summernote 에디터를 적용하였고 파일 업로드기능 적용 및 스프링 시큐리티를 적용하여 작성자만 수정/삭제가 가능하도록 개발하였습니다.\n\n  이를 기반으로 웹케시그룹에 입사하여 3개월의 인턴기간 포함 약 1년 8개월간 웹케시그룹의 비즈플레이 소속으로 비플제로페이 앱의 서버/웹뷰 개발자로 재직중입니다. 같은 웹개발팀 내에서는 svn을 이용하여 협업을 하고 있습니다. 새로운 기능 추가시 주로 신규화면 및 기존화면 수정을 담당하고 있습니다. 백단에서 받아온 목데이터를 이용하여 케이스별 화면 분기처리, 케이스별 프로세스 로직 적용을 주로 개발하였습니다. 또한 외부 서버와 API통신, 외부와의 정산대사/파일송수신, 네이티브와의 데이터 송수신 구조 등을 실무에서 적용해보며 작업하고 있습니다. 뿐만아니라, 핀테크 특성상 정산 대사 관련 파일 송수신 및 타부서와의 소통도 다양하게 경험하였습니다. 주기적으로, 한정적으로 판매하는 상품권 판매일마다 실시간으로 4대의 서버를 모니터링 하였으며, TPS 상승으로 인한 망취소, 서버장애에 대응하였습니다. 또한 입사 당시 100만이었던 회원수가 누적회원수 약 400만이 되는 과정을 함께 만들며 운영해가고 있습니다.\n\n  실무에서 svn을 사용하고있어서, 개인 공부에는 git을 이용하여 학습하고있습니다. 프론트엔드 개발자로 성장을 꿈꾸지만 실무에서는 jQuery를 주로 사용하고있어 리액트에 관심을 가지고 공부하고있습니다. 포트폴리오를 리액트 템플릿을 가져와 구조를 변형하여 실습해보았습니다.\n\n  신기술을 배우고, 업무에 효율적으로 활용하기 위하여 훌륭한 선임 개발자님들과 함께 일하며 배울 수 있는 개발 업무환경을 꿈꾸고 있습니다."},
		},
		{title:emoji("✔ 직무경험-1"), 
		lists:{ subTit: "운영중인 앱 어드민 페이지", text: " -일별집계 정산정보 확인(주문원장/출금/회원정보 등 3개테이블 JOIN)\n\n-마케팅 알림 발송 대상자 추출\n	; 회원(row 수 약 400만), 거래내역(row 수 약 1600만), 상품권원장, 출금내역 테이블 등 다이나믹 쿼리 이용\n\n-(카카오톡 알림톡 모듈 설치) 알림톡 발송 자동화"},
		},
		{title:emoji("✔ 직무경험-2"), 
		lists:{ subTit: "배치 프로그램", text: " -일별 배치로 들어오는 파일 내의 일 가맹점명으로 업종 재분류 배치(금결원 통신)\n\n-휴면대상 회원 sms/알림톡 발송 배치\n\n-정산 (일별배치-직불정산/상품권 구매내역 정산) ; 정산파일 송수신 유지운영"},
		},
		{title:emoji("✔ 직무경험-3"), 
		lists:{ subTit: "b2c 핀테크 앱(웹-앱통신) 신규기능 개발", text: " -식권제로페이 함께결제 기능개발 (FE/DB)\n	; 컬럼값에 따른 페이지분기 로직 / 기업제로페이 전문통신 / qr스캔화면-앱액션(native)호출(native단과의 api통신)\n	; 혼자결제,함께결제,일반결제 상태값에 따른 페이지 분기처리(상태값 : 외부서버에서 전문통하여 데이터 수신)\n\n -알림톡 발송 (신규가입/국민지원금 대량발송)\n	; 전회원대상 300만건 알림톡 대량발송 시스템/신규가입 프로세스에 추가/외부 API제공용으로 공통 PROC 생성 / 어드민페이지에 템플릿별 발송기능 추가\n\n-앱 메인화면 메뉴탭 수정개발(native연계) ; 메인 노출 메뉴 회원상태별로 분기처리하여 띄움\n\n-가맹점 서비스 기능개발\n	; 가맹점주 인증 프로세스 개발 (case별 분기처리/API통신)\n\n-빠른결제 기능개발\n	; 결제프로세스 단축 기능 (해당기능 ON 설정시 거래승인번호 입력절차 생략)\n		-->db에서 상태값 조회 / 해당 거래건 조건에 따라 사전*사후검증 로직 / 검증결과 세션에 저장 / case에 맞는 네이티브 화면 호출"},
		},
		{title:emoji("✔ 직무경험-4"), 
		lists:{ subTit: "b2c 핀테크앱 운영", text: " -정산 운영\n\n-상품권(서울사랑상품권/지역사랑상품권/수산대전 및 정부지원금 관련 사업) 오픈시 서버 과부하 상황 모니터링\n	    ;서버 지연시간 체크 및 망취소 모니터링하여 트레이서 조절 협의\n\n-대외계 파일 송수신 관련 운영 (sftp)\n\n-타사 오픈뱅킹 서비스 이용 -> 자체 펌뱅킹(중계방식)/오픈뱅킹 전환\n	    ;카카오뱅크 체크페이 오픈뱅킹서비스 이용-> 카카오뱅크 중계전환\n\n-하이브리드(오픈뱅킹+펌) 도입\n\n-푸시대상자 및 마케팅 데이터 추출업무 (sql)"},
		},
	],
	view: true
};