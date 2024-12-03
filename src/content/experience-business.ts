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

export const businessExperience: TExperienceItem[] = [
  {
    title: "Senior Software Engineer, Tech Lead",
    company: "Canoo",
    location: "Torrance, CA",
    start: "Jun. 2022",
    end: "Present",
    notes: [
      "Engineered Generative AI vehicle-connected web applications for clients such as Walmart and USPS, extending our physical product offering with a subscription software (SaaS) model.",
      "Architected and delivered an immersive 3D virtual showroom; a highly effective marketing tool for customers to explore our offerings, enhancing customer engagement and product visibility.",
      // "Led development of an Augmented Reality experience and demonstrated at Google Next 2023. Virtual Reality goggles allowed users to explore a real Canoo vehicle, resulting in increased brand visibility and customer interaction.",
      "Served as Technical Lead on a mobile app successfully delivered to the US Military which facilitated the trial of our product, expanding interest and adaptation into a new market.",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    company: "P.C. Richard & Son",
    location: "Farmingdale, NY",
    start: "Feb. 2019",
    end: "Jun. 2022",
    notes: [
      // "Learned React and backend language RPG, then developed company's first full-stack React application within one month.",
      "Developed our business-critical secure mobile payment system during COVID-19, enabling rapid company recovery; rehired >1000 furloughed sales personnel within days, and generated additional revenue of $65 million from March through July 2020.",
      "Created a software framework to build suites of custom internal tools, revolutionizing how internal business is done.",
      // "Acted as a business analyst investigating inefficiencies, organized interdepartmental meetings to identify pain points, then built out internal software tools to streamline operations.",
      "Organized interdepartmental meetings to identify inefficiencies; Identified a wholesale quoting inefficiency in the use of bloated spreadsheets, then built custom intelligent quoting software reducing this process from weeks to hours.",
    ],
  },
  {
    title: "President",
    company: "Long Island Systems User Group",
    location: "Westbury, NY",
    start: "Apr. 2019",
    end: "Jun. 2022",
    notes: [
      "Led a 13-person board, hosting industry speakers on IBM topics, networking and sharing throughout the community.",
      "Delivered technical and non-technical presentations to audiences of 30-50.",
    ],
  },
  {
    title: "Founder, Chief Technology Officer",
    company: "ArkAngel",
    location: "Rochester, NY",
    start: "Sep. 2017",
    end: "May. 2019",
    notes: [
      "Founded a startup through SUNY Geneseo's VentureWorks program aimed at providing a hazardous material management system.",
      "Implemented lean startup principles with a focus on exploring customer segments and building around a pain point.",
      "Regional finalist for the New York Business Plan Competition in 2018, then secured a grant through the National Science Foundation.",
      // "Secured a grant from the National Science Foundation through the iCorps accelerator program.",
    ],
  },
];

export default businessExperience;
