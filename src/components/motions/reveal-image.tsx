"use client"

import React, {useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from "framer-motion";
import Image from "next/image";
import LargePetal, {LargePetalRef} from "@src/components/motions/large-petal";
import MediumPetal, {MediumPetalRef} from "@src/components/motions/medium-petal";
import {BlurBg} from "@src/components/blur-bg";
import {BorderBeam} from "@src/components/magicui/border-beam";

type Props = {
    src: string;
    alt: string;
    step: 'step1' | 'step2' | 'step3' | 'step4'
    width: number
    height: number
}

const RevealImage = ({src, alt, step, height, width}: Props) => {
    const largePetalRef = useRef<LargePetalRef>(null)
    const mediumPetalRef = useRef<MediumPetalRef>(null)
    const divRef = useRef(null)

    const isInView = useInView(divRef, {once: true})
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [controls, isInView])

    return (
        <div
            ref={divRef}
            className={"relative z-0"}>
            <LargePetal step={step} ref={largePetalRef}/>
            <MediumPetal step={step} ref={mediumPetalRef}/>
            <div className={"w-full flex justify-center items-center px-8 py-12 lg:py-16 z-10 relative"}>
                <BlurBg/>
                <motion.div
                    variants={{
                        hidden: {
                            scale: 0.5,
                            rotate: 180,
                            opacity: 0,
                            originX: 'center',
                            originY: 'center',
                        },
                        visible: {
                            scale: 1,
                            rotate: 0,
                            opacity: 1,
                        },
                    }}
                    initial='hidden'
                    animate={controls}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 50,
                        damping: 15,
                        delay: 0,
                    }}
                    className={"w-full max-w-[459px] relative overflow-hidden rounded-lg lg:rounded-2xl"}
                    onAnimationStart={() => {
                        largePetalRef.current?.start()
                        mediumPetalRef.current?.start()
                    }}>
                    <Image unoptimized priority src={src}
                           alt={alt}
                           width={width} height={height} className={"w-full max-w-[459px] h-auto aspect-video"}/>
                    <BorderBeam
                        duration={6}
                        size={200}
                        className="from-transparent via-primary to-transparent"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default RevealImage;