// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
import newLogo from "./images/logo.jpg"

// Projects Images (add your images to the images directory and import below)
//import Logo from "./images/logo.svg";
import Clip from "./images/icon-clipboard-512.png";
import Poke from "./images/pokedex.png";
import Voice from "./images/v2A.png"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/LA.png";
import HeroDark from "./images/Night.png";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "amoreno1413";

// Navbar Logo image
export const navLogo = newLogo;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="devicon:linkedin" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and creating scripts to improve my productivity. I am interesting in backend development and machine learning. In my free time I play videogames!";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="akar-icons:python-fill" className="display-4" />,
    name: "Python",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id:6,
    skill: <Icon icon='eos-icons:machine-learning' className="display-4" />,
    name: "Machine Learning"
  },
  {
    id:7,
    skill: <Icon icon='bi:filetype-sql' className="display-4" />,
    name: "SQL"
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = 'https://alanresume.s3.us-west-1.amazonaws.com/Alan+Moreno+-+Resume.pdf';

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["JobLinkExtension", "Voice2AI", "Pokemon-Trading-App"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "JobLinkExtension",
    image: Clip,
  },
  {
    name: "Pokemon-Trading-App",
    image: Poke,
  },
  {
    name: "Voice2AI",
    image: Voice,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xdoqeljj";
