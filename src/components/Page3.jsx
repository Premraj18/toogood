import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './page3.css';

function Page3() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");


    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "rgba(224, 139, 189, 0.814)",
            // mixBlendMode: "difference"
            zIndex:'-1',
            
        }
    }

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");


    return (
        <>
            <div id="page3">
                <div className="child" id="child1">
                    <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format"
                        alt="" onMouseEnter={textEnter} onMouseLeave={textLeave}/>
                </div>
                <div className="child" id="child2">
                    <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format"
                        alt="" onMouseEnter={textEnter} onMouseLeave={textLeave} />

                </div>
                <div className="child" id="child3">
                    <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format"
                        alt="" onMouseEnter={textEnter} onMouseLeave={textLeave}/>

                </div>
                <div className="child" id="child4">
                    <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format"
                        alt="" onMouseEnter={textEnter} onMouseLeave={textLeave} />

                </div>
            </div>
            <motion.div
                className='cursor'
                variants={variants}
                animate={cursorVariant}
            />

        </>
    );
}

export default Page3;