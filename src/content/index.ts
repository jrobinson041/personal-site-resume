import experience from "./experience";

const content = {
  name: "John Robinson",
  email: "jrobinson041@gmail.com",
  avatarSrc: "/john_robinson_propic.jpg",
  summary:
    "Hi, I'm John Robinson, a software engineer with full stack web application experience, especially on the front end. My specialty is <b>React</b>. I've worked with complex data streams in connected apps and I've built full 3D experiences from the ground up using ThreeJS, including one Virtual Reality experience I ran at a Google conference.",
  aboutMe: {
    content: [
      "I love when I get to apply my educational background in Physics and Math. Occasionally I get lucky with a physics problem, but my greatest takeaway is a knack for creative problem solving and a passionate curiosity.",
      "My side projects aren't always software, I get myself into a lot of hobbies. Right now I'm really into making music, flying planes (I'm a licensed pilot too!), and offroading. I'm also currently restoring a 1979 Corvette.",
    ],
    images: [
      { src: "/plane.jpg", caption: "My first solo flight!" },
      { src: "/me_and_mario.jpeg", caption: "This is Mario, he's the best." },
      { src: "/home_studio.jpg", caption: "My little home recording studio." },
    ],
  },
  experience,
};

export default content;
