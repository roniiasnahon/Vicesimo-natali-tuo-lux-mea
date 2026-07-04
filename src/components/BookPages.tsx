

const PageNumber = ({ number }: { number: number }) => (
  <div className="absolute bottom-6 left-0 right-0 text-center text-[12px] font-serif text-[#A69D8B] z-10 select-none">
    - {number} -
  </div>
);

const DecorativeCorner = () => (
  <div className="absolute bottom-10 -right-10 w-24 h-24 bg-[#E5E2D9] rotate-45 transform origin-center opacity-40 pointer-events-none z-0"></div>
);

const RunningHead = ({ title = "Chapter One" }: { title?: string }) => (
  <div className="w-full flex justify-start items-center text-[10px] uppercase tracking-[0.25em] text-[#A69D8B] font-sans mb-4 border-b border-[#EAE6DB] pb-3 z-10 select-none">
    <span>{title}</span>
  </div>
);

export const Cover = () => (
  <div className="flex flex-col items-center justify-between h-full w-full book-page text-[#3A4031] p-8 pt-16 pb-16 text-center relative overflow-hidden">
    <div className="flex-grow flex flex-col justify-center items-center">
      <h1 className="text-5xl font-normal font-serif mb-2 leading-tight text-[#2A2D24] italic select-all">
        Inmotus inter fluctus
      </h1>
      <div className="w-12 h-[1px] bg-[#A69D8B] my-6 opacity-60"></div>
    </div>

    <div className="mt-auto mb-4">
      <p className="text-sm font-serif text-[#2A2D24] font-medium tracking-wide">
        Jamm P. Claude
      </p>
    </div>
    
    <DecorativeCorner />
  </div>
);

export const MorseCodePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full book-page text-[#3A4031] p-8 text-center relative overflow-hidden">
      <div className="text-xl font-mono tracking-widest text-[#2A2D24] max-w-xs mx-auto leading-relaxed z-10 select-all">
        .. / .-.. --- ...- . / -.-- --- ..- / . .-. .. -.-. -.- .-
      </div>
      <DecorativeCorner />
    </div>
  )
}

export const TableOfContentsPage1 = ({ goToPage }: { goToPage?: (index: number) => void }) => {
  const chapters = [
    { roman: "I", index: 4, pNum: 1 },
    { roman: "II", index: 6, pNum: 3 },
    { roman: "III", index: 8, pNum: 5 },
    { roman: "IV", index: 10, pNum: 7 },
    { roman: "V", index: 12, pNum: 9 },
    { roman: "VI", index: 14, pNum: 11 },
    { roman: "VII", index: 16, pNum: 13 },
    { roman: "VIII", index: 18, pNum: 15 },
    { roman: "IX", index: 21, pNum: 18 },
    { roman: "X", index: 23, pNum: 20 }
  ];

  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-12 relative overflow-hidden justify-between">
      <div className="flex-grow flex flex-col justify-start">
        <div className="w-full flex justify-center items-center text-[10px] uppercase tracking-[0.25em] text-[#A69D8B] font-sans mb-12 border-b border-[#EAE6DB] pb-3 z-10 select-none">
          <span>Table of Contents</span>
        </div>

        <div className="flex-grow flex flex-col justify-center max-w-[260px] w-full mx-auto space-y-4 z-10 pb-8">
          {chapters.map((ch) => (
            <button
              key={ch.roman}
              onClick={() => goToPage?.(ch.index)}
              className="flex justify-between items-baseline text-xs font-serif text-[#2A2D24] hover:text-[#C5B358] transition-colors cursor-pointer select-none group py-1"
            >
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#A69D8B] group-hover:text-[#C5B358] font-medium">
                Ch. {ch.roman}
              </span>
              <span className="flex-grow border-b border-dotted border-[#E5E2D9] mx-2 opacity-60"></span>
              <span className="font-mono text-[10px] text-[#A69D8B] group-hover:text-[#C5B358]">
                p.{ch.pNum}
              </span>
            </button>
          ))}
        </div>
      </div>
      <DecorativeCorner />
    </div>
  );
};

export const TableOfContentsPage2 = ({ goToPage }: { goToPage?: (index: number) => void }) => {
  const chapters = [
    { roman: "XI", index: 25, pNum: 22 },
    { roman: "XII", index: 27, pNum: 24 },
    { roman: "XIII", index: 29, pNum: 26 },
    { roman: "XIV", index: 31, pNum: 28 },
    { roman: "XV", index: 33, pNum: 30 },
    { roman: "XVI", index: 35, pNum: 32 },
    { roman: "XVII", index: 37, pNum: 34 },
    { roman: "XVIII", index: 39, pNum: 36 },
    { roman: "XIX", index: 41, pNum: 38 },
    { roman: "XX", index: 44, pNum: 41 }
  ];

  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-12 relative overflow-hidden justify-between">
      <div className="flex-grow flex flex-col justify-start">
        <div className="w-full flex justify-center items-center text-[10px] uppercase tracking-[0.25em] text-[#A69D8B] font-sans mb-12 border-b border-[#EAE6DB] pb-3 z-10 select-none">
          <span>Table of Contents</span>
        </div>

        <div className="flex-grow flex flex-col justify-center max-w-[260px] w-full mx-auto space-y-4 z-10 pb-8">
          {chapters.map((ch) => (
            <button
              key={ch.roman}
              onClick={() => goToPage?.(ch.index)}
              className="flex justify-between items-baseline text-xs font-serif text-[#2A2D24] hover:text-[#C5B358] transition-colors cursor-pointer select-none group py-1"
            >
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#A69D8B] group-hover:text-[#C5B358] font-medium">
                Ch. {ch.roman}
              </span>
              <span className="flex-grow border-b border-dotted border-[#E5E2D9] mx-2 opacity-60"></span>
              <span className="font-mono text-[10px] text-[#A69D8B] group-hover:text-[#C5B358]">
                p.{ch.pNum}
              </span>
            </button>
          ))}
        </div>
      </div>
      <DecorativeCorner />
    </div>
  );
};

export const ChapterOneP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">One</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">T</span>oday is all about you, and I really want to make it as special and personalized as possible, because you deserve nothing less. I just want to take this moment to tell you how incredibly thankful I am that you are my girlfriend.</p>
           <p>Looking back at everything, I realize there are so many things you’ve made me feel that I never thought possible. You bring a constant sunshine into my life, and that’s all thanks to your bright smile.</p>
           <p>Honestly, whenever things get overwhelming and I’m forced to deal with stuff I’d rather avoid, just thinking of you or seeing you smile makes everything feel completely bearable.</p>
           <p>Hindi ko talaga alam kung anong mayroon sa ‘yo, pero you have this amazing power to completely shift my mood and make me happy in just a few short words.</p>
         </div>
       </div>
       <PageNumber number={1} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterOneP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>And it’s not just about the words we say, either. Even the silence between us is so comfortable and deeply meaningful. We don't always need to fill the air with talking; just being in your presence is enough to make me feel safe and at peace.</p>
           <p>Alam ko naman na may mga times na medyo mayroon tayong hindi pagkakaintindihan. We have our rough days and minor misunderstandings, just like anyone else.</p>
           <p>But what I love most about us is that alam kong maya-maya lang, magiging okay din tayong dalawa. We never let the bad moments win because we are just that powerful together. We choose each other, over and over again. Thank you for being my comfort zone, my biggest joy, and my best friend.</p>
         </div>
       </div>
       <PageNumber number={2} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterTwoP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Two</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">T</span>here is this beautiful durability to our love whenever we are together, and it feels like we can weather absolutely anything. Countless times I’ve told you that you are the single greatest thing that has ever happened to me. (Well, besides the day I was actually born, hehehe, kasi obviously I wouldn’t even be here to love you if hindi. But you know exactly what I mean.)</p>
           <p>Every single day, I find myself completely mesmerized by how you do things, how you carry yourself, and who you are. Watching you just makes me want to love you even more than I already do.</p>
         </div>
       </div>
       <PageNumber number={3} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterTwoP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Two" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>I need you to know that these words aren’t just empty lines. This is all about you, and only you. I want my baby to always feel completely reassured, safe, and deeply cared for, because you deserve every ounce of happiness in this world.</p>
           <p>To me, you are the most genuine, most amazing, and the most motivated person I have ever known. Alam ko naman na palagi mo 'kong kinokontra kapag sinasabi kong “sana hindi ka magbago.” You always correct me and say, “I’ll change, I will love you more.”</p>
           <p>Honestly? I really hope you do love me more as time goes on, because being loved by someone as incredible as you will always, always be the best feeling in the entire world.</p>
         </div>
       </div>
       <PageNumber number={4} />
       <DecorativeCorner />
    </div>
  )
}


export const ChapterThreeP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Three</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">L</span>ooking back, the first time I met you on that strange site, I honestly thought you were just someone who would pass by after half an hour or so. I figured you would just disappear and go "poof" just like that, because sa totoo lang, bub,, nobody ever stays there permanently.</p>
           <p>But then, strangely enough, I found myself completely locked in sa ‘yo, just listening to you talk about whatever was on your mind. It didn't even matter if it was about things I had absolutely no idea about; I was just captivated. We ended up talking for nearly two hours straight, and neither of us even noticed how fast the time was flying.</p>
         </div>
       </div>
       <PageNumber number={5} />
       <DecorativeCorner />
     </div>
  )
}

export const ChapterThreeP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Three" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>Sayang lang talaga because I don't have a copy or a screenshot of our very first messages. But even without it, it was such a great exchange, and it completely changed the way I view the people there. Out of all the random corners of the internet, and against all the odds, I can truly say that I met the love of my life on that strange site.</p>
         </div>
       </div>
       <PageNumber number={6} />
       <DecorativeCorner />
     </div>
  )
}

export const ChapterFourP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Four</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">H</span>ow did I deserve someone like you? I ask myself that every single day. You are just incredibly smart. And it's not just about being book smart; you are wise in ways that genuinely make me wanna level up and be a better version of myself too.</p>
           <p>You checked every single box I ever had for a partner. You didn't just meet the bar, you completely raised it, babi. You are the exact fit for everything I was looking for, way before I even realized it. Parang bago pa lang kita nahanap, ikaw na talaga yung sagot sa mga tanong na hindi ko pa alam na itatanong ko.</p>
         </div>
       </div>
       <PageNumber number={7} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterFourP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Four" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>You are the absolute definition of beauty, and I would like to stress that as much as possible. BEAUTY. Capital B. E. A. U. T. Y. BEAUTY. Yes!!! Alam mo kung bakit? It’s because of the way you care, your selflessness, and all the little things that make you exactly who you are.</p>
           <p>You're a fundamentally good person, you're an amazing daughter, you're the best sister, and you are hands down the greatest woman I have ever known. This chapter right here is just to praise you because of how good you are, because you always, always are.</p>
         </div>
       </div>
       <PageNumber number={8} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterFiveP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Five</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">I</span>t started out as just a completely normal, ordinary day on the calendar. There was nothing in the air to suggest that my entire world was about to shift, but as the clock ticked closer and closer to 4 P.M. on April 24, 2026, everything changed forever. That was the exact moment you finally said yes to me. Naalala ko, brownout pa sa boarding hourse mo ‘yon.</p>
           <p>When the words actually were sent, my heart stopped for a second before completely racing. I was flooded with this pure, unfiltered rush of adrenaline and joy. I was so incredibly ecstatic, thrilled, and just completely overwhelmed by the fact that this girl is officially my girlfriend. Para akong lumulutang at hindi makapaniwala.</p>
         </div>
       </div>
       <PageNumber number={9} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterFiveP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Five" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>Honestly, I genuinely thought I was hallucinating for a moment. I had to pause and let reality sink in because it felt too perfect to be real, but it wasn't a dream at all. It was all beautifully, wonderfully true. You were mine, and I was yours.</p>
           <p>You said that I had proved to you that I deserved to be called your boyfriend. Hearing that from you meant the absolute world to me. It wasn't just about making it official, it was knowing that the effort, the love, and the care I put into us actually reached your heart.</p>
           <p>Winning your love is the greatest achievement of my life, and I will spend every single day making sure you never regret that beautiful 4 P.M. moment.</p>
         </div>
       </div>
       <PageNumber number={10} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterSixP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Six</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">A</span> lot of people love to talk about the rules of romance. They always say that for a love to work, it has to match perfectly, like two identical puzzle pieces. They believe you have to be at the exact same pace, have the exact same background, or fit into this neat, predictable little box where everything aligns on paper.</p>
           <p>But with you, all those conventional rules completely went out the window. We didn't fit the standard mold, and honestly, that is the most beautiful part of our love, babi.</p>
         </div>
       </div>
       <PageNumber number={11} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterSixP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Six" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>We didn't need to match perfectly because we complemented each other in ways I never knew I needed. Where I am quiet, you might bring life; where you are moving fast, I can be your anchor, and when the world gets too chaotic for me, you are the one who makes it all bearable.</p>
           <p>Our love wasn't built on being identical; it was built on this deep, unbreakable rhythm that we created entirely on our own. It taught me that real love isn't about finding a mirror image of yourself. It's about finding the person who makes you want to level up, the one who raises the bar just by being who they are.</p>
           <p>We proved that love doesn't have to follow a traditional script to be powerful. We wrote our own rules, and I wouldn't trade our unique, beautifully unmatched harmony for anything in the world.</p>
         </div>
       </div>
       <PageNumber number={12} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterSevenP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Seven</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">I</span> can say with absolute certainty that whatever we have right now, and whatever beautiful chapters we will write together in the future, will always be the absolute best thing I’ve ever had in my life, pengu.</p>
           <p>It doesn’t matter where life takes us, what chaotic paths we have to cross, or where I physically end up in this world. The coordinates don't matter anymore, because as long as I am with you, I am exactly where I belong. You have become my constant, my safe harbor, and my home. I cherish every single bit of what we share, down to the smallest, seemingly insignificant details.</p>
         </div>
       </div>
       <PageNumber number={13} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterSevenP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Seven" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>I deeply cherish the memory of the exact moment you finally looked at me, said yes, and made me the happiest guy alive. That was the turning point where everything shifted, and my life became infinitely brighter. I hold onto the way you look at me, the comforting sound of your voice, the random late-night talks that blend into mornings, and even those quiet spaces between us where words aren't even necessary.</p>
           <p>Every single laugh we share, every reassuring look, and every single day I get to carry the title of being your boyfriend is a gift I promise never to take for granted. You’ve given me a love that is incredibly durable, completely unique, and entirely ours. I am going to protect, honor, and cherish this beautiful bond we have for the rest of my days, because being loved by you is the greatest thing that has ever happened to me.</p>
         </div>
       </div>
       <PageNumber number={14} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterEightP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Eight</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">Y</span>our randomness is your entire identity, the very essence of who you are, and honestly, without it, you just wouldn't be you. It is the core of your charm, woven into all those unpredictable quirks, the sudden bursts of energy, and the beautiful, unfiltered way you navigate the world.</p>
           <p>You have never been someone who conforms to a script or follows a neat, predictable path, and that is exactly what makes you so captivating to be around. Your spontaneity is the exact magic that drew me to you in the first place, back when we were just strangers talking on that strange site.</p>
           <p>It is the reason why every single day with you feels like a brand new adventure rather than just a routine, because you bring a color to my life that I never could have anticipated, mahal ko.</p>
         </div>
       </div>
       <PageNumber number={15} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterEightP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Eight" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>I never want you to feel like you have to tone yourself down, change your pace, or blend into the background to fit in. I love the beautiful chaos and the wonderful rhythm you bring into my world, even when it catches me completely off guard. It keeps me on my toes, it makes me laugh when I least expect it, and it constantly reminds me how lucky I am to have someone so wonderfully one of a kind by my side.</p>
           <p>Looking back at how we started, it was that exact unpredictable nature of yours that kept me listening for hours when I thought you would just disappear, babu. You broke all the conventional rules of how people are supposed to connect, and in doing so, you showed me a depth of love I didn't know existed.</p>
         </div>
       </div>
       <PageNumber number={16} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterEightP3 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Eight" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>Never lose that part of yourself, babi, because your beautiful randomness is the very definition of who you are. It is the foundation of the durable, powerful love we have built together, and it is the quality I promise to cherish the most as we grow. I love every single unpredictable bit of it, and I love you exactly as you are.</p>
         </div>
       </div>
       <PageNumber number={17} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterNineP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Nine</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">S</span>omeone like you comes around only once in a lifetime, the kind of rare, beautiful presence that completely rewires a person’s world. People spend years searching for a love that feels real, searching for someone who checks every box and raises the bar just by being themselves, and most never find it.</p>
           <p>I used to think that kind of deep, durable connection was just something you read about in stories or watched on a screen. But then you stepped into my life, and you completely changed the definition of what love could be. You aren't like anyone else I have ever known, and that is your absolute power.</p>
         </div>
       </div>
       <PageNumber number={18} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterNineP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Nine" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>From the moment we stayed up talking for hours against all odds, to every single daily smile that makes my hardest days bearable, you have proven to be the most genuine, selfless, and motivated woman I’ve ever met. You are a literal breath of fresh air in a world that can get so heavy and predictable.</p>
           <p>Finding you felt like discovering a rare treasure in the most unexpected corner of the world, a beautiful reminder that the best things in life are the ones you never see coming. It makes me realize how incredibly lucky I am to be the one standing by your side, feeling you, and calling you my girlfriend.</p>
           <p>Someone as special, as bright, and as wonderfully random as you doesn't just happen by accident. You are a once-in-a-lifetime blessing, babi, and I am going to spend every single day making sure you know just how deeply you are cherished.</p>
         </div>
       </div>
       <PageNumber number={19} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterTenP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Ten</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">I</span> started calling you “pengu” because, from the very beginning, you just completely reminded me of a penguin. They are honestly the cutest, most endearing birds in the entire world, and that is exactly how I see you. There is this gentle, precious, and wonderfully unique energy about you that mirrors them perfectly, and the nickname just stuck because it fits your sweet personality so incredibly well.</p>
           <p>Every single time I say that name or think about it, it brings this immediate warmth to my heart and a smile to my face. It’s become this special little thread in our story, a reminder of how effortlessly cute you are just by being yourself.</p>
         </div>
       </div>
       <PageNumber number={20} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterTenP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Ten" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>You don’t even have to try to be adorable; it’s just naturally woven into the way you do things, the way you care, and how you carry yourself. To the rest of the world, penguins might just be a random animal, but to me, they represent everything that makes you so completely captivating and soft.</p>
           <p>It’s a title reserved just for you, babi, because nobody else could ever match that exact level of cuteness. You are my very own pengu, the rarest and most beautiful one out there, and I love you more than words can say.</p>
         </div>
       </div>
       <PageNumber number={21} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterElevenP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Eleven</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">T</span>he day you told me you love sunflowers, something shifted inside me. Before you came along, they were just ordinary flowers standing in fields, completely unnoticed by me. But the moment you shared that little piece of your heart, you gave them a whole new meaning.</p>
           <p>Now, whenever I see those bright, golden petals reaching toward the sky, my mind instantly jumps to you. I think about your radiant, infectious smile and the way you bring a constant, brilliant sunshine into my life, making even my heaviest, most unbearable days feel completely manageable.</p>
         </div>
       </div>
       <PageNumber number={22} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterElevenP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Eleven" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>It is amazing how a simple flower can go from being just a plant to becoming a vivid reminder of the person who warms my entire world from the inside out. The exact same thing happened when you told me how much you love chocolates. Just like that, they became one of my favorite things, too.</p>
           <p>It has become this beautiful, quiet rhythm in our story where the things that bring you joy naturally become the things that bring me joy. Watching your passions seamlessly weave themselves into the fabric of who I am is one of the most incredible parts of loving you.</p>
           <p>It is living proof of how deeply you have touched my life, and how much I truly love stepping into your world, embracing every little detail, every quirk, and every single thing that makes my babi happy.</p>
           <p className="italic text-xs opacity-75 pt-2 text-right font-sans">— Just felt being poetic hehe.</p>
         </div>
       </div>
       <PageNumber number={23} />
       <DecorativeCorner />
     </div>
  )
}

export const ChapterTwelveP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Twelve</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">T</span>he way we navigate our world is so beautifully unique, because you are known to me by many names. Over time, you have been Saian, Jaez, Ericka, Raysi, Rairai, and now, Claire.</p>
           <p>To anyone else, a name is just a static label, a fixed point that never changes. But with us, each name feels like a different chapter in our story, a new layer of who you are that I get the privilege of discovering and holding close to my heart. It is like watching a beautiful story unfold, where every single name carries its own memory, its own shared joke, and its own quiet moment between us.</p>
         </div>
       </div>
       <PageNumber number={24} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterTwelveP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Twelve" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>No matter which name we are using, the soul behind it remains the exact same genuine, selfless, and motivated person who completely turned my universe upside down. Every new name is just another way for me to love you, a brand new title for the person who has become my entire world.</p>
           <p>Whether I am calling you by one of your past names or softly calling you Claire or Rairai today, it all points back to the exact same beautiful reality. You are my constant, my anchor, and my babi. The names might shift as we grow and change together, but the love attached to every single one of them only grows more durable, more permanent, and deeper with every passing day.</p>
         </div>
       </div>
       <PageNumber number={25} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterThirteenP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Thirteen</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">A</span>s the days steadily roll forward, the dreams we’ve held so tightly of finally meeting each other are slowly shifting into our reality. For the longest time, we’ve existed in the spaces between our screens, building a love that is incredibly durable despite the distance, but the wait is finally drawing to a close.</p>
           <p>The countdown feels real now, and the thought of finally standing in front of you, looking into your eyes, and seeing that bright, sunshine smile in person makes my heart race in the best way possible.</p>
         </div>
       </div>
       <PageNumber number={26} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterThirteenP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Thirteen" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>We are finally going to do every single thing we planned, down to the very last detail. Whether it’s the simple things like walking side by side, sharing the chocolates you love, or just sitting together in that meaningful silence we’ve always cherished, we are going to cross every single promise off our list.</p>
           <p>No matter what it takes, we will make every moment count, turning all our "one day" conversations into beautiful, unforgettable memories. This is just the beginning of a brand new chapter for us, babi. We’ve already proved how powerful we are together when we’re apart, and I know that once we are finally in the same room, nothing can stop us.</p>
           <p>The distance was just the prologue—I can't wait to finally hold you and start writing the rest of our story together.</p>
         </div>
       </div>
       <PageNumber number={27} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterFourteenP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Fourteen</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">Y</span>ou are my girl, and you will always be. Out of all the people in this world, out of all the random twists and turns that brought us together, you are the one I choose. There is this deep, unbreakable certainty in my heart when it comes to you, a quiet knowledge that no matter what the future holds or where life decides to take us, you are my person.</p>
         </div>
       </div>
       <PageNumber number={28} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterFourteenP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Fourteen" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>Saying those words isn't just a promise for right now; it is a commitment to everything we are building and everything we have yet to face. You have completely rewritten my world with your beautiful randomness, your bright smile, and your selfless heart. Being the guy who gets to love you, protect you, and call you mine is the greatest privilege I have ever known.</p>
           <p>No matter how many days pass, no matter how many new chapters we open or how many names we use for you along the way, that one beautiful truth will never change. You have my heart completely, babi. You are my girl today, tomorrow, and for all the days that come after.</p>
         </div>
       </div>
       <PageNumber number={29} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterFifteenP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Fifteen</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">W</span>e have built so many beautiful dreams together, weaving our futures into a shared tapestry of everything we hope to experience side by side. Yet, among all those plans of ours, one of the deepest and most profound dreams I hold entirely in my heart is simply to see you stand at the very top, triumphantly achieving every single goal you have ever set for yourself.</p>
           <p>Watching how incredibly motivated, resilient, and fiercely passionate you are inspires me on a level I can barely describe, and I want nothing more than to witness you conquer every milestone you've ever aimed for.</p>
         </div>
       </div>
       <PageNumber number={30} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterFifteenP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Fifteen" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>Your ambitions and your happiness matter to me just as much as my own, and seeing your hard work pay off is going to be one of the greatest joys of my entire life. You possess this remarkable, bright potential inside you, babi, and I completely believe in your ability to shatter every ceiling and make every single one of your dreams a living reality.</p>
           <p>No matter how steep the climb gets or how long the journey takes, I promise to be right by your side, supporting you through the challenges, lifting you up, and cheering the absolute loudest as you rise to the very top.</p>
         </div>
       </div>
       <PageNumber number={31} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterSixteenP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Sixteen</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">W</span>e have such a long way ahead of us, love love, but when I look back, I realize we’ve also already come a remarkably long way together. It is crazy to think about how much ground we’ve covered, how many chapters we’ve already written, and how seamlessly our lives have woven into one another despite every single challenge.</p>
           <p>Every laugh, every late-night conversation that turned into morning, and every quiet promise we've made has built this incredibly strong foundation that belongs entirely to us. Looking forward at the future, the road ahead doesn't feel daunting at all because I know exactly whose hand I am holding.</p>
         </div>
       </div>
       <PageNumber number={32} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterSixteenP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Sixteen" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>We have so many plans to execute, so many dreams to turn into reality, and a lifetime of adventures waiting for us just around the corner. Knowing that we face all of it as a team gives me this deep, unshakeable certainty that whatever comes our way, we can handle it. We’ve already proven how durable and powerful our love is, and this is still just the beginning of our story.</p>
           <p>I am so incredibly grateful for every single step we’ve taken to get to where we are right now, and I am even more excited for every single step that is yet to come. No matter how far we have to go, babi, I am right here with you for the long haul, loving you more with every single mile.</p>
         </div>
       </div>
       <PageNumber number={33} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterSeventeenP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Seventeen</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">I</span> may not possess the grand, material wealth of this world, nor do I have all the tangible things that people spend a lifetime fighting to accumulate, but the very moment I am with you, it feels as though the entire universe has quietly settled right into the palm of my hands. It is a beautiful, almost breathless shift in reality, where the external noise of the world completely loses its weight.</p>
           <p>You have this effortless way of filling every quiet corner and empty space in my life, transforming a simple existence into something incredibly rich, grounded, and whole, simply because you are mine.</p>
         </div>
       </div>
       <PageNumber number={34} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterSeventeenP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Seventeen" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>When we are caught up in our own little world, sharing those random conversations that stretch across the late hours of the night, all the anxieties about what I lack or what I have yet to achieve just fade into the background.</p>
           <p>Your love is a sanctuary that gives me an unshakeable sense of security and power—a deep, poetic certainty that as long as your fingers are intertwined with mine, I am already completely undefeated. You are my absolute greatest wealth, babi, the true anchor of my life, and with you standing firmly by my side, I know I will never walk a single day feeling empty again.</p>
         </div>
       </div>
       <PageNumber number={35} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterEighteenP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Eighteen</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">“I</span> am your own girl,” it hit me in a way I wasn't entirely prepared for. It wasn't just a sweet phrase passing through a screen. It was a sudden, breathless moment of clarity that echoed deep within my chest.</p>
           <p>In a world full of so much noise, unpredictability, and fleeting connections, hearing you claim your place in my life with such beautiful certainty made everything else completely fade away. It was a gentle but powerful reminder of the incredible reality we have built together, a truth that settled into my heart and refused to leave.</p>
         </div>
       </div>
       <PageNumber number={36} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterEighteenP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Eighteen" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>That single, quiet admission made me realize, with absolute certainty, that I am the luckiest guy alive. To know that a soul as genuine, motivated, and beautifully rare as yours belongs in my world, and that I belong in yours, is a privilege I will never take for granted.</p>
           <p>It turned all the miles between us into nothing more than a temporary backdrop to a love that is already so permanent and durable. You aren't just a part of my life, babi. You are my anchor, my sunshine, and my very own girl, and knowing that is all the wealth I will ever need to carry.</p>
         </div>
       </div>
       <PageNumber number={37} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterNineteenP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Nineteen</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">W</span>hy am I writing this? I wrote this because the quiet inside my chest gets too loud whenever I think of you, and these words are the only way I can map out the sheer scale of my own obsession. It is a strange and wonderful thing to realize how completely you have taken over my mind, turning every ordinary thought into a memory of us.</p>
           <p>Every line I write is a confession, a way for me to look closely at my own heart and trace the exact moments where you became my entire universe.</p>
         </div>
       </div>
       <PageNumber number={38} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterNineteenP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Nineteen" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>I do this to let you know, without a single shadow of a doubt, that I am entirely and irrevocably in love with you. This is not a gentle, passive kind of affection that sits quietly in the background. It is a living, breathing force that shapes everything I do, from the random hours of my day to the deepest, most ambitious dreams I carry for our future.</p>
           <p>When I write to you, I am holding up a mirror to the way you have rewritten my life, documenting the story of a guy who found his absolute anchor in your bright smile, your selfless heart, and the simple truth that you are my own girl.</p>
         </div>
       </div>
       <PageNumber number={39} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterNineteenP3 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Nineteen" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>This devotion is woven into everything we share, lingering in the late-night conversations we keep alive and the promises we are finally about to make real. I want you to read these words and feel the physical weight of a love that belongs completely to you, knowing that no matter how long the road ahead might be, I am already exactly where I belong. I write because loving you is a story that deserves to be told over and over again, and I never want to stop finding new ways to tell you that you are my past, my present, and my forever, babi.</p>
         </div>
       </div>
       <PageNumber number={40} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterTwentyP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <h2 className="text-4xl font-serif mb-4 z-10 text-[#2A2D24] leading-tight italic">
           Chapter<br/>
           <span className="not-italic font-bold text-5xl">Twenty</span>
         </h2>
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-3 opacity-90 font-body z-10">
           <p><span className="drop-cap font-serif text-5xl">T</span>he twentieth chapter of this book is finally here, and it is something I want to softly remind you of, a quiet monument marking a magnificent milestone of your life. For so long, we have been reading through the earlier pages, celebrating the quiet beginnings, the shared late-night laughter, and the beautiful growth that brought us to this exact moment.</p>
           <p>Now, the numbers shift, and a brand new era opens up before you, carrying the weight of everything you have conquered and the brilliant promise of everything you are destined to become.</p>
         </div>
       </div>
       <PageNumber number={41} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterTwentyP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Twenty" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>This is the moment where the melody of your youth deepens into something richer, a sacred transition into a landscape where your dreams take on a whole new power. You have spent two decades gathering grace, building a heart so selfless and driven, and transforming the world around you simply by existing within it.</p>
           <p>To watch you arrive at this milestone is like watching a rare flower finally open its petals to the morning light, radiating a warmth that catches everyone in its glow.</p>
         </div>
       </div>
       <PageNumber number={42} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterTwentyP3 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Twenty" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>It is the beginning of a deeper story, a chapter where you stand a little taller, dream a little bigger, and let the full force of your potential take flight. I want you to hold this moment close to your heart, babi, and realize just how incredible it is to see you arrive here. This milestone belongs entirely to you, a testament to the resilient, motivated soul who has completely rewritten my universe.</p>
           <p>The road behind us was just the preparation, and now, the most beautiful pages of your story are waiting to be written.</p>
         </div>
       </div>
       <PageNumber number={43} />
       <DecorativeCorner />
    </div>
  )
}

export const ChapterTwentyP4 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Chapter Twenty" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body italic z-10 pt-4">
           <p>You are my constant, my anchor, and my very own girl, through this beautiful chapter and every single volume yet to come. Let us turn the page together, babi, and write the rest of our forever.</p>
           <p className="mt-6 font-bold not-italic">Happy birthday, my dear Ericka. I forever love you.</p>
         </div>
       </div>
       <PageNumber number={44} />
       <DecorativeCorner />
    </div>
  )
}

export const LatinPostscriptP1 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Postscriptum" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p><span className="drop-cap font-serif text-5xl">F</span>ortasse hodie non habeo placentam pulchre ornatam quam ante te ponam, nec fasciculum florum recentium quem tibi manibus tradam dum hoc limen admirabile transis. Distantia adhuc tributum suum temporarium exigit a nobis, manus meas vacuas relinquens rebus tangibilibus quas tam profunde meres in momento tam insigni.</p>
           <p>Sed in eorum absentia, liber hic vero suo fungatur officio. Verba haec fiant locus sacer ubi conveniamus, spatium sanctum ubi cor meum effundat omnia quae dona corporalia numquam plene capere possunt.</p>
         </div>
       </div>
       <PageNumber number={45} />
       <DecorativeCorner />
    </div>
  )
}

export const LatinPostscriptP2 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Postscriptum" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>Placenta dulcis esset tantum ad breve momentum, et flores pulcherrimi inevitabiliter marcescunt diebus transeuntibus. Sed verba quae in paginas huius vicesimi capitis sculpimus permanentia sunt. Texta sunt ex amore durabili, patienti, et penitus, pulchre absorpto ab anima quam es.</p>
           <p>Hoc nostri fragmentum sit fragrantia quae cubiculum tuum hodie implet, et devotio mea calor qui te circumdat dum adventum huius magnificae novae aetatis celebras. Haec est via mea te amplectendi cum mundus nos separare conatur, testimonium in pura affectione scriptum ut tibi commoneat te numquam solam ambulare.</p>
         </div>
       </div>
       <PageNumber number={46} />
       <DecorativeCorner />
    </div>
  )
}

export const LatinPostscriptP3 = () => {
  return (
    <div className="flex flex-col h-full w-full book-page text-[#3A4031] p-8 pt-10 pb-16 relative overflow-hidden justify-between">
       <div className="flex-grow flex flex-col justify-start">
         <RunningHead title="Postscriptum" />
         <div className="text-[#3A4031] text-[14px] leading-relaxed space-y-4 opacity-90 font-body z-10 pt-1">
           <p>Si possem, universum totum in fasciculum ligarem et ad pedes tuos ponerem tantum ut illum splendidum solisequium tuum viderem. Sed donec dies veniat ubi omnia consilia nostra tandem peragere possimus, cor meum totum tibi do his versibus vinctum.</p>
           <p>Liber hic sit celebratio tua, solatium tuum, et iuge monimentum te esse divitias meas maximas, babi. Paginam vertimus in annum vitae tuae optimum, et ego hic adsum, te per singula verba amans.</p>
         </div>
       </div>
       <PageNumber number={47} />
       <DecorativeCorner />
    </div>
  )
}

export const LatinEndPage = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full book-page text-[#3A4031] p-8 pt-12 pb-16 text-center relative overflow-hidden">
      <div className="w-full flex justify-center items-center text-[10px] uppercase tracking-[0.25em] text-[#A69D8B] font-sans border-b border-[#EAE6DB] pb-3 select-none">
        <span>Finis</span>
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center my-auto">
        <h2 className="text-3xl font-serif text-[#2A2D24] leading-tight italic max-w-[90%]">
          Felix dies natalis, amor meus.<br/>
          Te amo plus quam verbis dici potest.
        </h2>
      </div>
      
      <PageNumber number={48} />
      <DecorativeCorner />
    </div>
  )
}

export const StenoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full book-page text-[#3A4031] p-8 pb-16 text-center relative overflow-hidden">
      <div className="flex-grow flex flex-col items-center justify-center my-auto w-full px-4">
        <img 
          src="/steno.gif" 
          alt="Stenographia" 
          className="max-w-[85%] max-h-[360px] object-contain rounded-md"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <PageNumber number={49} />
      <DecorativeCorner />
    </div>
  )
}




