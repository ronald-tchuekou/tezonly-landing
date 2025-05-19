import * as React from 'react';

export const BlurBg = () => {
    return (
        <div style={{
            zIndex: -10,
            position: "absolute",
            inset: 0,
        }} className={"flex justify-center items-center"}>
            <div className={"aspect-square w-full lg:w-1/2 h-auto"} style={{
                background: "rgba(147, 205, 246, 0.15)",
                filter: "blur(254.5px)",
            }}/>
        </div>
    );
};