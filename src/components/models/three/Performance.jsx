import { performanceImages, performanceImgPositions } from "../../../constants";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registramos el plugin
gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
    const sectionRef = useRef();

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // Animación del texto con autoAlpha
        gsap.fromTo(".content p", 
            { autoAlpha: 0, y: 10 }, 
            { 
                autoAlpha: 1, 
                y: 0, 
                scrollTrigger: { 
                    trigger: ".content p", 
                    start: "top bottom",
                    end: "top center", 
                    scrub: true,
                } 
            }
        );

        const createImageTimeline = (isMobileContext) => {
            gsap.set('.wrapper img', { autoAlpha: 0 });
            gsap.set('.p5', { autoAlpha: 1 });

            const tl = gsap.timeline({
                defaults: { ease: "power1.out", duration: 2, overwrite: "auto" },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scrub: 1,
                    start: "top bottom",
                    end: "center center",
                    invalidateOnRefresh: true,
                }
            });

            // Volvemos a la lógica de left, right y bottom que funciona con tu CSS
            performanceImgPositions
                .filter(pos => pos.id !== 'p5')
                .forEach(pos => {
                    const style = { autoAlpha: 1 };
                    const useMobileValues = isMobileContext && 
                        (pos.mobileLeft !== undefined || pos.mobileRight !== undefined || pos.mobileBottom !== undefined);

                    if (useMobileValues) {
                        if (pos.mobileLeft !== undefined) style.left = `${pos.mobileLeft}%`;
                        if (pos.mobileRight !== undefined) style.right = `${pos.mobileRight}%`;
                        if (pos.mobileBottom !== undefined) style.bottom = `${pos.mobileBottom}%`;
                    } else {
                        if (pos.left !== undefined) style.left = `${pos.left}%`;
                        if (pos.right !== undefined) style.right = `${pos.right}%`;
                        if (pos.bottom !== undefined) style.bottom = `${pos.bottom}%`;
                    }

                    tl.to(`.${pos.id}`, style, 0);
                });
        };

        mm.add("(min-width: 1025px)", () => createImageTimeline(false));
        mm.add("(max-width: 1024px)", () => createImageTimeline(true));

    }, { scope: sectionRef });

    return (
        <section id="performance" ref={sectionRef}>
            <h2>Next-level graphics performance.Game on.</h2>
            <div className="wrapper">
                {performanceImages.map(({ id, src, altText }) => (
                    <img key={id} src={src} alt={altText || id} className={id} />
                ))}
            </div>
            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. The M4 family of chips features a GPU with a second-generation hardware-accelerated ray tracing engine that renders images faster, so{" "}
                    <span className="text-white">
                        gaming feels more immersive and realistic than ever.{" "}
                    </span>
                    And Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization — driving a huge performance boost for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    );
};

export default Performance;