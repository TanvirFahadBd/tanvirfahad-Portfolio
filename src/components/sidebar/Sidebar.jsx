
import React, { useState } from 'react'
import { motion } from "framer-motion"; 
import "./sidebar.scss"
import ToggleButton from './Togglebuttons/ToggleButton'
import Link from './Link/Link';


let variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px )",
    transition: {
      type: "spring" 
    }

  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  let [open, setOpen] = useState(false)

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Link />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar