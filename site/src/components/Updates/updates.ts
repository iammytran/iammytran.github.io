// update types
export type UpdateTag = "award" | "paper" | "milestone";

export type Link = {
  text: string;
  url: string;
};

export type Update = {
  text: string;
  month: string;
  year: number;
  tags: UpdateTag[];
  links?: Link[];
};

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const updates: Update[] = [
  {
    text: "Started my internship at Microsoft Research. I'm excited to be working with the Productivity + Intelligence Group!",
    month: "Jun",
    year: 2021,
    tags: ["milestone"],
    links: [
      {
        text: "Productivity + Intelligence Group",
        url: "https://www.microsoft.com/en-us/research/group/productivity-and-intelligence/",
      },
    ],
  },
  {
    text: "I'll be speaking at the 2021 Grace Hopper Conference (GHC)! My poster on Cognitive Task Analysis for Empirical Post-hoc AI Explanations was accepted to the GHC ACM Student Research Competition.",
    month: "Jul",
    year: 2021,
    tags: ["paper"],
    links: [
      {
        text: "Cognitive Task Analysis for Empirical Post-hoc AI Explanations",
        url: "https://vghc21-anitab.ipostersessions.com/Default.aspx?s=6C-19-5A-C3-22-27-12-18-DD-0D-53-1C-21-EB-18-AF",
      },
    ],
  },
  {
    text: "I am a junior year Phi Beta Kappa Honor Society inductee!",
    month: "Aug",
    year: 2021,
    tags: ["award"],
    links: [
      {
        text: "Phi Beta Kappa Honor Society",
        url: "https://commencement.williams.edu/phi-beta-kappa-induction/",
      },
    ],
  },
  {
    text: "I'm honored to be a Runner Up for the 2022 CRA Outstanding Undergraduate Researcher Awards!",
    month: "Jan",
    year: 2022,
    tags: ["award"],
    links: [
      {
        text: "CRA Outstanding Undergraduate Researcher Awards",
        url: "https://cra.org/2022-outstanding-undergraduate-researcher-award-recipients/",
      },
    ],
  },
  {
    text: "Our ACM Queue article, Walk a Mile in Their Shoes: The Covid Pandemic Through the Lens of Four Tech Workers, is live!",
    month: "May",
    year: 2022,
    tags: ["paper"],
    links: [
      {
        text: "Walk a Mile in Their Shoes: The Covid Pandemic Through the Lens of Four Tech Workers",
        url: "https://dl.acm.org/doi/10.1145/3534860",
      },
    ],
  },
  {
    text: "Excited to start my internship at Adobe Research. I'll be working in the Media Intelligence Lab!",
    month: "May",
    year: 2022,
    tags: ["milestone"],
  },
  {
    text: "Inducted into the Sigma Xi Scientific Honor Society!",
    month: "May",
    year: 2022,
    tags: ["award"],
    links: [
      {
        text: "Sigma Xi Scientific Honor Society",
        url: "https://commencement.williams.edu/sigma-xi-induction/",
      },
    ],
  },
  {
    text: "Successfully defended my undergraduate thesis and graduated from Williams College!",
    month: "Jun",
    year: 2022,
    tags: ["milestone"],
    links: [
      {
        text: "undergraduate thesis",
        url: "https://unbound.williams.edu/theses/islandora/object/studenttheses%3A1960",
      },
    ],
  },
  {
    text: "Started my Ph.D. at Harvard!",
    month: "Aug",
    year: 2022,
    tags: ["milestone"],
  },
  {
    text: "Walk a Mile in Their Shoes was published in Communications of the ACM!",
    month: "Sep",
    year: 2022,
    tags: ["paper"],
    links: [
      {
        text: "Walk a Mile in Their Shoes",
        url: "https://dl.acm.org/doi/10.1145/3561989",
      },
    ],
  },
  {
    text: "Our workshop paper, Envisioning the Next-Gen Document Reader, was accepted to AAAI 2023!",
    month: "Dec",
    year: 2022,
    tags: ["paper"],
    links: [
      {
        text: "Envisioning the Next-Gen Document Reader",
        url: "https://arxiv.org/abs/2302.07492",
      },
    ],
  },
  {
    text: "Designing for Student Understanding of Learning Analytics Algorithms was accepted as a full paper to AIED 2023!",
    month: "Apr",
    year: 2023,
    tags: ["paper"],
    links: [
      {
        text: "Designing for Student Understanding of Learning Analytics Algorithms",
        url: "https://link.springer.com/chapter/10.1007/978-3-031-36272-9_43",
      },
    ],
  },
  {
    text: "Started my internship at Microsoft Research. I'm excited to be back and working with the Human Understanding and Empathy (HUE) Group!",
    month: "May",
    year: 2023,
    tags: ["milestone"],
    links: [
      {
        text: "Human Understanding and Empathy (HUE) Group",
        url: "https://www.microsoft.com/en-us/research/group/human-understanding-and-empathy/",
      },
    ],
  },
  {
    text: "Excited to share that AttentionViz: A Global View of Transformer Attention was accepted to VIS 2023!",
    month: "Jul",
    year: 2023,
    tags: ["paper"],
    links: [
      {
        text: "AttentionViz: A Global View of Transformer Attention",
        url: "https://ieeexplore.ieee.org/document/10297591",
      },
    ],
  },
  {
    text: "Honored to receive a 2024 NSF Graduate Research Fellowship!",
    month: "Apr",
    year: 2024,
    tags: ["award"],
    links: [
      {
        text: "NSF Graduate Research Fellowship",
        url: "https://www.nsfgrfp.org/",
      },
    ],
  },
  {
    text: "I'm honored to be a 2024 Kempner Institute Graduate Fellowship recipient!",
    month: "May",
    year: 2024,
    tags: ["award"],
    links: [
      {
        text: "Kempner Institute Graduate Fellowship",
        url: "https://kempnerinstitute.harvard.edu/news/kempner-institute-announces-recipients-of-2024-graduate-fellowships/",
      },
    ],
  },
  {
    text: "Excited to start my internship at Apple Research with the AI/ML Visualization Team!",
    month: "May",
    year: 2024,
    tags: ["milestone"],
  },
  {
    text: "Passed my quals — officially a Ph.D. candidate now!",
    month: "May",
    year: 2024,
    tags: ["milestone"],
  },
];

// sort updates by date
updates.sort((a, b) => {
  if (a.year === b.year) {
    // use months array to sort by month
    return months.indexOf(b.month) - months.indexOf(a.month);
  }
  return b.year - a.year;
});
export const allUpdates = updates;
