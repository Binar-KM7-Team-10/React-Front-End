import React from 'react';

const LoadingSearchFlight = () => {

    return (
        <div className="text-center">
            <h3 className="text-gray-600">Mencari penerbangan terbaik...</h3>
            <div className="flex justify-center items-center mt-4">
                <div className="w-32 h-16 bg-purple-200 rounded-lg relative overflow-hidden">
                    <div
                        className="bg-purple-600 h-full w-1/3 absolute animate-slide"
                        style={{
                            animation: "slide 1.5s infinite linear",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default LoadingSearchFlight