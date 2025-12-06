import { motion } from "framer-motion";

export default function MaskedNav() {
  return (
    <motion.nav
      initial={{
        WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
        maskImage: "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
      }}
      animate={{
        WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)",
        maskImage: "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)",
      }}
      transition={{ duration: 1 }}
      style={{
        backgroundColor: "#0a7aff",
        height: 60,
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        color: "white",
        fontWeight: "bold",
      }}
    >
      Masked Nav
    </motion.nav>
  );
}
