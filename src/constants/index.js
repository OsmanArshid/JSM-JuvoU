import {
  ahrefs,
  apollo,
  benefitCard1,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  figma,
  file02,
  g_ads,
  gather,
  homeSmile,
  instagram,
  meta,
  notification2,
  notification3,
  notification4,
  notion,
  react,
  photoshop,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  surferSEO,
  telegram,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About us",
    url: "/#about-us",
  },
  {
    id: "1",
    title: "Services",
    url: "/#services",
  },
  {
    id: "2",
    title: "Pricing",
    url: "/#pricing",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "/#roadmap",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "/contact",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];


export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "We design a custom strategy to make your mark to scale to new heights, We are the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Personalized Approach",
    text: collabText,
  },
  {
    id: "1",
    title: "Timely Objective achievement",
  },
  {
    id: "2",
    title: "Precision, Creativity, and a hint of fun",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Photoshop",
    icon: photoshop,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: react,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Gather",
    icon: gather,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Google Ads",
    icon: g_ads,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Meta Ads",
    icon: meta,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Apollo",
    icon: apollo,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Ahrefs",
    icon: ahrefs,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Surfer",
    icon: surferSEO,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "SMEs",
    description:
      "Budget-friendly solutions tailored for small and medium businesses to kickstart growth with powerful insights and tools",
    price: "25,000",
    features: [
      "Comprehensive market research tailored to your industry",
      "Access to SEO-optimized strategies for improved visibility",
      "AI-driven social media scheduling for consistency",
      "Content ideation and writing customized for your brand",
      "A mini brand analysis report to identify growth areas",
    ],
  },
  {
    id: "1",
    title: "Custom",
    description:
      "You Provide; We Provide... Fully customizable marketing solutions built to match your business’s unique challenges and Budget",
    price: "You Decide",
    features: [
      "A dedicated marketing strategist for tailored campaigns",
      "Customizable social media ad campaigns with in-depth analytics",
      "Priority brand consultation and strategic planning sessions",
      "Access to our analytics dashboard for tracking performance metrics",
      "Custom AI tools for better lead generation and engagement",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description:
      "Elite solutions for large businesses focused on scaling, optimizing, and dominating their markets",
    price: "50,000",
    features: [
      "Full-scale market research and competitor analysis reports",
      "Dedicated account manager for 24/7 support and guidance",
      "Advanced email marketing campaigns with performance insights",
      "Custom AI-powered chatbot for lead generation and customer support",
      "Quarterly branding and strategy workshops tailored to your team",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Market Research",
    text: "We dive deep into data, decode customer desires, and deliver insights that actually drive results.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Email Marketing",
    text: "We craft targeted campaigns that hit the inbox with a purpose!",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Blog Writing",
    text: "We don't just write blogs - we craft stories that speak to your target audience, boost engagement, and improve your search rankings.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Web Development",
    text: "We make the web a place where creativity meets functionality. Look at OUR site !!!",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ads Management",
    text: "We work in Meta and Google Ads and bring in the conversion you dream of.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Brand Management",
    text: "We manage your and boost your brand's visibility.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
