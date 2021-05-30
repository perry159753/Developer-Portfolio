/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Parth Shah",
  title: "Hi all, I'm Parth",
  subTitle: emoji(
    "I am a self-driven and passionate individual. Being a continuous learner, I am always ready to learn new skills and make a positive contribution to the company. I try to set up as a leader whenever possible, as it helps me to develop skills in communication, delegation, and managing multiple tasks and deadlines. I always take software engineering practices and principles into consideration while developing the product and make sure that the product satisfies all the requirements of the client."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1CmuVEVjIDt4mVWGm3BFNYqrLTbePPy7O/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/perry159753",
  linkedin: "https://www.linkedin.com/in/parth-shah-58a92550/",
  gmail: "parthvipulshah@gmail.com",
  facebook: "https://www.facebook.com/parthvipulshah",
  instagram: "https://www.instagram.com/_parth_here/",
  twitter: "https://twitter.com/pragmatic_shah",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CURIOUS PROGRAMMER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dwarkadas J. Sanghvi College of Engineering, Viple Parle, Mumbai",
      logo: require("./assets/images/djsce_logo.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2018 - June 2021",
      desc: "CGPA: 9.66/10",
      descBullets: [
        "Learned various CS fundamental subjects such as Data Structures/Algorithms, OOPM, Java, Python, Computer Networks, ML",
        "Participated in various Hackathons, Coding contests and activities"
      ]
    },
    {
      schoolName: "Vivekanand Education Society's Polytechnic, Chembur, Mumbai",
      logo: require("./assets/images/vesp_logo.png"),
      subHeader: "Diploma, Computer Science",
      duration: "August 2015 - June 2018",
      desc: "Percentage: 91.13%",
      descBullets: [
        "Achieved Academic Excellence Certificates",
        "Won 1st Prize for Most Innovative Project",
        "Bagged 3rd Prize in State Level Technical Quiz Competition"
      ]
    },
    {
      schoolName: "Sheth Virchand Dhanji Devshi English Medium School, Ghatkopar, Mumbai",
      logo: require("./assets/images/svdd_logo.jpg"),
      subHeader: "SSC",
      duration: "June 2002 - June 2015",
      desc: "Percentage: 92.20%",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Web Developer Intern",
      company: "ScrapShut",
      companylogo: require("./assets/images/scrapshut_logo.png"),
      date: "June 2019 – July 2019",
      desc:
        "Developed a website as an internship task to provide genuineness check of news and articles over web using Machine Learning. Used Django and AngularJS for backend and frontend respectively.",
      descBullets: [
        "Developed modules for uploading articles, like/dislike and comment options.",
        "Articles were scrapped using BeautifulSoup, were given as input to CNN for classification.",
        "Results of classification were mapped with articles.",
        "Praised by Engineering Manager(EM), Chief Training Officer(CTO), HR and Stakeholders."
      ],
    },
    {
      role: "Sales and Marketing Intern",
      company: "Sound Solutions",
      companylogo: require("./assets/images/soundsolutions_logo.png"),
      date: "May 2017 – June 2017",
      desc:
        "Worked as a part of Sales and Marketing Team.",
      descBullets: [
        "Handled clients all over Mumbai.",
        "Extended services to the team by pitching new clients and retaining the existing clients.",
        "Understood business patterns and accordingly developed marketing strategies",
        "Appreciated by Manager."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      //image: require("./assets/images/"),
      projectName: "",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/"),
      projectName: "",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Publications and more....",

  achievementsCards: [
    {
      title: "IIT Bombay Certified C Programmer",
      subtitle:
        "Cleared the test after completing the training",
      image: require("./assets/images/iitb_logo.jpg"),
      footerLink: [
        {
          name: "Certificate for Completion of C Training",
          url:
            "https://drive.google.com/file/d/1s5PembULb81eVggpOekr9Sfpa_h7P_LB/view?usp=sharing"
        }
      ]
    },

    {
      title: "SunTec Xelsior 2020 Challenge (Global Rank: 364)",
      subtitle:
        "Participated in Xelsior 2020 - Freshers (2020/2019 Batch) Contest organized by TechGig",
      image: require("./assets/images/suntec_logo.jpg"),
      footerLink: [
        {
          name: "Certificate of Excellence",
          url:
            "https://drive.google.com/file/d/185aMcJIgY49iCvhRbD1zzYXjjel5Pwns/view?usp=sharing"
        }
      ]
    },

    {
      title: "MAAT Certified by TCS-ion",
      subtitle: "Successfully completed MANAC's Aptitude Assessment Test organized by TCS-ion",
      image: require("./assets/images/tcsion_logo.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/17SODhRM6QBsfj1UiqGzE_4r7YbUMTu9w/view?usp=sharing"
        }
      ]
    },

    {
      title: "Project Completion with Larsen and Tubro Institute of Technology",
      subtitle: "Developed IOT based Smart Security System under the guidance of industrial experts of LTI and academic experts of LTIT.",
      image: require("./assets/images/ltit_logo.jpg"),
      footerLink: [
        {
          name: "Certificate of Project Completion",
          url: ""
        }
      ]
    },

    {
      title: "Published Paper in IEEE Xplore",
      subtitle: "Published paper – Deep Learning model-based Multimedia Forgery Detection in IEEE Xplore and presented the paper at 4th International Conference on I-SMAC 2020 (Scopus Indexed).",
      image: require("./assets/images/ieee_logo.png"),
      footerLink: [
        {
          name: "Certificate of Presentation",
          url: "https://drive.google.com/file/d/1QS_KgTC6DhOR-FviRaqbEJIxS8JJMcIV/view?usp=sharing"
        },
        {
          name: "See Publication",
          url: "https://ieeexplore.ieee.org/document/9243530"
        }
      ]
    },

    {
      title: "Published Paper in IJRASET",
      subtitle: "Published paper – Multifaceted Reminder in International Journal for Research in Applied Science & Engineering Technology.",
      image: require("./assets/images/ijraset_logo.jpg"),
      footerLink: [
        {
          name: "Certificate of Presentation",
          url: "https://drive.google.com/file/d/1ZrQ4zxdDj7GLfMGGbcQXQ7VvuJf387VE/view?usp=sharing"
        },
        {
          name: "See Publication",
          url: "https://www.ijraset.com/fileserve.php?FID=31913"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8108256254",
  email_address: "parthvipulshah@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "pragmatic_shah", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
