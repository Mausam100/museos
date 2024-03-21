import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);




const DateCom = () => {
  return (
    <section className="px-4 mb-36 md:mb-60">
      <div className="grid grid-cols-3 sm:grid-cols-2 items-end ">
        <div className=" md:mt-4 flex col-span-2 sm:col-span-1 overflow-hidden h-72 max-sm:h-60 items-end">
          <motion.h2 
           
          className="text-[28vw] sm:text-[23vw] lg:text-[15.5rem] xl:text-[17rem] 2xl:text-[20rem] flex items-center tracking-tighter mt-10">
                  <motion.div
                   initial={{y:"90%"}}
                   transition={{ delay:0.3,  duration:2 }}
                   whileInView={{ y:"80%"}}
                  className="flex flex-col overflow-hidden">
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>

                  </motion.div>
                  <motion.div 
                  initial={{y:"90%"}}
                  transition={{ delay:0.4,  duration:2 }}
                  whileInView={{ y:"10%"}}
                  className=" overflow-hidden flex flex-col">
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>

                  </motion.div>
                  <motion.div
                  initial={{y:"90%"}} 
                   transition={{ delay:0.5,  duration:2 }}
                   whileInView={{ y:"0%"}}
                  className=" overflow-hidden flex flex-col">
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>

                  </motion.div>
                  <motion.div  
                   initial={{y:"90%"}}
                   transition={{ delay:0.4,  duration:2 }}
                   whileInView={{ y:"10%"}}

                  className=" overflow-hidden flex flex-col">
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>

                  </motion.div>
          </motion.h2>
        </div>
        <div className="mb-6">
          <p class="text-sm md:text-2xl font-medium">(Date of artwork)</p>
        </div>
      </div>
    </section>
  );
};

export default DateCom;
