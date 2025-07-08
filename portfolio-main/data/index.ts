export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am passionate about full stack web development .",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "SurfTurf",
    description: "Book your game, own the field. ",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Waste Management System (WMS)",
    des: "A smart waste management platform with automated/manual request assignment, optimized routing using K-Means clustering and OR-Tools, real-time driver tracking, and CURSOR-powered driver-user geospatial matching.",
    img: "https://i.postimg.cc/xdCp8dPb/Screenshot-2025-07-07-183412.png",
    iconLists: ["/re.svg", "/nodejs.svg", "/mongodb.svg", "/socket.svg", "/map.svg"],
    link: "https://github.com/Sanjeevi1/WMS",
  },
  {
    id: 2,
    title: "Internship Management System",
    des: "Rebuilt a Django-based system into a modern MERN stack app. Supports student internship and OD requests, faculty approvals, multi-role access, real-time status tracking, and department-wise analytics dashboard.",
    img: "/internship.png",
    iconLists: ["/re.svg", "/nodejs.svg", "/mongodb.svg", "/express.svg", "/ts.svg"],
    link: "https://github.com/Sanjeevi1/Internship-IT",
  },
  {
    id: 3,
    title: "SurfTurf",
    des: "A turf booking system enabling users to search, filter, and reserve sports turfs. Features smart recommendations, concurrency-safe booking, owner-controlled slot locking, and real-time user interaction tracking.",
    img: "https://i.postimg.cc/nrdrppS4/Whats-App-Image-2025-06-22-at-17-59-34-f1064223.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/flask.svg", "/postgresql.svg"],
    link: "https://github.com/Sanjeevi1/SurfTurf",
  },
  {
    id: 4,
    title: "Pathfinding Visualizer",
    des: "An interactive grid-based visualizer for Dijkstra, A*, BFS, and DFS algorithms. Includes smooth animations, draggable start/end nodes, and dynamic wall placement with a clean dark-themed UI.",
    img: "/pathfinder.jpg",
    iconLists: ["/re.svg", "/ts.svg", "/css.svg"],
    link: "https://github.com/San5jeevi55/Pathfinding-Visualizer",
  },
  {
    id: 5,
    title: "Sign Language Translator",
    des: "An AI-based tool that detects static and dynamic sign gestures using MediaPipe and LSTM models. Translates sign language to text and audio using ElevenLabs voice synthesis.",
    img: "/signlang.jpg",
    iconLists: ["/python.svg", "/opencv.svg", "/mediapipe.svg", "/tensorflow.svg"],
    link: "https://github.com/San5jeevi55/SignLanguage-Translator",
  },
  {
    id: 6,
    title: "Vegetable Vendor System",
    des: "A Django-based ecommerce app for ordering fresh vegetables with custom weights. Admin dashboard includes real-time inventory updates and user order tracking.",
    img: "/vege.jpg",
    iconLists: ["/django.svg", "/icons8-js.svg", "/icons8-html.svg", "/icons8-css.svg", "/icons8-sql-64.png"],
    link: "https://github.com/San5jeevi55/Freshfare",
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "I am a BTech Information Technology student at SSN College of Engineering, focusing on full stack development. I am passionate about creating seamless, user-friendly applications and continually enhancing my skills in front-end and back-end technologies. My goal is to contribute to innovative projects that integrate technology with excellent user experience.",
    name: "SSN COLLEGE OF ENGINEERING",
    title: "Btech Information Technology CGPA:8.381",
  },
  {
    id: 2,
    quote: "I completed my 12th studies with a remarkable 99.6% score, which reflects my dedication and strong academic background. This achievement has laid a solid foundation for my ongoing pursuit of excellence in Information Technology at SSN College of Engineering.",
    name: "Senthil Matric Hr Sec School",
    title: "HSC 579/600",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Dignie",
    subtitle: "Software Developer Intern",
    desc: "Currently interning at Dignie where I contribute to the development of scalable web applications using modern technologies and collaborate on innovative projects aimed at improving user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg", // You can change the thumbnail to represent Dignie
  },
  {
    id: 2,
    title: "ACADEMIC PROJECTS",
    subtitle: "Team Lead",
    desc: "Led the development of academic projects such as the Vegetable Vendor System, Internship Management System, and more. Handled full stack development and ensured timely and quality delivery.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/"
  },
  {
    id: 2,
    img: "/leetcode.svg",
    link: "https://leetcode.com/u/sanjeevi2210539/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: 'https://www.linkedin.com/in/sanjeevi-n-038b26259',
  },
];
