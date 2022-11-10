import React from 'react';

export default function CarCard({ id, src, title, setActiveCardId, activeCardId }) {
    return (
        <div onClick={() => setActiveCardId(id)} className={`card mb-5 ${activeCardId === id ? "border" : ""}`}>
            <div className='my-4 w-full flex-wrap flex justify-center'>
                <img className={`object-contain ${activeCardId === id ? "scale-100" : "scale-95"} hover:scale-100 ease-in duration-100`} src={src} />
                <label className="block mb-2 text-xl font-medium">{title}</label>
            </div>
        </div>
    );
}