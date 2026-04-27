import { Truck } from "lucide-react";
import { cn } from "../lib/utils";

interface LogoProps {
  className?: string;
  iconSize?: number;
  textColor?: "blue" | "white";
}

const Logo = ({ className, iconSize = 28, textColor = "blue" }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2 group cursor-pointer", className)}>
      <div className="relative">
        <div className="bg-[#0A3D62] text-white p-2 rounded-lg group-hover:bg-[#F39C12] transition-all duration-300 transform group-hover:rotate-6">
          <Truck size={iconSize} />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#F39C12] rounded-full border-2 border-white animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className={cn(
          "font-black text-xl leading-none tracking-tight",
          textColor === "blue" ? "text-[#0A3D62]" : "text-white"
        )}>
          Gandhi
        </span>
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-black text-[#F39C12] tracking-widest uppercase">
            Packers & Movers
          </span>
          <div className="h-px bg-[#F39C12] flex-grow opacity-50 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
