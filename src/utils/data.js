import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  
  {
    name: "Mobile App Design",
    projects: 35,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Website Design",
    projects: 22,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  // {
  //   name: "Brand Identity",
  //   projects: 47,
  //   icon: MdWorkspacesOutline,
  //   bg: "#F26440",
  // },
];

export const WhatDoIHelp = [
"I am an IT professional with over 11 years of experience and a passion for mobile application development. I specialize in hybrid app development and have contributed to several successful apps for Android and iOS.",

"Using React Native and Cordova, I've developed over 35 mobile applications, with more than 28 on Google Play and over 7 on the iTunes Store. I’m involved in every project phase, from concept to deployment, and handle maintenance and debugging.",

"My work has achieved over 500,000 downloads. I have a strong understanding of the mobile app development lifecycle and am proficient in React Native and Cordova. I have a proven track record of delivering high-quality apps on time and within budget.",
];

export const workExp = [
  {
    place: "Wipro Technologies",
    tenure: "Sep 2019 - Present",
    role: "Sr. Project Engineer",
    detail:
      "A visual desginer dsesign for a variety of platforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "IDC Technologies(Contractor in Wipro)",
    tenure: "Dec 2018 - Aug 2019",
    role: "Sr. Software Engineer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "rSTAR Technologies (Formal name: Sofbang Technologies Pvt. Ltd.)",
    tenure: "June 2018 - Nov 2018",
    role: "Sr. Software Engineer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "Zend talent development pvt ltd",
    tenure: "Oct 2015 - May 2018",
    role: "Hybrid Application Developer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
];


export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
