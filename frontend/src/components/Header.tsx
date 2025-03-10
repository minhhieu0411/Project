import { FaFacebookF } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left: Navigation */}
        <nav className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Our Approach</a>
          <a href="#" className="hover:underline">Home Care Services</a>
          <a href="#" className="hover:underline">Caregiver Careers</a>
          <a href="#" className="hover:underline">Service Area</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </nav>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYelp /></a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-white text-center py-4 text-purple-800">
        <p className="italic text-lg">
          Locally owned in-home care agency serving seniors in Northern Kentucky and the Cincinnati Area
        </p>
        <h1 className="text-4xl font-bold text-purple-900">
          <span className="text-gray-700">connecting</span>
          <span className="text-red-500">❤️</span>
          <span className="text-gray-700">hearts</span> <span className="text-pink-600">Home Care</span>
        </h1>
        <div className="mt-4">
          <a href="tel:8594417977" className="bg-pink-600 text-white px-6 py-2 rounded-md">
            Request a Free In-Home Consultation: 859.441.7977
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
