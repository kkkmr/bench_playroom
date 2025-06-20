'use client'

import {fontOptions} from "./fonts";
import { useState, useEffect } from "react";


export default function FontSelector(){
    const [selectedFont, setSelectedFont]=useState(fontOptions[0].font.className);

    useEffect(()=>{
        document.body.className='';
        document.body.classList.add(selectedFont);
    },[selectedFont]);
    
    return (
        <div className="text-white">
             <select value={selectedFont} onChange={(e)=>setSelectedFont(e.target.value)} className="p-4 text-green outline-white">
                {fontOptions.map((option) => (
                        <option key={option?.font.className} value={option?.font.className} className="text-[#0D1B2A]">
                            {option.label}
                        </option>
                    )
                )}
            </select>
        </div>
    )
}