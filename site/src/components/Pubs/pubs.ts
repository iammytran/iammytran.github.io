// publication types
export type Tag = "vis" | "ai" | "hci" | "misc";

export type Pub = {
  title: string;
  author: string;
  venue: string;
  year: number;
  image: string;
  tags: Tag[];
  summary?: string;
  paper?: string;
  paper2?: string;
  demo?: string;
  code?: string;
  project?: string;
  video?: string;
  poster?: string;
};

// import images from dir
import emptyspaces from "../../images/pubs/empty-spaces.png";
import dashboard from "../../images/pubs/dashboard.png";
import ghostwriter from "../../images/pubs/ghostwriter.png";
import attnViz from "../../images/pubs/attn-viz.png";
import covidTech from "../../images/pubs/covid-tech.png";
import documentReader from "../../images/pubs/document-reader.png";
import aied from "../../images/pubs/aied.png";

const pubs: Pub[] = [
  {
    title: "Exploring Empty Spaces: Human-in-the-Loop Data Augmentation",
    author:
      "Catherine Yeh, Donghao Ren, Yannick Assogba, Dominik Moritz, Fred Hohman",
    venue: "Preprint",
    image: emptyspaces,
    summary:
      "We introduce Amplio, a human-in-the-loop data augmentation tool for increasing data diversity in unstructured text datasets.",
    paper: "https://arxiv.org/abs/2410.01088",
    year: 2024,
    tags: ["vis", "ai", "hci"],
  },
  {
    title:
      "Designing a Dashboard for Transparency and Control of Conversational AI",
    author:
      "Yida Chen, Aoyu Wu, Trevor DePodesta, Catherine Yeh, Kenneth Li, Nicholas Castillo Marin, Oam Patel, Jan Riecke, Shivam Raval, Olivia Seow, Martin Wattenberg, Fernanda Viégas",
    venue: "Preprint",
    image: dashboard,
    summary:
      'We show evidence that conversational language models develop internal models of their users and design a dashboard to provide transparency and control over these "user models."',
    paper: "https://arxiv.org/abs/2406.07882",
    code: "https://github.com/yc015/TalkTuner-chatbot-llm-dashboard/",
    project:
      "https://yc015.github.io/TalkTuner-a-dashboard-ui-for-chatbot-llm/",
    video:
      "https://drive.google.com/file/d/1WB_w8yoDugg35BMG0GFFnpY1pa5npSbw/view?usp=sharing",
    year: 2024,
    tags: ["hci", "ai"],
  },
  {
    title:
      "GhostWriter: Augmenting Collaborative Human-AI Writing Experiences Through Personalization and Agency",
    author:
      "Catherine Yeh, Gonzalo Ramos, Rachel Ng, Andy Huntington, Richard Banks",
    venue: "Preprint",
    image: ghostwriter,
    summary:
      "We introduce GhostWriter, an AI-powered writing assistant that creates personalized content through implicit and explicit user feedback.",
    paper: "https://arxiv.org/abs/2402.08855",
    year: 2024,
    tags: ["hci", "ai"],
  },
  {
    title: "AttentionViz: A Global View of Transformer Attention",
    author:
      "Catherine Yeh, Yida Chen, Aoyu Wu, Cynthia Chen, Fernanda Viégas, Martin Wattenberg",
    venue: "VIS",
    image: attnViz,
    summary:
      "We design a new technique to visualize self-attention patterns in transformer models using joint query-key embeddings.",
    paper: "https://ieeexplore.ieee.org/document/10297591",
    demo: "http://attentionviz.com/",
    code: "https://github.com/catherinesyeh/attention-viz",
    project: "https://catherinesyeh.github.io/attn-docs/",
    video: "https://www.youtube.com/watch?v=YBxRfWTFb3U",
    year: 2023,
    tags: ["vis", "ai"],
  },
  {
    title:
      "Designing for Student Understanding of Learning Analytics Algorithms",
    author: "Catherine Yeh, Noah Cowit, Iris Howley",
    venue: "AIED",
    image: aied,
    summary:
      "We use Cognitive Task Analysis to design an interactive, evidence-based explanation of Bayesian Knowledge Tracing, and explore the impact of our explanation on student understanding and trust.",
    paper: "https://link.springer.com/chapter/10.1007/978-3-031-36272-9_43",
    demo: "https://catherinesyeh.github.io/bkt-asl/",
    code: "https://github.com/catherinesyeh/bkt-asl",
    year: 2023,
    tags: ["hci", "ai"],
  },
  {
    title: "Envisioning the Next-Gen Document Reader",
    author: "Catherine Yeh, Franck Dernoncourt, Nedim Lipka",
    venue: "AAAI SDU Workshop",
    image: documentReader,
    summary:
      "We present a vision for the next-generation document reader as demonstrated through 3 exploratory UI prototypes, featuring 18 NLP-powered features and a plug-in marketplace.",
    paper: "https://arxiv.org/abs/2302.07492",
    demo: "https://github.com/catherinesyeh/nextgen-prototypes",
    year: 2023,
    tags: ["hci", "ai"],
  },
  {
    title:
      "Walk a Mile in Their Shoes: The Covid Pandemic Through the Lens of Four Tech Workers",
    author: "Jenna Butler, Catherine Yeh",
    venue: "CACM + ACM Queue",
    image: covidTech,
    summary:
      "We share stories from the Covid pandemic through the lens of four tech workers, based on a longitudinal diary study with more than 11,000 records.",
    paper: "https://dl.acm.org/doi/10.1145/3561989",
    paper2: "https://dl.acm.org/doi/10.1145/3534860",
    year: 2022,
    tags: ["misc"],
  },
];

// sort publications by year
pubs.sort((a, b) => b.year - a.year);

export const publications = pubs;
