import React from 'react';

export default function CarCard({ id, src, title, setActiveCardId, activeCardId }) {
    return (
        <React.Fragment>
            <div onClick={() => setActiveCardId(id)} className={`card mb-5 rounded-lg ${activeCardId === id ? "border" : ""}`}>
                <div className='my-4 w-full flex-wrap flex justify-center'>
                    <img className={`object-contain scale-95 hover:scale-100 ease-in duration-100`} src={src} />
                    <label for="first_name" className="block mb-2 text-xl font-medium">{title}</label>
                </div>
            </div>
        </React.Fragment >
    );
}