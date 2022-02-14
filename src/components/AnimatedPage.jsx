import { motion } from "framer-motion"

const animations = {
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100vw"},
}

function AnimatedPage({ children }) {
    return (
        <motion.div 
            variants={animations} 
            initial="out" 
            animate="in" 
            exit="out" 
            transition={{ duration: .3 }}
        >{children}</motion.div>
    )
}

export default AnimatedPage