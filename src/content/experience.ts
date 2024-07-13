export type TExperienceItem = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  notes: string[];
  demos?: {
    title: string;
    url: string;
  }[];
};

// export const experience: TExperienceItem[] = [
//   {
//     title: "Senior Front-End Software Engineer",
//     company: "Canoo",
//     location: "Torrance, CA",
//     start: "Jun. 2022",
//     end: "Present",
//     notes: [
//       "Utilizing React and NextJS to engineer vehicle-connected web applications for customers such as Walmart and USPS while managing complex continuous data streams through both AWS and Google Cloud backend stacks",
//       "Architected, developed, and successfully delivered to the public an immersive 3D virtual showroom; a world for customers to explore our offerings. Leveraged WebGL, ThreeJS, and React",
//       "Designed and built an Augmented Reality experience, then led its demo at the Google Next 2023 conference. Virtual Reality goggles with passthrough allowed users to explore and sit in a real Canoo vehicle, with virtual overlays and CTAs to learn more about the vehicle",
//       "Technical Lead on a proof-of-concept Progressive Web App. Successfully delivered a mobile app to the US Military to assist in testing our physical products. Continuously integrating feature requests after mobile app exceeded expectations",
//     ],
//     demos: [
//       { title: "3D Showroom", url: "https://www.canoo.com/showroom" },
//       { title: "2D Site", url: "https://www.canoo.com" },
//     ],
//   },
//   {
//     title: "Full-Stack Software Engineer",
//     company: "P.C. Richard & Son",
//     location: "Farmingdale, NY",
//     start: "Feb. 2019",
//     end: "Jun. 2022",
//     notes: [
//       "Learned React and backend language RPG, then engineered our first full-stack React application within one month of employment",
//       "Led initiative to utilize React for core development in our department",
//       "Conceptualized, designed, and led a full-stack React framework/portal revolutionizing how internal business is done. Implemented continuous delivery using Git and Jenkins, bringing our React app life cycle down from months to days",
//       "Developed our business-critical secure mobile payment system during COVID-19, allowing our company to remain operational, rehire thousands of furloughed sales personnel within days, and generate additional revenue of $65 million from March through July 2020",
//     ],
//   },
//   {
//     title: "President",
//     company: "Long Island Systems User Group",
//     location: "Westbury, NY",
//     start: "Apr. 2019",
//     end: "Jun. 2022",
//     notes: [
//       "Coordinated monthly meetings, hosting industry speakers discussing a range of IBM topics",
//       "Presented as a speaker on both technical and non-technical topics",
//       "Led a 13 person board and delegated tasks to keep each meeting running smoothly",
//     ],
//   },
//   {
//     title: "Full-Stack Web Developer",
//     company: "SUNY Geneseo",
//     location: "Geneseo, NY",
//     start: "Sep. 2017",
//     end: "Jan. 2019",
//     notes: [
//       "Designed, engineered, and deployed a PHP web app allowing for the management and registration of courses, while tracking student progress",
//       "Architected a new database and migrated data from old schema using SQL",
//     ],
//   },
// ];

export const experience: TExperienceItem[] = [
  {
    title: "Senior Front-End Software Engineer",
    company: "Canoo",
    location: "Torrance, CA",
    start: "Jun. 2022",
    end: "Present",
    notes: [
      "Utilizing React and NextJS to engineer vehicle-connected web applications for clients such as Walmart and USPS, managing complex continuous data streams via AWS and Google Cloud stacks.",
      "Architected and delivered an immersive 3D virtual showroom using WebGL, ThreeJS, and React; a world for customers to explore our offerings, enhancing customer engagement and product visibility.",
      "Led development of an Augmented Reality experience and demonstrations at Google Next 2023. Virtual Reality goggles allowed users to explore a real Canoo vehicle, resulting in increased brand visibility and customer interaction.",
      "Served as Technical Lead on a Progressive Web App successfully delivered to the US Military, exceeding expectations and integrating continuous feature requests.",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    company: "P.C. Richard & Son",
    location: "Farmingdale, NY",
    start: "Feb. 2019",
    end: "Jun. 2022",
    notes: [
      "Learned React and backend language RPG, then developed company's first full-stack React application within one month.",
      "Conceptualized and led development of a full-stack React framework/portal, revolutionizing how internal business is done. Implemented continuous delivery using Git and Jenkins, reducing app life cycle from months to days.",
      "Developed our business-critical secure mobile payment system during COVID-19, enabling rapid company recovery; rehired >1000 furloughed sales personnel within days, and generated additional revenue of $65 million from March through July 2020.",
    ],
  },
  {
    title: "President",
    company: "Long Island Systems User Group",
    location: "Westbury, NY",
    start: "Apr. 2019",
    end: "Jun. 2022",
    notes: [
      "Led a 13-person board, hosting industry speakers on IBM topics, fascilitating networking and sharing within the community.",
      "Delivered technical and non-technical presentations to audiences of 30-50.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company: "SUNY Geneseo",
    location: "Geneseo, NY",
    start: "Sep. 2017",
    end: "Jan. 2019",
    notes: [
      "Designed and deployed a PHP web app course management system, enhancing administrative efficiency and student enrollment.",
      "Architected and migrated a new database, improving data management, security, and system performance using SQL.",
    ],
  },
];

export default experience;
