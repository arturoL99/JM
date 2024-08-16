import "../styles/globals.scss";
import "../src/components/Shapes/shapes.scss";
import "../src/components/Tiles/tiles.scss";
import "../src/components/Main/main.scss";
import "../src/components/Contact/contacts.scss";
import "../src/components/Projects/projects.scss";
import "../src/components/AboutUs/AboutUs.scss";
import "../src/components/Events/Events.scss";
import "../src/components/Contact/modal.scss";
import "../src/components/Projects/ProjectsContainer.scss";
import "../src/components/Contact/form.scss";
import "../src/components/Arrow/arrow.scss";
import "../src/components/Navbar/Navbar.scss";
import "../src/components/Photos/Photos.scss";
import "../src/components/Title/Title.scss";
import "../src/components/Calendar/Calendar.scss";
import "../styles/test.scss";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: 0,
          },
          animateState: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: 1,
          },
          exitState: {
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          },
        }}
      >
          <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
