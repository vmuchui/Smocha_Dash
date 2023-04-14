import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "order",
      title: "Order",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "SIGN UP",
      icon: web,
    },
    {
      title: "CONTACT US",
      icon: mobile,
    },
    {
      title: "FAQ",
      icon: backend,
    },
    {
      title: "LOG IN",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "product",
      company_name: "company",
      icon: starbucks,
      iconBg: "#383E56",
      date: "slogan",
      points: [
        "product overview.",
        "Collaborating with",
        "lorem ",
        "reviews.",
      ],
    },
    {
      title: "product",
      company_name: "company",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "slogan",
      points: [
        "product overview.",
        "Collaborating with",
        "lorem ",
        "reviews.",
      ],
    },
    {
      title: "product",
      company_name: "company",
      icon: shopify,
      iconBg: "#383E56",
      date: "slogan",
      points: [
        "product overview.",
        "Collaborating with",
        "lorem ",
        "reviews.",
      ],
    },
    {
      title: "YOUR PRODUCT NAME",
      company_name: "Company",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Slogan",
      points: [
        "product overview.",
        "Collaborating with",
        "lorem ",
        "reviews.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make something as beautiful as mom's cooking. This experience proved me wrong.",
      name: "Sara",
      designation: "",
      company: "Nairobi",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I order smochas all day just can't get enough.",
      name: "Chris",
      designation: "",
      company: "Mombasa",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Great experience ordering smochas. We can't thank them enough!",
      name: "Lisa",
      designation: "",
      company: "Kisumu",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SIGN UP AS DELIVERY PERSONNEL",
      description:
        "Help us get delicious and nutritious smochas to comrades in need. Providing a convenient and efficient solution for logistics and transportation needs.",
      tags: [
        {
          name: "large scale logistics",
          color: "blue-text-gradient",
        },
        {
          name: "retail customer delivery",
          color: "green-text-gradient",
        },
        {
          name: "transportation",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "DEVELOPER",
      description:
        "Get API key to help improve the application.Contact us for job openings.",
      tags: [
        {
          name: "Enterprise",
          color: "blue-text-gradient",
        },
        {
          name: "Personal",
          color: "green-text-gradient",
        },
        {
          name: "Work",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Social responsibility",
      description:
        "Making a difference in our communities through sustainable solutions. Get in touch to be a part of the experience.",
      tags: [
        {
          name: "Events",
          color: "blue-text-gradient",
        },
        {
          name: "Projects",
          color: "green-text-gradient",
        },
        {
          name: "Blog",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  