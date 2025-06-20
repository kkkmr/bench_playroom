import FontSelector from "@/fonts/FontSelector";
import Image from "next/image";

const Header=()=>{
    return (
        // <header className="flex justify-between items-center px-10 bg-gray-200 text-gray-400">
        <header className="flex justify-between items-center px-10" style={{backgroundColor:'#0D1B2A', color:'white'}}>
            <div className="flex gap-1 items-center">
                <Image src={'./fluid_assets/logo/bp_logo_med_bg_none.svg'} height={50} width={50} alt=""/>
                <span className="text-3xl">Bench Playroom</span>
            </div>
            <FontSelector/>
        </header>
    )
}

export default Header;