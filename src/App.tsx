import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cover, MorseCodePage, TableOfContentsPage1, TableOfContentsPage2, ChapterOneP1, ChapterOneP2, ChapterTwoP1, ChapterTwoP2, ChapterThreeP1, ChapterThreeP2, ChapterFourP1, ChapterFourP2, ChapterFiveP1, ChapterFiveP2, ChapterSixP1, ChapterSixP2, ChapterSevenP1, ChapterSevenP2, ChapterEightP1, ChapterEightP2, ChapterEightP3, ChapterNineP1, ChapterNineP2, ChapterTenP1, ChapterTenP2, ChapterElevenP1, ChapterElevenP2, ChapterTwelveP1, ChapterTwelveP2, ChapterThirteenP1, ChapterThirteenP2, ChapterFourteenP1, ChapterFourteenP2, ChapterFifteenP1, ChapterFifteenP2, ChapterSixteenP1, ChapterSixteenP2, ChapterSeventeenP1, ChapterSeventeenP2, ChapterEighteenP1, ChapterEighteenP2, ChapterNineteenP1, ChapterNineteenP2, ChapterNineteenP3, ChapterTwentyP1, ChapterTwentyP2, ChapterTwentyP3, ChapterTwentyP4, LatinPostscriptP1, LatinPostscriptP2, LatinPostscriptP3, LatinEndPage, StenoPage } from './components/BookPages';

const pages = [
  Cover,
  MorseCodePage,
  TableOfContentsPage1,
  TableOfContentsPage2,
  ChapterOneP1,
  ChapterOneP2,
  ChapterTwoP1,
  ChapterTwoP2,
  ChapterThreeP1,
  ChapterThreeP2,
  ChapterFourP1,
  ChapterFourP2,
  ChapterFiveP1,
  ChapterFiveP2,
  ChapterSixP1,
  ChapterSixP2,
  ChapterSevenP1,
  ChapterSevenP2,
  ChapterEightP1,
  ChapterEightP2,
  ChapterEightP3,
  ChapterNineP1,
  ChapterNineP2,
  ChapterTenP1,
  ChapterTenP2,
  ChapterElevenP1,
  ChapterElevenP2,
  ChapterTwelveP1,
  ChapterTwelveP2,
  ChapterThirteenP1,
  ChapterThirteenP2,
  ChapterFourteenP1,
  ChapterFourteenP2,
  ChapterFifteenP1,
  ChapterFifteenP2,
  ChapterSixteenP1,
  ChapterSixteenP2,
  ChapterSeventeenP1,
  ChapterSeventeenP2,
  ChapterEighteenP1,
  ChapterEighteenP2,
  ChapterNineteenP1,
  ChapterNineteenP2,
  ChapterNineteenP3,
  ChapterTwentyP1,
  ChapterTwentyP2,
  ChapterTwentyP3,
  ChapterTwentyP4,
  LatinPostscriptP1,
  LatinPostscriptP2,
  LatinPostscriptP3,
  LatinEndPage,
  StenoPage
];

export default function App() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < pages.length) {
      setPage([newPage, newDirection]);
    }
  };

  const goToPage = (targetPageIndex: number) => {
    if (targetPageIndex >= 0 && targetPageIndex < pages.length) {
      const direction = targetPageIndex > page ? 1 : -1;
      setPage([targetPageIndex, direction]);
    }
  };

  const variants = {
    enter: (direction: number) => {
      return {
        rotateY: direction > 0 ? 90 : -90,
        opacity: 0,
        scale: 0.98,
        transformOrigin: "left center"
      };
    },
    center: {
      zIndex: 1,
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transformOrigin: "left center",
      boxShadow: "0px 10px 30px rgba(0,0,0,0.15)"
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        rotateY: direction < 0 ? 90 : -90,
        opacity: 0,
        scale: 0.98,
        transformOrigin: "left center"
      };
    }
  };

  const CurrentPage = pages[page];

  return (
    <div className="fixed inset-0 w-full h-full bg-[#D4D1C5] flex justify-center items-center overflow-hidden font-sans">
      <div className="relative w-full max-w-[380px] h-full max-h-[720px] md:h-[90dvh] md:rounded-[55px] overflow-hidden bg-[#1a1a1a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] md:border-[10px] border-[#252525] flex flex-col p-1">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#252525] rounded-b-2xl z-50 md:block hidden"></div>
        
        {/* Page Container */}
        <div 
          className="relative flex-1 w-full h-full md:rounded-[42px] overflow-hidden bg-[#FCFBF7]"
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                rotateY: { type: "spring", stiffness: 100, damping: 18 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.3 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, { offset }) => {
                if (offset.x < -60) {
                  paginate(1);
                } else if (offset.x > 60) {
                  paginate(-1);
                }
              }}
              style={{ 
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d"
              }}
              className="absolute inset-0 w-full h-full touch-none cursor-grab active:cursor-grabbing"
            >
              <CurrentPage goToPage={goToPage} />
            </motion.div>
          </AnimatePresence>

          {/* Elegant book spine shadow overlay for real-world depth */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/10 via-black/5 to-transparent pointer-events-none z-30 select-none"></div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-[#333] rounded-full md:block hidden"></div>
      </div>
    </div>
  );
}
