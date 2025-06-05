'use client';

import {motion} from 'framer-motion';

const DURATION = 0.25;
const STAGGER = 0.025;

export default function StaggeredHover({children, className}: {children: string; className: string}) {
  return (
    <motion.div
        initial = "initial"
        whileHover= "hovered"
        className = {"relative block overflow-hidden whitespace-nowrap text-black" + " " + className}
        style={{
            textShadow: `
              -3px -3px 0 #1e40af,
               3px -3px 0 #1e40af,
              -3px  3px 0 #1e40af,
               3px  3px 0 #1e40af
            `,
          }}
    >
        <div>{children.split("").map((l,i) => {
            return <motion.span 
                variants = {{
                    initial: {y: 0},
                    hovered: {y:"-100%"}
                }}
                transition = {{
                    delay: i * STAGGER,
                    duration: DURATION,
                    ease: "easeInOut"
                }}
                className={"inline-block"}
                key = {i}>
                    {l === " " ? "\u00A0" : l}
            </motion.span>
        })}
        </div>
        <div className="absolute inset-0">
            {children.split("").map((l,i) => {
            return <motion.span 
                variants = {{
                    initial: {y: "100%"},
                    hovered: {y:"0"}
                }}
                transition = {{
                    delay: i * STAGGER,
                    duration: DURATION,
                    ease: "easeInOut"
                }}
                className="inline-block"
                key = {i}>
                    {l === " " ? "\u00A0" : l}
            </motion.span>
        })}
        </div>
    </motion.div>
  );
}