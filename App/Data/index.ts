// tslint:disable:max-line-length

interface ISlot {
  kind: "break" | "talk";
}

export interface IBreak extends ISlot {
  title: string;
  time: string;
  link?: string;
}

export interface ISpeaker {
  name: string;
  twitter: string;
  github: string;
  avatar: string;
  bio: string;
  summary: string;
  website: string;
}

export interface ITalkData extends ISlot {
  time: string;
  title: string;
  room: string;
  keynote: boolean;
  summary: string;
  speaker: ISpeaker;
}

export const data = {
  Registration: {
    kind: "break",
    time: "08:20",
    title: "Registration",
  },
  Welcome: {
    kind: "break",
    time: "08:50",
    title: "Welcome and house keeping",
  },
  tathamoddie: {
    kind: "talk",
    time: "09:00",
    title: "Ready for Next",
    room: "Red",
    keynote: true,
    summary: "This year, we celebrate 10 years of the iPhone: a device that remodelled awkward business PDAs into pervasive internet access. For a significant portion of society, they're now embedded into everything we do. I struggle to buy a coffee now if my phone is flat, and no coffee = no function. In this talk, we'll explore what the next wave of technology upsets might be, and what skills we'll need to level up at to stay on the front of that wave.",
    speaker:
      {
        name: "Tatham Oddie",
        twitter: "tathamoddie",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/538217280996249602/fMm9tbIz_400x400.jpeg",
        bio: "With experience ranging from his own small businesses, to large multi-year multi-vendor banking programs, Tatham has developed a deep understanding of the complete lifecycle of IT programs and their surrounding business drivers. He is a regular presenter at conferences and events throughout Australia, North America, and Europe. In his role as Readify's CIO, Tatham helps Readify improve its own processes, as well as those of our customers.",
        summary: "Readify Head of Software Dev & CIO",
        website: "tath.am/",
      },
  },
  hadi_es: {
    kind: "talk",
    time: "10:10",
    title: "Microservices UI Composition",
    summary: "There's a lot of buzz around designing your Microservices on the backend, but surprisingly there's very little content on how things should be done on the frontend. This talk is about challenges you face when creating a UI for your Microservices and need to ensure service boundaries are respected while the code is still maintainable.",
    room: "Green",
    audience: "The example shown in this talk leverage ASP.NET Core and Google Polymer. Understanding of web and Microservices is helpful.",
    speaker: {
        name: "Hadi Eskandari",
        twitter: "hadi_es",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/824725887992156161/pC3bqJnY_400x400.jpg",
        email: "h.eskandari@gmail.com",
        bio: "Hadi is a Software Engineer at Particular Software, creators of NServiceBus.",
        summary: "Solution Architect at Particular.",
        website: "www.seesharpsoftware.com.au/",
      },
  },
  azadehkhojandi: {
    kind: "talk",
    time: "10:10",
    title: "Chatbots explained",
    summary: "Apps are dying, and bots are taking over. It is clear to everyone that interacting with a bot in messaging apps is way more convenient than downloading a new app.",
    room: "Blue",
    recommendedAudience: "intermediate level, Familiar with using rest APIs",
    speaker: {
        name: "Azadeh Khojandi",
        twitter: "azadehkhojandi",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/764455063892791299/D3h9i0qI_400x400.jpg",
        email: "azadeh.khojandi@microsoft.com",
        bio: "Microsoft Technical Evangelist and Sitecore MVP with more than 10 years experience across a range of diverse and exciting web and mobile solutions. Az is co-organiser of girls geek dinner and sydney sitecore user group. She recently started Girls .Net user group. Az has worked with clients including Vodafone, KFC Australia, Sydney Airport, Lend Lease, Sydney Olympic Park.",
        summary: "Tech evangelist @ Microsoft",
        website: "azadehkhojandi.blogspot.com/",
      },
  },
  meligy: {
    kind: "talk",
    time: "10:10",
    title: "TypeScript 2.3, The What, The Why, And The How!",
    summary: "Have you started working with TypeScript 2.x yet? Have you started working with TypeScript at all?",
    room: "Red",
    recommendedAudience: "Intermediate JavaScript Developers",
    speaker: {
        name: "Meligy",
        twitter: "meligy",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/378800000081085863/61de04e45a160bab484e97d3d714371c_400x400.jpeg",
        email: "eng.meligy@gmail.com",
        bio: "Meligy is a consultant and mentor in the web space. He is mostly focused on helping developers using Angular with .NET.",
        summary: "Senior Consultant for Readify",
        website: "www.gurustop.net",
      },
  },
  morningTea: {
    kind: "break",
    time: "11:00",
    title: "Break",
  },
  dizhang: {
    kind: "talk",
    time: "11:20",
    title: "Resilience in micro-service world - Mad Max style",
    summary: "How do we define 'service resilience' in a micro-service oriented architecture? ",
    room: "Green",
    recommendedAudience: "medium",
    speaker: {
        name: "John Di Zhang",
        twitter: "dizhang",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/80030864/head_400x400.JPG",
        email: "zhangdijohn@gmail.com",
        bio: "Senior Software Developer at Domain",
        summary: "",
        website: "medium.com/@zhangdijohn",
      },
  },
  dominikran: {
    kind: "talk",
    time: "11:20",
    title: "Solving real life problems with machine learning",
    summary: "Have you ever thought about machine learning but didn't know where to start? This session is about how to take something from your day to day life and turn it into a machine learning problem.",
    room: "Blue",
    recommendedAudience: "machine learning, software developers",
    speaker: {
        name: "Dom Raniszewski",
        twitter: "dominikran",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/573319036399833088/EBB_DWJP_400x400.jpeg",
        email: "dominik.raniszewski@outlook.com",
        bio: "Lead Consultant @ Readify",
        summary: "Lead Consultant @ Readify",
        website: "devblog.xyz/",
      },
  },
  hossambarakat_: {
    kind: "talk",
    time: "11:20",
    title: "Serverless with Azure Functions",
    summary: "Over the last decade, we have seen many technology trends from monolithic applications to microservices and recently the rise of serverless event driven functions.",
    room: "Red",
    recommendedAudience: "This session level is 200, no prerequisite knowledge requiRed",
    speaker: [
      {
        name: "Hossam Barakat",
        twitter: " hossambarakat_",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/731626626396520448/TDFYZwmH_400x400.jpg",
        email: "hossam.eldeen@gmail.com",
        bio: "Software consultant interested in web development, application architecture, microservices, serverless architecture and agile methodologies.",
        summary: "Software Consultant @ Readify",
        website: "",
      },
    ],
  },
  lunch: {
    kind: "break",
    time: "12:10",
    title: "Lunch",
  },
  jstangroome: {
    kind: "talk",
    time: "13:10",
    title: "How Docker improved the way we build and ship software",
    summary: "I have always pushed for parity between the Production and Development environments, and the environments in between, to provide confidence in deploying new software and to Reduce cycle times.",
    room: "Green",
    recommendedAudience: "Developers who care about their code running correctly in Production",
    speaker: {
        name: "Jason Stangroome",
        twitter: "jstangroome",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/720205587078746112/ZMW7TJQo_400x400.jpg",
        email: "jason@section.io",
        bio: "Jason was a developer, sysadmin and Continuous Delivery advocate on the Windows platform for 15 years but switched to the Linux platform in 2014 where he now focuses on security and Site Reliability Engineering.",
        summary: "Principal Engineer, VP of Information Security, section.io",
        website: "blog.stangroome.com",
      },
  },
  thenickrandolph: {
    kind: "talk",
    time: "13:10",
    title: "A Developer's Guide to Fluent Design",
    summary: "The Windows platform is welcoming in a new era of innovation as it takes on a new design philosophy. Fluent Design is based on the building blocks of Light, Depth, Motion, Material and Scale, and with it applications built for the Windows platform will appear richer and more intuitive to use than ever before.",
    room: "Blue",
    recommendedAudience: "This is an overview session covering the fundamentals of Fluent Design as it applies to the UWP platform. Prior knowledge of the UWP platform, or other XAML based technology (eg Silverlight/WPF), is useful. Samples and Demos will use a mix of XAML and C# code.",
    speaker: {
        name: "Nick Randolph",
        twitter: "thenickrandolph",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/440475945007198208/n6wnVrT2_400x400.jpeg",
        email: "nick@builttoroam.com",
        bio: "Nick currently runs Built to Roam which focuses on building rich mobile applications. Nick has been identified as a Microsoft MVP in recognition of his work and expertise with the Microsoft mobile platforms. He is still an active contributor in the device application development space via his blog at http://nicksnettravels.builttoroam.com and Visual Studio Magazine (http://visualstudiomagazine.com/Articles/List/Mobile-Corner.aspx). Nick has been invited to present at a variety of events including Tech Ed and Ignite Australia & NZ, DDD and local user groups. He has also authoRed multiple books with the latest being Professional Visual Studio 2010 and Professional Development for Windows Phone, and helped judge multiple world finals for the Imagine Cup. Nick has worked on numerous mobile applications and has helped hundReds of developers build their own mobile applications. Nick has been involved with applications for well-known brands such as Domain.com.au, ninemsn, AFL, NRL, Qantas, JB Hi-Fi, NAB, Stan and Boost Juice",
        summary: "Owner of Built To Roam",
        website: "nicksnettravels.builttoroam.com",
      },
  },
  justinchronicle: {
    kind: "talk",
    time: "13:10",
    title: "Testing, Testing, Testing! Are Serverless Applications Testable? - Azure Functions & Logic Apps",
    summary: "Testing applications is more than important nowadays. Traditionally, developers perform unit tests and/or integration tests in variety of environments. Now, we see serverless applications. How can we test those applications? That's a trick question.",
    room: "Red",
    recommendedAudience: "Developers having basic knowledge about Azure Functions and/or Logic Apps (level 300)",
    speaker: {
        name: "Justin Yoo",
        twitter: "justinchronicle",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/680501654181957632/GLc6A-JT_400x400.jpg",
        email: "justin.yoojh@gmail.com",
        bio: "Developer, Consultant, Technical Architect, Speaker, Writer & Microsoft MVP",
        summary: "Developer, Consultant, Architect, Microsoft MVP",
        website: "devkimchi.com",
      },
  },
  afternoonTea: {
    kind: "break",
    time: "15:10",
    title: "Break",
  },
  agc93: {
    kind: "talk",
    time: "14:20",
    title: "Using Docker to supercharge .NET development on Linux",
    summary: "With the release of .NET Core, the long-awaited dream of running .NET natively on Linux is finally here! Even better, .NET Core has arrived just in time for the coming container revolution!",
    room: "Green",
    recommendedAudience: "This talk will be focussing almost exclusively on developing on Linux so is perfect for .NET developers new to the platform as well as Linux gurus who may not have gotten their hands dirty with .NET Core yet.",
    speaker: {
        name: "Alistair Chapman",
        twitter: "agc93",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/744290454192144384/PA-6Bxa-_400x400.jpg",
        email: "alistair@agchapman.com",
        bio: "Alistair Chapman is an Australian InfoSec engineer, .NET developer and technical architect. While he’s currently working at Red Hat, he’s also spent years doing everything from network engineering to DevOps consulting, governance research to embedded development. Currently, his passion is security architecture, cross-platform .NET and containerisation.",
        summary: "InfoSec engineer, .NET junkie, occasional photographer and F1 fan",
        website: "blog.agchapman.com/",
      },
  },
  danijelmalik: {
    kind: "talk",
    time: "14:20",
    title: "What a modern DevOps looks like today",
    summary: "Modern DevOps is a highway to greater business value and it works cross-platform. Automated deployments solved a handover problem, Application Monitoring Platforms closed the feedback and crash reporting gap, and containers made the \"works on my machine\" stereotype real. Next mission: automated environments.",
    room: "Blue",
    recommendedAudience: "Anyone with some basic understanding of DevOps",
    speaker: {
        name: "Danjel Malik",
        twitter: "danijelmalik",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/598028698089091072/KyBcjJUL_400x400.jpg",
        email: "danijelmalik@ssw.com.au",
        bio: "Danijel is a DevOps mastermind with a broad range of technical skills and a deep desire to understand the client's business first. In his career, which includes more than 10 years of professional experience, he has built Desktop, Mobile & Web projects, many of them at the Enterprise level. With an eye on the bleeding edge technologies, he is always one step ahead and loves sharing his experience at user groups and conferences. In 2013, Danijel was awarded Microsoft MVP status for Visual Studio ALM (now Visual Studio and Development Technologies) for his contributions to the community, which he has maintained every year since.",
        summary: "Solution Architect and Microsoft MVP",
        website: "danijelmalik.com",
      },
  },
  kleeut: {
    kind: "talk",
    time: "14:20",
    title: "Automating API testing using Postman",
    summary: "Microservices / web services is not a new buzz word in software world, however the quest for testing it better is the current challenge. As this approach of building software is becoming popular, the need for broader coverage and deeper testing is extremely crucial. In this talk we will Share:",
    room: "Red",
    recommendedAudience: "Anyone interested in API development, testing and QA automation.",
    speaker: {
        name: "Klee Thomas & Anjali Wadhwa",
        twitter: " kleeut",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/420844381331935232/Tbg11m1p_400x400.jpeg",
        email: "klee.ut@gmail.com",
        bio: "Klee is a Software Developer working at nib and organiser of the Newcastle Coders Group. He's Clean Code and Craftsmanship advocate. Outside of software development fan of Martial Arts, Neftlix and spending time with his wife and cats. ",
        summary: "Software developer & Newcastle Coders Group organisers",
        website: "kleeut.com",
      },
  },
  finalBreak: {
    kind: "break",
    time: "15:10",
    title: "Change rooms, stretch legs, have a chat",
  },
  heshamamin: {
    kind: "talk",
    time: "15:20",
    title: "Avoiding death by a thousand containers. Kubernetes to the rescue!",
    summary: "So you packaged your application as a docker container and started enjoying the portability, repeatability and light-weight isolation it brings. That\'s awesome! Now you want to launch your product and scale it to hundReds or maybe thousands of containers. Only to find that it\'s much harder than \"docker start\".",
    room: "Green",
    recommendedAudience: "Basic knowledge of docker is preferable.",
    speaker: {
        name: "Hesham Amin",
        twitter: "heshamamin",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/801998196222279681/Br-TcOyT_400x400.jpg",
        email: "hspceng@gmail.com",
        bio: "Senior consultant. I'm interested in cloud computing and Agile methodologies.",
        summary: "Senior Consultant at Readify",
        website: "heshamamin.com/",
      },
  },
  glav: {
    kind: "talk",
    time: "15:20",
    title: "Computers have feelings too!",
    summary: "Well not quite, but they can detect them. This talk will explore Microsoft Cognitive Services in Azure. We'll take a look at the offerings overall, and then take a deeper look into specifics such as Sentiment analysis, Computer vision (image recognition) and Emotion detection.",
    room: "Blue",
    recommendedAudience: "azure, level 300",
    speaker: {
        name: "Paul Glavich",
        twitter: "glav",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/1337023441/image2-1_400x400.jpg",
        email: "glav@theglavs.com",
        bio: "Paul is an old nerd, ex MVP of 13 years, ASPInsider, readify principal consultant, book author, code monkey and likes long walks on the beach.",
        summary: ".Net Solution architect",
        website: "weblogs.asp.net/pglavich",
      },
  },
  jasongtau: {
    kind: "talk",
    time: "15:20",
    title: "Simplified Unit Testing with the Entity Framework Core InMemory Provider",
    summary: "In this talk, we'll look at how using the EF Core InMemory Provider will simplify your unit testing approach. We will discuss the typical approach versus the simplified approach, limitations, and other considerations. You will walk away ready to write simplified unit tests for systems that depend on EF Core.",
    room: "Red",
    recommendedAudience: "200 – knowledge of ASP.NET / EF / C#",
    speaker: {
        name: "Jason Taylor",
        twitter: "jasongtau",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/849909114633281536/btsiaJIm_400x400.jpg",
        email: "jasongt@outlook.com",
        bio: "Jason is an SSW Solution Architect and full stack developer with over 15 years professional experience. He is currently specialising in teaching and building awesome applications utilising ASP.NET Core, EF Core and Angular. Jason loves a challenge and is skilled at progressing from a proposal into a well-defined, coded, and tested solution.",
        summary: "SSW Solution Architect",
        website: "www.codingflow.net",
      },
  },
  glasnt: {
    kind: "talk",
    time: "16:20",
    title: "JavaScript is Awe-Ful",
    summary: "JavaScript is an incRedibly powerful language, and thanks to its renaissance, it now has uses that extend beyond the browser. However, being a language that's extremely accessible, with a shallow learning curve and large userbase, it's the subject of - at times - vitriolic abuse from other language communities. Yes, JavaScript was created in a very short timeframe, and there are inherent issues with some very early design decisions that can cause some grief to developers. However, as the engine that powers the web, it's able to prove it's versatility and usefulness.So why the hate? In this talk, we will discuss the history of JavaScript, it's future, and how some it's \"wat's can be avoided in everyday use in other to leverage the power of this universal language.We will also take a short tour through over a dozen other languages and some of their quirks, to prove how no language is without fault.",
    room: "Red",
    keynote: true,
    speaker: {
        name: "Katie McLaughlin",
        twitter: "glasnt",
        github: "",
        avatar: "https://pbs.twimg.com/profile_images/813478434294796288/uXM1cTPI_400x400.jpg",
        bio: "Katie has worn many different hats over the years. She has been a software developer for many languages, systems administrator for multiple operating systems, and speaker on many different topics. When she's not changing the world, she enjoys cooking, making tapestries, and yelling at JavaScript and its attempt at global variables.",
        summary: "Operations Engineer. Software Developer. FOSS Enthusiast.",
        website: "glasnt.com",
      },
  },
  giveaways: {
    kind: "break",
    time: "17:00",
    title: "Giveaways and wrap-up",
  },
  afterParty: {
    kind: "break",
    time: "18:00",
    title: "Afterparty (Location to be determined)",
    link: "http://www.thechippohotel.com.au/",
  },
};
