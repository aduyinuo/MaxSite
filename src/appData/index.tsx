import {
  App,
  GalleryImage,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import dsta from "../../assets/workaccordion/dsta.png";
import gdsc from "../../assets/workaccordion/gdsc.png";
import file from "../../assets/workaccordion/file.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import ee2026_1 from "../../assets/work/EE2026/ee2026_1.jpg";
import ee2026_2 from "../../assets/work/EE2026/ee2026_2.jpg";
import ee2026_3 from "../../assets/work/EE2026/ee2026_3.jpg";
import ee2026_4 from "../../assets/work/EE2026/ee2026_4.jpg";
import ee2026_5 from "../../assets/work/EE2026/ee2026_5.jpg";
import ee2026_6 from "../../assets/work/EE2026/ee2026_6.jpg";
import ee2026_7 from "../../assets/work/EE2026/ee2026_7.jpg";
import dsta_1 from "../../assets/work/dsta/1.png";
import dsta_2 from "../../assets/work/dsta/2.png";
import dsta_3 from "../../assets/work/dsta/3.png";
import dsta_4 from "../../assets/work/dsta/4.png";
import dsta_5 from "../../assets/work/dsta/5.png";
import dsta_6 from "../../assets/work/dsta/6.png";
import dsta_7 from "../../assets/work/dsta/7.png";
import dsta_8 from "../../assets/work/dsta/8.png";
import hfg_1 from "../../assets/work/hfg/1.png";
import hfg_2 from "../../assets/work/hfg/2.png";
import hfg_3 from "../../assets/work/hfg/3.png";
import hfg_5 from "../../assets/work/hfg/5.png";
import hfg_6 from "../../assets/work/hfg/6.png";
import hfg_7 from "../../assets/work/hfg/7.png";
import eg_1 from "../../assets/work/eg1311/1.jpg";
import eg_2 from "../../assets/work/eg1311/2.jpg";
import eg_3 from "../../assets/work/eg1311/3.jpg";
import eg_4 from "../../assets/work/eg1311/4.jpg";
import eg_5 from "../../assets/work/eg1311/5.jpg";
import eg_6 from "../../assets/work/eg1311/6.jpg";
import cg1 from "../../assets/work/cg1111/1.jpg";
import cg2 from "../../assets/work/cg1111/2.jpg";
import cg3 from "../../assets/work/cg1111/3.jpg";
import cg4 from "../../assets/work/cg1111/4.jpg";
import cg5 from "../../assets/work/cg1111/5.jpg";
import cg6 from "../../assets/work/cg1111/6.jpg";
import cg1_2 from "../../assets/work/cg2111/1.jpg";
import cg2_2 from "../../assets/work/cg2111/2.jpg";
import cg3_2 from "../../assets/work/cg2111/3.jpg";
import cg4_2 from "../../assets/work/cg2111/4.jpg";
import cg5_2 from "../../assets/work/cg2111/5.jpg";
import cg6_2 from "../../assets/work/cg2111/6.jpg";
import cs2113_1 from "../../assets/work/cs2113/1.png";
import cs2113_2 from "../../assets/work/cs2113/2.png";
import sc_1 from "../../assets/work/supercanvas/1.png";
import sc_2 from "../../assets/work/supercanvas/2.png";
import sc_3 from "../../assets/work/supercanvas/3.png";
import lul from "../../assets/work/lul.png";
import butterfly from "../../assets/butterfly.png";
import mr1 from "../../assets/mr1.jpg";
import mr2 from "../../assets/mr2.jpg";
import mrIcon from "../../assets/mr_icon.png";
import MS from "../../assets/work/MS.png";
import MS2 from "../../assets/work/MS2.png";
import col1 from "../../assets/gallery/0.jpg";
import col2 from "../../assets/gallery/1.jpg";
import col3 from "../../assets/gallery/2.jpg";
import col4 from "../../assets/gallery/3.jpg";
import col5 from "../../assets/gallery/4.jpg";
import col6 from "../../assets/gallery/5.jpg";
export const TechIcon = {
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  NEXTJS:
    "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
  FIREBASE:
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
  TYPESCRIPT:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  FIGMA:
    "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
  NODEJS:
    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  GOOGLECLOUDFUNCTIONS:
    "https://img.shields.io/badge/gCloud_Functions-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  JAVA: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
  FLUTTER:
    "https://img.shields.io/badge/flutter-%2302569B.svg?style=for-the-badge&logo=flutter&logoColor=white",
  VERILOG:
    "https://img.shields.io/badge/Verilog-%23F7DF1E.svg?style=for-the-badge&logo=verilog&logoColor=rgb(142%2C0%2C39)",
  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  C: "https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
  CPP: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&ogoColor=white",
  ROS: "https://img.shields.io/badge/ROS-%23000000.svg?style=for-the-badge&logo=ros&logoColor=white",
  ARDUINO:
    "https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  RASPBERRYPI:
    "https://img.shields.io/badge/Raspberry%20Pi-C51A4A?style=for-the-badge&logo=Raspberry-Pi",
  REDUX:
    "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  MATERIALUI:
    "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
  AUTOCAD:
    "https://img.shields.io/badge/AutoCAD-0696D7?style=for-the-badge&logo=autodesk&logoColor=white",
  MBOT: "https://img.shields.io/badge/Makeblock-FF7F00?style=for-the-badge&logo=makeblock&logoColor=white",
  GOOGLECLOUD:
    "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  MONGODB:
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  TELEGRAM:
    "https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white",
  VUEJS:
    "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D",
  WEBPACK:
    "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white",
  SUPABASE:
    "https://img.shields.io/badge/Supabase-1E2E3B?style=for-the-badge&logo=supabase&logoColor=white",
  CHATGPT:
    "https://img.shields.io/badge/chatGPT-74aa9c?logo=openai&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "My Photography Collection",
      message: "",
      Icon: gallery,
      isMinimized: false,
      zIndex: 0,
      program: App.MYGALLERY,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.DECEPTION,
  WorkType.HAT,
  WorkType.GROUP,
];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 1,
    title: "Two-Sided Deception",
    date: "May 2020 - Dec 2020",
    gitURL: "",
    techstack: [],
    gallery: [],
    overview: `One of the widely used cyber deception techniques
is decoying, where defenders create fictitious machines (i.e., honeypots) to lure attackers. Honeypots are deployed to entice attackers, but their effectiveness depends on their configuration as that
would influence whether attackers will judge them
as “real” machines or not. In this work, we study
two-sided deception, where we manipulate the observed configuration of both honeypots and real
machines. The idea is to improve cyberdefense by
either making honeypots “look like” real machines
or by making real machines “look like honeypots.”
We identify the modifiable features of both real machines and honeypots, and conceal these features
to different degrees. In an experiment, we study
three conditions: default features on both honeypot and real machines, concealed honeypots only,
and concealed both honeypots and real machines.
We use a network with 40 machines where 20 of
them are honeypots. We manipulate the features
of the machines, and using an experimental testbed
(HackIT), we test the effectiveness of the decoying
strategies against humans attackers. Results indi`,
  },
  {
    id: 2,
    title: "Learning to Play an Adaptive Cyber Deception Game",
    date: "Nov 2021 - Mar 2022",
    gitURL: "",
    techstack: [],
    gallery: [],
    overview: `Due to the increase in cyber threats and the dynamic nature of
cyber attacks, it is important to use adaptive strategies to decide
when and where to deploy the defense resources and engage the
attackers through deceptive cyber artifacts to reduce attack effectiveness. However, most existing work that uses game-theoretic
framework to analyze cyber deception does not consider defender
and attacker’s ability to adapt to real-time observations. In this paper, we propose an Adaptive Cyber Deception Game, a two-player
Markov game model that accounts for sequential moves between
defender and attacker in a cyber deception scenario on an attack
graph. We also study the use of a reinforcement learning algorithm
– Proximal Policy Optimization (PPO) – with self-play in this game.
Preliminary experimental results show that the defender policies
found by PPO are significantly better than a heuristic policy.`,
  },
  {
    id: 3,
    title: "Experimental Evaluation of Cognitive Agents for Collaboration in Human-Autonomy Cyber Defense Teams",
    date: "Sep 2022 - June 2023",
    gitURL: "",
    techstack: [],
    gallery: [],
    overview: `Autonomous agents are becoming increasingly prevalent and capable of collaborating with humans on interdependent tasks as teammates. There is increasing recognition that human-like agents might be natural human collaborators. However, there has been limited work on designing agents according to the principles of human cognition or in empirically testing their teamwork effectiveness.  In this study, we design an agent that relies on episodic memory to determine its actions (\textit{Cognitive agent}) and compare its effectiveness with two types of autonomous agents: one that relies on heuristic reasoning (\textit{Heuristic agent}) and one that behaves randomly (\textit{Random agent}). These agents are compared in a human-autonomy team (HAT) performing a cyber-protection task. Using this task, we systematically evaluate how autonomous teammates' cognitive abilities and competence impact the team's interaction and outcomes. The results revealed that teams with Cognitive agents are the most effective, followed by teams with Heuristic and Random agents. Evaluation of collaborative team process metrics suggests that the cognitive agent is more adaptive to individual play styles of human teammates, but it is also inconsistent and unpredictable. Competent agents (Cognitive and Heuristic agents) require less human effort but might cause over-reliance. The results of the post-experiment questionnaire showed that competent agents are rated more trustworthy and cooperative than Random agents. We also found that human participants' subjective ratings correlate with their team performance, and humans tend to take the credit or responsibility for the team. We suggest that autonomous agents for HATs should be competent and endowed with human-like cognition. In addition, agents should employ predictable behavior or explanations to maintain human trust and actively seek human support for more effective teamwork.`,
  },
  {
    id: 4,
    title: "Large Language Models for Collective Problem-Solving: Insights into Group Consensus Decision-Making",
    date: "Nov 2023 - Feb 2024",
    gitURL: "",
    techstack: [],
    gallery: [],
    overview: `Large Language models (LLM) exhibit human-like proficiency in various tasks such as translation, question answering, essay writing, and programming. Emerging research explores the use of LLMs in collective problem-solving endeavors, such as tasks where groups try to uncover clues through discussions. Although prior work has investigated individual problem-solving tasks, leveraging LLM-powered agents for group consensus and decision-making remains largely unexplored. This research addresses this gap by (1) proposing an algorithm to enable free-form conversation in groups of LLM agents, (2) creating metrics to evaluate the human-likeness of the generated dialogue and problem-solving performance, and (3) evaluating LLM agent groups against human groups using an open source dataset. Our results reveal that LLM groups outperform human groups in problem-solving tasks. LLM groups also show a greater improvement in scores after participating in free discussions. In particular, analyses indicate that LLM agent groups exhibit more disagreements, complex statements, and a propensity for positive statements compared to human groups. The results shed light on the potential of LLMs to facilitate collective reasoning and provide insight into the dynamics of group interactions involving synthetic LLM agents.`,
  },
  {
    id: 5,
    title: "Emergent Cooperative Decision-Making in Triadic Prisoner's Dilemma: Effects of Incentives and Information",
    date: "Sep 2024 - Dec 2024",
    gitURL: "",
    techstack: [],
    gallery: [],
    overview: `While pairwise cooperation has been extensively studied through the Prisoner's Dilemma framework, our understanding of how cooperation emerges in small groups remains limited. We extend the classical dyadic framework to triads, examining how individual strategies and relationships aggregate to influence group cooperation. Through two experiments (N= 519), we investigate:(1) how structural incentives shape cooperation by varying the K-index (0.4/0.8), a theoretical value that predicts greater cooperation for higher K values, and (2) how different degrees of information about mutual interdependence affect group behavior. We find that, under minimal information conditions, a higher K-index promotes sustained cooperation in the triadic setting, in alignment with the theoretical definition of the K-index. However, while experiential information (observing others' actions/outcomes) enhances cooperation, descriptive information (complete payoff matrices) paradoxically reduces cooperation. Analysis of triadic interactions reveals that selective cooperation by a third player in the group can stabilize cooperative dyadic relationships and destabilize defective dyadic relationships. These findings provide insights for designing cooperative systems, particularly in contexts where organizations must balance information-sharing benefits against strategic risks.`,
  },
  {
    id: 6,
    title: "Toward a Cognitive Theory of Human Behavior in Groups: Dynamic Weighting, Categorization, and Contrast",
    date: "Jan 2025 - Mar 2025",
    gitURL: "",
    techstack: [],
    gallery: [],
    overview: `We analyze the dynamics of strategic interaction among a group of human agents through a novel cognitive model that integrates three key psychological mechanisms: dynamic weighting, category learning, and contrast effects. The dynamic weighting mechanism enables individuals to adjust how much they value others' choices and outcomes based on expectation-reality discrepancies. The category learning mechanism captures how people efficiently organize their social experiences into behavioral prototypes through hierarchical clustering. The contrast effect then sharpens the distinctions between these behavioral categories by amplifying perceived differences between groups. Using data from online group experiments, we demonstrate that the model successfully reproduces human behavior patterns without parameter fitting. Through detailed analysis of the dynamic weighting parameter ($\alpha$), we gain insight into the psychological processes underlying how individuals evaluate and respond to others in group settings. These findings advance our understanding of human cognition in complex social environments and suggest ways to improve collective outcomes in real-world applications.`,
  },
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.DECEPTION,
    icon: butterfly,
    title: "Two-Sided Deception",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  {
    id: 2,
    type: WorkType.DECEPTION,
    icon: emptyfile,
    title: "Cyber Deception Game",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.HAT,
    icon: emptyfile,
    title: "Cyber Protection Team",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.GROUP,
    icon: emptyfile,
    title: "LLM Group Concensus",
    content: WorkData[WorkData.findIndex((x) => x.id === 4)],
  },
  {
    id: 5,
    type: WorkType.GROUP,
    icon: emptyfile,
    title: "Group Prisoner's Dilemma",
    content: WorkData[WorkData.findIndex((x) => x.id === 5)],
  },
  {
    id: 5,
    type: WorkType.GROUP,
    icon: emptyfile,
    title: "Human Model in Group IPD",
    content: WorkData[WorkData.findIndex((x) => x.id === 6)],
  },
] as WorkFile[];

// For My Photography Collection
export const PhotoCollection = [
  {
    id: 0,
    title: "Rocky afternoon",
    location: "Dingboche-Lobuche, Nepal",
    desc: "Taken enroute to Everest Base Camp",
    date: "31 December 2022",
    img: col1,
  },
  {
    id: 1,
    title: "Himalayan Mountain",
    location: "Lobuche-GorakShep, Nepal",
    desc: "Icy morning",
    date: "1 January 2023",
    img: col2,
  },
  {
    id: 2,
    title: "Autumn Foliage",
    location: "Kyoto, Japan",
    desc: "Japanese Autumn Foliage in the Imperial Palace of Kyoto",
    date: "23 November 2023",
    img: col3,
  },
  {
    id: 3,
    title: "Japanese Symmetry",
    location: "Kiyomizu Temple, Kyoto",
    desc: "One of the most famous temples in Kyoto, Japan",
    date: "22 November 2023",
    img: col4,
  },
  {
    id: 4,
    title: "Australia Forest Trail",
    location: "Aqueduct Road, Melbourne, Australia",
    desc: "Bird eye view of the forest trail during winter",
    date: "June 2022",
    img: col5,
  },
  {
    id: 5,
    title: "Milky Wave",
    location: "Waiao Beach, Yilan, Taiwan",
    desc: "Surfing in the middle of a milky ocean",
    date: "17 November 2022",
    img: col6,
  },
] as GalleryImage[];
