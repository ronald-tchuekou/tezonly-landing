"use client"

import React, {Ref, useImperativeHandle, useMemo, useRef} from 'react';
import {motion, useAnimation} from "framer-motion";
import {cn} from "@src/lib/utils";

export type MediumPetalRef = {
    start: VoidFunction
}

type Props = {
    step: 'step1' | 'step2' | 'step3' | 'step4'
    ref: Ref<MediumPetalRef>
}

const MediumPetal = ({step, ref}: Props) => {
    const divRef = useRef(null)
    const controls = useAnimation()

    const {rotate, originX, originY} = useMemo(() => ({
        rotate: step === 'step1' || step === 'step4' ? 90 : -90,
        originX: step === 'step1' || step === 'step2' ? 'left' : 'right',
        originY: step === 'step1' || step === 'step3' ? 'top' : 'bottom'
    }), [step])

    useImperativeHandle(ref, () => ({
        start() {
            controls.start('visible')
        }
    }))

    return (
        <motion.div
            ref={divRef}
            variants={{
                hidden: {
                    scale: 0.2,
                    rotate,
                    opacity: 0,
                    originX,
                    originY,
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
                duration: 0.3,
                type: "spring",
                stiffness: 50,
                damping: 15,
                delay: 0.3,
            }}
            className={cn('-z-10 absolute w-[25%] h-[70%] bg-primary', {
                'bottom-0 right-0 rounded-bl-full rounded-tr-full': step === 'step1',
                'top-0 right-0 rounded-tl-full rounded-br-full': step === 'step2',
                'bottom-0 left-0 rounded-tl-full rounded-br-full': step === 'step3',
                'top-0 left-0 rounded-tr-full rounded-bl-full': step === 'step4',
            })}/>
    );
};

export default MediumPetal;