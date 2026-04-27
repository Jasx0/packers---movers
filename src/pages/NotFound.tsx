import { Link } from "react-router-dom";
import { Truck } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-blue-100 text-[#0A3D62] p-6 rounded-full mb-8 animate-bounce">
        <Truck size={64} />
      </div>
      <h1 className="text-6xl font-black text-[#0A3D62] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-[#F39C12] mb-6 tracking-tight">Oops! This truck is lost.</h2>
      <p className="text-gray-500 max-w-md mb-10 leading-relaxed font-medium">
        The page you are looking for doesn't exist or has been moved to a new route. Try navigating back home.
      </p>
      <Link to="/" className="bg-[#0A3D62] text-white px-10 py-4 rounded-xl font-black text-xl hover:bg-[#F39C12] transition-colors shadow-2xl">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
