import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Menu() {
  return (
    <div className="menu-page">
      <motion.nav
        className="menu-nav"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Link to="/" className="menu-link">
            Home
          </Link>
        </motion.div>
        <div className="menu-divider"></div>
        <motion.div variants={itemVariants}>
          <Link to="/about" className="menu-link">
            About
          </Link>
        </motion.div>
        <div className="menu-divider"></div>
        <motion.div variants={itemVariants}>
          <Link to="/books" className="menu-link">
            Books
          </Link>
        </motion.div>
        <div className="menu-divider"></div>
        <motion.div variants={itemVariants}>
          <Link to="/authors" className="menu-link">
            Authors
          </Link>
        </motion.div>
        <div className="menu-divider"></div>
        <motion.div variants={itemVariants}>
          <Link to="/contacts" className="menu-link">
            Contacts
          </Link>
        </motion.div>
      </motion.nav>
    </div>
  );
}

export default Menu;
