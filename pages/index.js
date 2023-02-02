import HomePage from "../components/Home/HomePage";
import { motion } from "framer-motion";
import Hands from "../components/Hands/Hands";
import useMediaQueryHeight from "../utils/useMediaQueryHeight";
import useMediaQueryWidth from "../utils/useMediaQueryWidth";
import useIsTouch from "../utils/useIsTouch";

export default function Home({ router }) {
  const isSmallWidth = useMediaQueryWidth(750);
  const isSmallerWidth = useMediaQueryWidth(638);
  const isSmallHeight = useMediaQueryHeight(639);
  const isSmallestHeight = useMediaQueryHeight(349);
  const isTouch = useIsTouch();
  let hand;

  if (
    isSmallestHeight ||
    (!isSmallerWidth && isSmallHeight) ||
    (isSmallWidth && !isSmallHeight) ||
    isSmallerWidth ||
    isTouch
  ) {
    hand = null;
  } else {
    hand = <Hands router={router} />;
  }

  return (
    <>
      {hand}
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        transition={{ delay: 0.3, default: { duration: 0.7 } }}
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
      >
        <HomePage router={router} />
      </motion.div>
    </>
  );
}
