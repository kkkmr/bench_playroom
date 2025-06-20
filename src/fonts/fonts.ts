import { Roboto, Open_Sans, Montserrat, Inter,Dancing_Script,Noto_Serif_Telugu, Orbitron } from "next/font/google";
import type { NextFont, NextFontWithVariable } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

const roboto=Roboto({variable:"--font-roboto",subsets:["latin"]});
const open_sans=Open_Sans({variable:"--font-open-sans",subsets:["latin"]});
const montserrat=Montserrat({variable:"--font-montserrat",subsets:["latin"]});
const inter=Inter({variable:"--font-inter",subsets:["latin"]});
const dancing_script=Dancing_Script({variable:"--font-dancing-script",subsets:["latin"]});
const noto_serif_telugu=Noto_Serif_Telugu({variable:"--font-noto-serif-telugu",subsets:["telugu"]});
const orbitron=localFont({src:'./Orbitron_font/static/Orbitron-Regular.ttf'});

export const fontOptions:{label:string, font:NextFontWithVariable}[]=[
        {label:'Roboto', font:roboto},
        {label:'Open_Sans', font:open_sans},
        {label:'Montserrat', font:montserrat},
        {label:'Inter', font:inter},
        {label:'Dancing_Script', font:dancing_script},
        {label:'Noto_Serif_Telugu', font:noto_serif_telugu},
        {label:'Obitron (Local)',font:orbitron as NextFontWithVariable}
    ]