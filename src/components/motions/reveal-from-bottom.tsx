'use client'
import {motion, useAnimation, useInView} from 'framer-motion'
import {FC, PropsWithChildren, useEffect, useRef} from 'react'

export type MotionTag =
    | 'div'
    | 'a'
    | 'span'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'li'
    | 'footer'
    | 'section'
    | 'figure'
    | 'article'

type Props = {
    className?: string
    delay?: number
    duration?: number
    elt?: MotionTag
    onClick?: () => void
}

export const RevealFromBottom: FC<PropsWithChildren<Props>> = ({
                                                                   children,
                                                                   className,
                                                                   elt,
                                                                   delay = 0,
                                                                   duration = 0.8,
                                                                   onClick,
                                                               }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const controls = useAnimation()
    const Comp = motion[elt || 'div']

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [controls, isInView])

    return (
        <Comp
            ref={ref}
            className={className}
            variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0},
            }}
            initial='hidden'
            animate={controls}
            onClick={onClick}
            transition={{duration, delay}}
        >
            {children}
        </Comp>
    )
}