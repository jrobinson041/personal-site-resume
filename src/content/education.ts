const education = {
  university: {
    name: "State University of New York at Geneseo",
    graduated: "May 2018",
  },
  degrees: [
    {
      type: "Bachelor of Arts",
      area: "Physics",
      gpa: 3.73,
    },
    {
      type: "Bachelor of Arts",
      area: "Mathematics",
      gpa: 3.97,
    },
  ],
  tags: [
    "Overall GPA 3.76",
    "Magna Cum Laude",
    "Dean's List",
    "Physics Club President",
    "Sigma Pi Sigma Honor Society",
  ],
} as const;

export type TEducationContent = typeof education;

export default education;
