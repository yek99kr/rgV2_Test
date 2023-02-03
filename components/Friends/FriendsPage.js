// import Ad from "../Home/Ad";
// import DragBackground from "./DragBackground";
import Friends from "./Friends";
import { motion } from "framer-motion";
// import useMediaQueryHeight from "../../utils/useMediaQueryHeight";
// import useMediaQueryWidth from "../../utils/useMediaQueryWidth";
// import useIsTouch from "../../utils/useIsTouch";

const FriendsPage = ({ router }) => {
  // const isSmallerWidth = useMediaQueryWidth(638);
  // const isSmallerHeight = useMediaQueryHeight(550);
  // const isSmallestHeight = useMediaQueryHeight(349);
  // const isTouch = useIsTouch();

  return (
    <div className="absolute w-[100vw] h-[100vh] overflow-hidden">
      {/* {isSmallerHeight || isSmallerWidth || isTouch ? (
        <div className="absolute top-0 left-0 bg-[#e9ebf0] w-[100vw] h-[100vh]"></div>
      ) : (
        <DragBackground />
      )} */}

      {/* {isSmallestHeight || (!isSmallerWidth && isSmallerHeight) ? null : <Ad />} */}
      <motion.div
        key={router.route}
        className="w-[100vw]"
        initial="pageInitial"
        animate="pageAnimate"
        transition={{ delay: 0.5, default: { duration: 1 } }}
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Friends router={router} />
      </motion.div>
    </div>
  );
};

export default FriendsPage;
