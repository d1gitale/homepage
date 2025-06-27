"use client"

import { animation_fonts } from "./fonts";
import { useState, useEffect } from "react";

export function Greeting() {
    const [currentFont, setCurrentFont] = useState(animation_fonts[0]);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let newFontInd = 0;

        const changeFont = () => {
            newFontInd += 1;
            newFontInd %= animation_fonts.length;
            console.log(newFontInd);
            const newFont = animation_fonts[newFontInd];
            setCurrentFont(newFont);
            const nextChange = Math.floor(Math.random() * 1000) + 400;
            timeoutId = setTimeout(changeFont, nextChange);
        };

        changeFont();

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="flex text-2xl md:text-8xl h-[90vh] justify-center justify-items-center items-center cursor-default select-none">
            <p className="bg-black text-white mx-2 px-2">
                Hi!
            </p>
            <p className={`w-30 md:w-lg text-center transition-all duration-500 ${currentFont}`}>
                digitale
            </p>
            <p className="bg-black text-white mx-2 px-2">
                connected
            </p>
        </div>
    );
}