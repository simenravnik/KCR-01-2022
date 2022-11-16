import React from 'react';

export default function CarModelCard({ id, src, brand, model, setActiveCardId, activeCardId }) {
    return (
        <div onClick={() => setActiveCardId(id)} className={`card mb-5 ${activeCardId === id ? "border" : ""}`}>
            <div className='my-4 w-full flex flex-col justify-center'>
                <div>
                    <img className={`object-contain ${activeCardId === id ? "scale-100" : "scale-95"} hover:scale-100 ease-in duration-100`} src={src} />
                </div>
                <div>
                    <label className="block mb-2 justify-center text-center">
                        {brand}
                        <div className="text-xl font-medium">
                            {model}
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}