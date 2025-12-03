import "./Parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react'; // Import useRef

const Parallax = ({ type }) => {

  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


  return (
    <div
      className="Parallax"

      ref={scrollRef}
      style={{
        background: type === "services" ? "linear-gradient(180deg, #0c0c1d, #111132)"
          : "linear-gradient(180deg, #0c0c1d, #505064)"
      }}
    >
      <motion.h1 style={{ y: yText }}> {type === "services" ? "what we do?" : "what we did?"}</motion.h1>
      <motion.div className="mountens"></motion.div>
      <motion.div
        className="planets"
        style={{
          backgroundImage: type === "services" ? "url(/planets.png)" : "url(/sun.png)",
          y: yBg
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yText }}></motion.div>
    </div>
  )
}

export default Parallax