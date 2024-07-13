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

const experience: TExperienceItem[] = [
  {
    title: "Senior Front-End Software Engineer",
    company: "Canoo",
    location: "Torrance, CA",
    start: "Jun. 2022",
    end: "Present",
    notes: [
      "Utilizing React and NextJS to engineer vehicle-connected web applications while managing complex continuous data streams through both AWS and Google Cloud backend stacks",
      "Engineered and successfully delivered to the public an immersive 3D virtual showroom; a world for customers to explore our offerings. Leveraged WebGL, ThreeJS, and React",
      "Designed and built an Augmented Reality experience, then led its demo at the Google Next 2023 conference. Virtual Reality goggles with passthrough allowed users to explore and sit in a real Canoo vehicle, with virtual overlays and CTAs to learn more about the vehicle",
      "Technical Lead on a proof-of-concept Progressive Web App. Successfully delivered a mobile app to the US Military to assist in testing our physical products. Continuously integrating feature requests after mobile app exceeded expectations",
    ],
    demos: [
      { title: "3D Showroom", url: "https://www.canoo.com/showroom" },
      { title: "2D Site", url: "https://www.canoo.com" },
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    company: "P.C. Richard & Son",
    location: "Farmingdale, NY",
    start: "Feb. 2019",
    end: "Jun. 2022",
    notes: [
      "Learned React and backend language RPG, then engineered our first full-stack React application within one month of employment",
      "Led initiative to utilize React for core development in our department",
      "Conceptualized, designed, and led a full-stack React framework/portal revolutionizing how internal business is done. Implemented continuous delivery using Git and Jenkins, bringing our React app life cycle down from months to days",
      "Developed our business-critical secure mobile payment system during COVID-19, allowing our company to remain operational, rehire thousands of furloughed sales personnel within days, and generate additional revenue of $65 million from March through July 2020",
    ],
  },
  {
    title: "President",
    company: "Long Island Systems User Group",
    location: "Westbury, NY",
    start: "Apr. 2019",
    end: "Jun. 2022",
    notes: [
      "Coordinated monthly meetings, hosting industry speakers discussing a range of IBM topics",
      "Presented as a speaker on both technical and non-technical topics",
      "Led a 13 person board and delegated tasks to keep each meeting running smoothly",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company: "SUNY Geneseo",
    location: "Geneseo, NY",
    start: "Sep. 2017",
    end: "Jan. 2019",
    notes: [
      "Designed, engineered, and deployed a PHP web app allowing for the management and registration of courses, while tracking student progress",
      "Architected a new database and migrated data from old schema using SQL",
    ],
  },
];

export default experience;

export const abbreviatedExperience: TExperienceItem[] = [
  {
    title: "Senior Front-End Software Engineer",
    company: "Canoo",
    location: "Torrance, CA",
    start: "Jun. 2022",
    end: "Present",
    notes: [
      "Utilizing React and NextJS to engineer vehicle-connected web applications while managing complex continuous data streams through both AWS and Google Cloud backend stacks",
      "Engineered and successfully delivered to the public an immersive 3D virtual showroom; a world for customers to explore our offerings. Leveraged WebGL, ThreeJS, and React",
      "Designed and built an Augmented Reality experience, then led its demo at the Google Next 2023 conference. Virtual Reality goggles allowed users to explore and sit in a real Canoo vehicle, with virtual overlays and CTAs to learn more about the vehicle",
      "Technical Lead on a proof-of-concept Progressive Web App. Successfully delivered a mobile app to the US Military to assist in testing our physical products. Continuously integrating feature requests after mobile app exceeded expectations",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    company: "P.C. Richard & Son",
    location: "Farmingdale, NY",
    start: "Feb. 2019",
    end: "Jun. 2022",
    notes: [
      "Learned React and backend language RPG, then engineered our first full-stack React application within one month of employment",
      "Conceptualized, designed, and led a full-stack React framework/portal revolutionizing how internal business is done. Implemented continuous delivery using Git and Jenkins, bringing our React app life cycle down from months to days",
      "Developed our business-critical secure mobile payment system during COVID-19, allowing our company to remain operational, rehire thousands of furloughed sales personnel within days, and generate additional revenue of $65 million from March through July 2020",
    ],
  },
  {
    title: "President",
    company: "Long Island Systems User Group",
    location: "Westbury, NY",
    start: "Apr. 2019",
    end: "Jun. 2022",
    notes: [
      "Led 13 person board and coordinated monthly meetings, hosting industry speakers discussing a range of IBM topics",
      "Presented as a speaker on both technical and non-technical topics to audiences of 30-50 people",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company: "SUNY Geneseo",
    location: "Geneseo, NY",
    start: "Sep. 2017",
    end: "Jan. 2019",
    notes: [
      "Independently designed, engineered, and deployed a PHP web app course management system for admin and students",
      "Architected a new database and migrated data from old schema using SQL",
    ],
  },
];
