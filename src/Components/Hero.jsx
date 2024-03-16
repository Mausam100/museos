import React from "react";
import  { useEffect, useLayoutEffect, useRef  } from "react";
import gsap from "gsap";



const Hero = () => {
  return (
    <section className="hero">
      <div className="px-4 pt-56 md:pt-38 pb-5">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-12 text-balance">
            <div className="md:hidden font-medium text-xl mb-2 is-inview">
              <span className="display: block; text-align: start; position: relative; --i: 0;">
                <span>
                  <p>(Juan Manuel Blanes)</p>
                </span>
              </span>
            </div>
            <h1 className="uppercase font-medium text-[3.5rem] md:text-[10rem] leading-[.875] md:leading-[.8125] tracking-[-.075em] hyphens-auto is-inview">
              <span className="display: block; text-align: start; position: relative; --i: 0;">
                <span> Resurgence of </span>
              </span>
              <span className="display: block; text-align: start; position: relative; --i: 1;">
                <span>the Homeland </span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className=" overflow-hidden w-full">
        <div className="relative w-[180%] md:w-[120%] left-[-40%] md:left-[-10%] ">
          <img
            src="https://museos.arteyeducacion.org/_vercel/image?url=assets%2Fresurgimiento-patria.p_t8GGPO.jpg&w=2048&q=100"
            alt=""
            className=" scale-[1] origin-[0%]"
          />

          <div className="  absolute top-[50%] translate-y-[-50%] left-[-0%] overflow-hidden h-1/3 w-full">
            <img
              src="https://museos.arteyeducacion.org/_vercel/image?url=assets%2Fresurgimiento-patria.p_t8GGPO.jpg&w=2048&q=100"
              alt=""
              className=" w-full h-full object-cover scale-[1] origin-[0%]  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
