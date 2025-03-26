import { motion } from "framer-motion";

export default function RosaAnimada() {
  return (
    <div className="flex items-center justify-center h-screen bg-black relative overflow-hidden">
      {/* Efecto de iluminación */}
      <div className="absolute inset-0 bg-gradient-radial from-red-900 via-black to-black opacity-40" />
      
      {/* Animación de la rosa */}
      <motion.svg
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        viewBox="0 0 200 200"
        className="w-64 h-64 z-10"
      >
        <motion.path
          fill="red"
          stroke="darkred"
          strokeWidth="2"
          d="M100,20 C130,20 160,50 160,80 C160,120 120,160 100,180 C80,160 40,120 40,80 C40,50 70,20 100,20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4 }}
        />
      </motion.svg>
    </div>
  );
}
