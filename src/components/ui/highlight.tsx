import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Highlight = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 1,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(`relative inline-block pb-1    px-1 rounded-lg bg-gradient-to-r from-blue-200 to-cyan-200`, className)}
    >
      {children}
    </motion.span>
  );
};
export default Highlight;
