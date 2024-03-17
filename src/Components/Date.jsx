import React from "react";
import  { useEffect, useLayoutEffect, useRef  } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DateCom = () => {

  const text = useRef(null);


  useEffect(()=>{
    const date = text.current;
    

    gsap.from(
      date,{
        y: 50,
        stagger: .1,
        scrollTrigger:{
          scroller:"body",
          start: "top -80%",
          end: "top -75%",
          scrub: 3,
          ease: "cubic-bezier(0.7, 0, 0.84, 0)",
          toggleActions: "restart pause reverse pause",
        }

      }
    )
  });


  return (
    <section id="date" class="px-4 mb-36 md:mb-60">
      <div class="grid grid-cols-3 sm:grid-cols-2 items-end">
        <div class="flex col-span-2 sm:col-span-1">
          <h2 ref={text} class="text-[28vw] sm:text-[23vw] lg:text-[15.5rem] xl:text-[17rem] 2xl:text-[20rem] flex items-start tracking-tighter mt-10 ">
            <span>1</span><span>8</span><span>9</span><span>8</span>
          </h2>
        </div>
        <div class="col-span-1">
          <p class="text-sm md:text-2xl mb-12 sm:mb-20 font-medium">(Date of artwork)</p>
        </div>
      </div>
    </section>
  );
};

export default DateCom;
