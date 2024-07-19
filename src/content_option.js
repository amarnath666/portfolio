import img1 from "./assets/images/Pizza-App.png";
import img2 from "./assets/images/Social-Pedia.png";
import img3 from "./assets/images/Travel-Heaven.png";
import img4 from "./assets/images/Medium.png";

const logotext = "Amarnath Dhumal";
const meta = {
    title: "Amarnath Dhumal",
    description: "I'm a full-stack developer passionate about building beautiful and functional websites. Let's work together to bring your ideas to life.",
};

const introdata = {
    title: "I’m Amarnath Dhumal",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
    },
    description: "I'm a full-stack developer passionate about building beautiful and functional websites. Let's work together to bring your ideas to life.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About my self",
    aboutme: "As a full-stack developer, I specialize in building robust and scalable web applications. With expertise in both frontend and backend technologies, I bring ideas to life by seamlessly integrating user-friendly interfaces with powerful server-side functionalities. Let's collaborate to bring your project to the next level.",
};

const skills = [
    {
        name: "Javascript",
        value: 90,
    },
    {
        name: "Typescript",
        value: 80,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Node.js",
        value: 85,
    },
    {
        name: "Express.js",
        value: 80,
    },
    {
        name: "MongoDB",
        value: 90,
    },
    {
        name: "PostgreSQL",
        value: 85
    },
    {
        name: "MySQL",
        value: 65,
    },
    {
        name: "Next.js",
        value: 75
    },
    {
        name: "Redux",
        value: 80
    },
    {
        name: "AWS",
        value: 70
    },
    {
        name: "Docker",
        value: 70
    },
    {
        name: "Prisma",
        value: 80
    },
    {
        name: "Mongoose",
        value: 80
    },
    {
        name: "Shadcn",
        value: 80
    },
    {
        name: "HTML",
        value: 90
    },
    {
        name: "CSS",
        value: 80
    },
    {
        name: "Tailwind CSS",
        value: 80
    },
    {
        name: "Material UI",
        value: 80
    },
    {
        name: "Bootstrap",
        value: 75
    },
];


const services = [{
    title: "Front-End Developer",
    description: "Transforming ideas into captivating user interfaces is my passion. With expertise in HTML, CSS, and JavaScript, particularly in React.js, I specialize in creating responsive and visually appealing front-end solutions. Whether crafting intuitive user experiences or optimizing performance, I ensure that every pixel delivers value and enhances user engagement.",
},
{
    title: "Back-End Developer",
    description: "Building robust and scalable server-side solutions is where I excel. Leveraging Node.js and databases like MongoDB, I design and develop secure and efficient back-end architectures. From API development to database management, I ensure seamless communication between the front-end and back-end, delivering high-performance web applications that meet the demands of modern digital environments.",
},
];

const dataportfolio = [
    {
        img: img1,
        description: `Pizza Delivery App<br />
                    Features: User & admin authentication, email verification, pizza customization, inventory management, Razorpay integration.<br />`,
        link: "https://github.com/amarnath666/Pizza_Delivery_App",
    },
    {
        img: img2,
        description: `Social-Pedia<br />
                    Features: Profile creation, post sharing, liking system, friend management.<br />.`,
        link: "https://github.com/amarnath666/Social-Pedia",
    },
    {
        img: img3,
        description: `Travel-Heaven<br />
                    Features: User authentication, listing management, review system, mapbox integration.<br />`,
        link: "https://github.com/amarnath666/Travel-Haven",
    },
    {
        img: img4,
        description: "Medium Blog<br /> Features: Blogging platform with user authentication.<br />",
        link: "https://github.com/amarnath666/Medium_Blog",
    }
];

const contactConfig = {
    YOUR_EMAIL: "amarnathdhumal2001@gmail.com",
    YOUR_SERVICE_ID: "service_cn08yw6",
    YOUR_TEMPLATE_ID: "template_32lghpf",
    YOUR_USER_ID: "_8wyD5Kmd4vrTTjtE",
};

const socialprofils = {
    github: "https://github.com/amarnath666",
    linkedin: "https://www.linkedin.com/in/amarnath-dhumal/",
    twitter: "https://twitter.com/AmarnathDhumal",
};
export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};