import React from 'react'
import "../sidebar.scss"
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    },
  },
};

const itemvariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  },
};

const Link = () => {
  let items = ["Homepage", "services", "porthfolio","About", "contact" ]
  return (
    <motion.div className='link' variants={variants}>
      {items.map((item, index) => (
        <motion.a 
          href={`#${item}`} 
          key={index}
          variants={itemvariants} 
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Link;