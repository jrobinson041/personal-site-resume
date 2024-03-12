import experience from "./experience";
import education from "./education";

const content = {
  name: "John Robinson",
  email: "jrobinson041@gmail.com",
  avatarSrc: "/john_robinson_propic.jpg",
  aboutMe: {
    content: [
      "I love when I get to apply my background in Physics and Math. Occasionally I get lucky with a physics problem, but my greatest takeaway is a knack for creative problem solving and a passionate curiosity.",
      "My side projects aren't always software, I get myself into a lot of hobbies. Right now I'm really into making music, flying planes (I'm a licensed pilot too!), and offroading. I'm also restoring a 1979 Corvette.",
    ],
    images: [
      { src: "/plane.jpg", caption: "My first solo flight!" },
      { src: "/me_and_mario.jpeg", caption: "This is Mario, he's the best." },
      {
        src: "/home_studio.jpg",
        caption: "A little home recording studio.",
      },
    ],
  },
  experience,
  education,
};

export default content;
