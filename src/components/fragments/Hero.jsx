import React, { useState } from "react";
import { Plane, Calendar, Users } from "lucide-react";
import image from "../../assets/Images/imgbanner.png";

const Hero = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [passengers, setPassengers] = useState(2);

  return (
    <div className="md:px-8 py-5">
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="relative h-[300px]">
          <img src={image} className="w-full h-full rounded-t-lg" />
        </div>

        <div className="flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-xl p-6 mx-4 -mt-20 relative z-10 w-[968px] space-y-4">
            <h1 className="font-bold">
              Pilih jadwal penerbangan spesial di{" "}
              <span className="font-bold text-[#7126B5]">Tiketku!</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center space-x-4 p-4 border rounded-lg hover:border-purple-400 transition-colors">
                <Plane className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500 mb-1">From</p>
                  <p className="font-semibold">Jakarta (JKTA)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 border rounded-lg hover:border-purple-400 transition-colors">
                <Plane
                  className="text-gray-400 transform rotate-90"
                  size={20}
                />
                <div>
                  <p className="text-sm text-gray-500 mb-1">To</p>
                  <p className="font-semibold">Melbourne (MLB)</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Date Selection */}
              <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-4 p-4 border rounded-lg hover:border-purple-400 transition-colors">
                  <Calendar className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Departure</p>
                    <p className="font-semibold">1 Maret 2023</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 border rounded-lg hover:border-purple-400 transition-colors">
                  <Calendar className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Return</p>
                    <button className="text-purple-600 font-semibold hover:text-purple-700">
                      Pilih Tanggal
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 border rounded-lg hover:border-purple-400 transition-colors">
                <Users className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Passengers & Class
                  </p>
                  <p className="font-semibold">2 Penumpang, Business</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 ">
              Cari Penerbangan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
