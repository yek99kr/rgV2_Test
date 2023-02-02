// import HomePage from "../components/Home/HomePage";
import { motion } from "framer-motion";
import { useState } from "react";

// import useMediaQueryHeight from "../utils/useMediaQueryHeight";
// import useMediaQueryWidth from "../utils/useMediaQueryWidth";
// import useIsTouch from "../utils/useIsTouch";

export default function Home({ router }) {
  const [hoverEmail, setHoverEmail] = useState(false);
  //   const isSmallWidth = useMediaQueryWidth(750);
  //   const isSmallerWidth = useMediaQueryWidth(638);
  //   const isSmallHeight = useMediaQueryHeight(639);
  //   const isSmallestHeight = useMediaQueryHeight(349);
  //   const isTouch = useIsTouch();
  //   let hand;

  //   if (
  //     isSmallestHeight ||
  //     (!isSmallerWidth && isSmallHeight) ||
  //     (isSmallWidth && !isSmallHeight) ||
  //     isSmallerWidth ||
  //     isTouch
  //   ) {
  //     hand = null;
  //   } else {
  //     hand = <Hands router={router} />;
  //   }

  return (
    <div>
      {/* {hand} */}
      <motion.div
        key={router.route}
        className="fixed overflow-hidden w-[100vw] h-[100vw]"
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
        {/* <HomePage router={router} /> */}

        <div className="relative w-[100vw] h-[100vh] overflow-hidden">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[61%] leading-[2] md:leading-[2.2] lg:leading-[1.9] w-[95vw] sm:w-[90vw] md:w-[88vw] lg:w-[75vw] xl:w-[63vw] 2xl:w-[60vw] text-[3.1vw] 4xs:text-[2.9vw] sm:text-[15px] md:text-[16px] lg:text-[18.5px] xl:text-[19.5px] 2xl:text-[23px] text-center bg-[#e9ebf0]/40 p-5">
            Currently taking on select projects.{" "}
            <a
              href="mailto: hello@realgood.tv"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="insta cursor-pointer inline-block noselect thumbcursor"
                onMouseEnter={() => setHoverEmail(true)}
                onMouseLeave={() => setHoverEmail(false)}
              >
                <span className="wiggle1 text-pink-500">h</span>
                <span className="wiggle2 text-sky-400">e</span>
                <span className="wiggle3 text-yellow-500">l</span>
                <span className="wiggle4 text-purple-500">l</span>
                <span className="wiggle5 text-pink-500">o</span>
                <span className="wiggle6 text-sky-400">@</span>
                <span className="wiggle7 text-pink-500">r</span>
                <span className="wiggle8 text-yellow-500">e</span>
                <span className="wiggle9 text-green-500">a</span>
                <span className="wiggle10 text-pink-500">l</span>
                <span className="wiggle11 text-sky-400">g</span>
                <span className="wiggle1 text-yellow-500">o</span>
                <span className="wiggle2 text-purple-500">o</span>
                <span className="wiggle3 text-pink-500">d</span>
                <span className="wiggle4 text-sky-400">.</span>
                <span className="wiggle5 text-pink-500">t</span>
                <span className="wiggle6 text-yellow-500">v</span>
                {hoverEmail ? (
                  <img
                    src="send.png"
                    alt="send"
                    className="w-[1.3em] inline m-2 noselect"
                  />
                ) : (
                  <img
                    src="email.png"
                    alt="email"
                    className="w-[1.3em] inline m-2 noselect"
                  />
                )}
              </span>
              {/* <span
                className="thumbcursor"
                onMouseEnter={() => setHoverEmail(true)}
                onMouseLeave={() => setHoverEmail(false)}
              >
                <span>hello@realgood.tv</span>
                {hoverEmail ? (
                  <img
                    src="send.png"
                    alt="send"
                    className="w-[1.3em] inline m-2 noselect"
                  />
                ) : (
                  <img
                    src="email.png"
                    alt="email"
                    className="w-[1.3em] inline m-2 noselect"
                  />
                )}
              </span> */}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
