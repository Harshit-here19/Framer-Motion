import {  motion } from "framer-motion"

export default function MultipleKeyframes() {
    return (
        <div className="flex justify-center items-center h-[50vh] w-screen">
        <motion.div
        
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                backgroundColor: ["#181817", "#0a1543", "#19327f", "#021fa0", "#1b45d7"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
            }}
            style={box}
        />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#181817",
    borderRadius: 5,
}
