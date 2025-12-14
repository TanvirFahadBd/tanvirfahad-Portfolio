import "./porthfolio.scss";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Project data remains the same
let items = [
  {
    id: 1,
    title: "nasscorporate website",
    image: "../../../public/mokeupsforporthfolio/firstproject.jpg",
    description: "A not-responsive corporate website built with HTML, CSS, and JavaScript to showcase company information and services.",
    btn: "https://class-14-homework.netlify.app/"
  },
  {
    id: 2,
    title: "behance demo project",
    image: "../../../public/mokeupsforporthfolio/bhane.jpg",
    description: "A Behance demo project showcasing a portfolio of creative works, including graphic design, photography, and digital art.",
    btn: "https://bhance-project.vercel.app/"
  },
  {
    id: 3,
    title: "E-commerce website",
    image: "../../../public/mokeupsforporthfolio/e=commers.jpg",
    description: "A responsive e-commerce website built with React and Node.js, featuring product listings, shopping cart functionality, and secure checkout.",
    btn: "https://tanvirfahad-cit-final-project.vercel.app/"
  },
  {
    id: 4,
    title: "Bmi calculator",
    image: "../../../public/mokeupsforporthfolio/bmi.jpg",
    description: "A BMI calculator built with React and JavaScript to calculate body mass index.",
    btn: "https://dynamic-piroshki-4c3e32.netlify.app/"
  }
];

const Single = ({ item }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
  return (
    <section ref={ref}>
      <div className="conteiner">
        <div className="wrapper">
          <div className="imgConteiner">
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textComteiner">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button><a href={item.btn}>See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Portfolio = () => {
  // ERROR 1 FIX: Initialize the 'ref' using the 'useRef' hook.
  const ref = useRef(null);

  // ERROR 2 FIX: Removed 'const raf = useRaf();' as it was undefined.

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    // Assigned the 'ref' to the main container div
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className="progressbar"
        >
        </motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;