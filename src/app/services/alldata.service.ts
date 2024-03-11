import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {

  menu = [
    {
      "state": "/home",
      "name": "Home",
      "type": "link"
    },
    {
      "state": "/about",
      "name": "About",
      "type": "link"
    },
    {
      "state": "/project",
      "name": "Project",
      "type": "link"
    },
    {
      "state": "/experience",
      "name": "Experience",
      "type": "link"
    },
    {
      "state": "/contact",
      "name": "Contact",
      "type": "link"
    }
  ]

  getMenu() {
    return this.menu;
  }


  education = [
    { name: 'Amritsar Group of College, Amritsar', year: '2017 - 2021', course: 'Bachelor Degree', subject: 'Major Subject: Web Development, JavaScript, Data Structure, Computer Networks, Cloud Computing', marks: '7.5 SGPA' },
    { name: 'DAV Public School', year: '2015 - 2017', course: 'Intermediate', subject: 'Major Subject: Maths, Physics, Chemistry,', marks: '70%' },

    // Add more company objects as needed
  ];

  getEducation() {
    return this.education;
  }


  skill = [
    { name: 'Angular', imageUrl: 'assets/images/angular.png' },
    { name: 'React', imageUrl: 'assets/images/react.png' },
    { name: 'JavaScript', imageUrl: 'assets/images/js.webp' },
    { name: 'Jquary', imageUrl: 'assets/images/jquary.webp' },
    { name: 'Bootstrap', imageUrl: 'assets/images/boot.webp' },
    { name: 'HTML', imageUrl: 'assets/images/html.png' },
    { name: 'CSS', imageUrl: 'assets/images/csss.webp' },
    { name: 'Tailwind', imageUrl: 'assets/images/tail.webp' },
    // Add more company objects as needed
  ];

  getSkill() {
    return this.skill;
  }




  tool = [
    { name: 'Visual Studio Code', imageUrl: 'assets/images/Visual-Studio-logo.png' },
    { name: 'Visual Studio', imageUrl: 'assets/images/visual-studio.png' },
    { name: 'GitHub', imageUrl: 'assets/images/gitt.png' },
    { name: 'Eclipse', imageUrl: 'assets/images/eclipse.png' },

    // Add more company objects as needed
  ];

  getTool() {
    return this.tool;
  }



  project = [
    { name: 'Mailer', explain: 'Worked on the Anniversary Mailer using HTML & CSS' },
    { name: 'E-visiting card', explain: 'Worked on the project using HTML, CSS, Angular.' },
    { name: 'SMP Intranet', explain: 'Worked on the project using HTML & CSS' },
    { name: 'PMS 1.5', explain: 'Worked on the project using HTML, CSS, Bootstrap' },
    { name: 'Digital library', explain: 'Worked on the project using HTML, CSS & Angular.' },
    { name: 'MS ADS', explain: 'Worked on the project using HTML, CSS & Angular.' },
    { name: ' IDACS', explain: 'Worked on the project using HTML, CSS, Bootstrap & JavaScript.' },
    { name: 'MES', explain: 'Worked on the project using HTML, CSS, Bootstrap' },
    { name: ' CPS', explain: 'Worked on the project using HTML, CSS & Angular.' },
    { name: ' CCM', explain: 'Worked on the project using HTML, CSS & Angular.' },
    { name: ' CCS', explain: 'Worked on the project using HTML, CSS & Angular.' },
    { name: ' eMPro', explain: 'Worked on the project using HTML, CSS & Angular.' },
    { name: ' iSurvey', explain: 'Worked on the project using HTML, CSS & Angular.' },
    { name: ' LMS', explain: 'Worked on the project using HTML, CSS & Angular.' },
    { name: ' LTS', explain: 'Worked on the project using HTML, CSS & Angular.' },
    { name: ' ChatBot', explain: 'Worked on the chatbot using HTML, CSS & Angular.' },
    { name: ' M1', explain: 'Worked on the website update using HTML,CSS & JavaScript.' },
    { name: ' Customer Portal', explain: 'Worked on the website update as per client requirements' },
    { name: ' MATSUI', explain: 'Worked on the website update as per client requirements' },
    { name: '  SCL', explain: 'Worked on the website update as per client requirements' },
    { name: '  SMHS', explain: 'Worked on the website update as per client requirements' },


  ];

  getProject() {
    return this.project;
  }



  experience = [
    {
      name: 'Motherson Technology Services Limited',
      // currtime:'Oct 2022 - Till Now',
      // currposition:'Software Developer',
      // oldposition:'Engineer Trainee',
      // oldtime:'Oct 2021 - Oct 2022',
      positions: [
        'Software Developer',
        'Engineer Trainee',
      ],

      times: [
        'Oct 2022 - Till Now',
        'Oct 2021 - Oct 2022',
      ],

      items: [
        ' Coordinate with developers & other team members regarding the related task.',
        ' Project & Task Estimation',
        ' Translate Visual Design to HTML & CSS',
        ' Requirement gathering from client',
        ' Web & Mobile Application useability testing',
        ' Responsive Web & Mobile application designing',
        ' Support to developers and bug fixing',
        ' Web & Mobile Application development using Bootstrap Framework',
        ' Mailer Designing & Development',
        ' Front-End Development on Angular and Material framework',

      ]
    },

    {
      name: 'The Dimensions',
      // currposition:'Intern',
      // currtime:'2020',
      // oldposition:'',
      // oldtime:'',
      positions: [
        'Inter',

      ],
      times: [
        '2020',
      ],
      items: [
        ' Coordinate with developers & other team members regarding the related task.',
        ' Translate Visual Design to HTML & CSS',
        ' Requirement gathering from client',
        ' Responsive Web & Mobile application designing',
        ' Support to developers and bug fixing',
        ' Web & Mobile Application development using Bootstrap Framework',
      ]
    },

  ];

  getExperience() {
    return this.experience;
  }



  constructor() { }
}
