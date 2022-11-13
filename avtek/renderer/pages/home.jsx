import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CarBrandCard from '../elements/CarBrandCard';
import CarModelCard from '../elements/CarModelCard';

function Home() {

  const [activeCarBrandId, setActiveCarBrandId] = React.useState("1");
  const [activeCarModelId, setActiveCarModelId] = React.useState("1");

  const cars = {
    "1": [
      { id: "1", brand: "Mercedes", model: "C180", src: "/images/logos/mercedes.png" },
      { id: "2", brand: "Audi", model: "A5", src: "/images/logos/audi.png" },
      { id: "3", brand: "Toyota", model: "Avensis", src: "/images/logos/toyota.png" },
      { id: "4", brand: "Honda", model: "Accord", src: "/images/logos/honda.png" },
      { id: "5", brand: "Skoda", model: "Octavia", src: "/images/logos/skoda.png" }
    ],
    "2": [
      { id: "1", brand: "Lamborgini", model: "Aventador", src: "/images/logos/lamborgini.png" },
      { id: "2", brand: "Ferrari", model: "488", src: "/images/logos/ferrari.png" },
      { id: "3", brand: "Porsche", model: "911", src: "/images/logos/porsche.png" },
    ],
    "3": [
      { id: "1", brand: "Jeep", model: "Wrangler", src: "/images/logos/jeep.png" },
      { id: "2", brand: "Land Rover", model: "Defender", src: "/images/logos/land-rover.png" },
      { id: "3", brand: "Toyota", model: "4runner", src: "/images/logos/toyota.png" },
      { id: "4", brand: "Suzuki", model: "Jimny", src: "/images/logos/suzuki.png" },
    ],
  }

  return (
    <React.Fragment>
      <Head>
        <title>Avtek</title>
      </Head>

      <div className="container mx-auto px-2 py-5">

        <h1 className="font-alfa font-regular leading-tight text-5xl mt-0 mb-2">AVTEK.si</h1>

        <div className="grid grid-cols-3 gap-4">
          {[
            { id: "1", title: "OSNOVNI", src: "/images/car-normal.png" },
            { id: "2", title: "ŠPORTNIK", src: "/images/car-fast.png" },
            { id: "3", title: "SUV", src: "/images/car-suv.png" }
          ].map(card => (
            <CarBrandCard
              key={card.id}
              id={card.id}
              title={card.title}
              src={card.src}
              activeCardId={activeCarBrandId}
              setActiveCardId={setActiveCarBrandId}
            />
          ))}
        </div>

        <div className="grid grid-cols-6 gap-10">
          {cars[activeCarBrandId].map(card => (
            <CarModelCard
              key={card.id}
              id={card.id}
              brand={card.brand}
              model={card.model}
              src={card.src}
              activeCardId={activeCarModelId}
              setActiveCardId={setActiveCarModelId}
            />
          ))}
        </div>

        <div className="card shadow-2xl mb-5">
          <div className="card-body">
            <h2 className="card-title">Prevzem in vračilo</h2>

            <div className="flex flex-row">
              <div className="basis-1/4 mr-2">
                <label className="block mb-2 text-sm font-medium">Mesto prevzema</label>
                <select className="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={"Dan"}>
                  <option disabled>Prevzem</option>
                  <option>Ljubljana</option>
                  <option>Maribor</option>
                  <option>Celje</option>
                  <option>Kranj</option>
                  <option>Velenje</option>
                  <option>Koper</option>
                  <option>Novo Mesto</option>
                  <option>Murska Sobota</option>
                  <option>Murska Sobota</option>
                  <option>Jesenice</option>
                  <option>Portorož</option>
                  <option>Letališče Jožeta Pučnika</option>
                  <option>Letališče Maribor</option>
                </select>
              </div>
              <div className="basis-1/4 mr-2">
                <label className="block mb-2 text-sm font-medium">Mesto vračila</label>
                <select className="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={"Mesec"}>
                  <option disabled>Vračilo</option>
                  <option>Ljubljana</option>
                  <option>Maribor</option>
                  <option>Celje</option>
                  <option>Kranj</option>
                  <option>Velenje</option>
                  <option>Koper</option>
                  <option>Novo Mesto</option>
                  <option>Murska Sobota</option>
                  <option>Murska Sobota</option>
                  <option>Jesenice</option>
                  <option>Portorož</option>
                  <option>Letališče Jožeta Pučnika</option>
                  <option>Letališče Maribor</option>
                </select>
              </div>
              <div className="basis-1/2">
                Fucking datepicker comes here!!!!
              </div>
            </div>

          </div>
        </div>

        <div className="card shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Osebni podatki</h2>
            <div className="grid gap-6 gap-x-20 mb-12 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium">Ime</label>
                <input type="text" id="first_name" className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Name" required />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Datum rojstva</label>
                <div className="flex flex-row">
                  <div className="basis-1/4 mr-2">
                    <select className="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={"Dan"}>
                      <option disabled>Dan</option>
                      <option>1</option>
                    </select>
                  </div>
                  <div className="basis-1/4 mr-2">
                    <select className="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={"Mesec"}>
                      <option disabled>Mesec</option>
                      <option>Januar</option>
                    </select>
                  </div>
                  <div className="basis-1/2">
                    <select className="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={"Leto"}>
                      <option disabled>Leto</option>
                      <option>1998</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Priimek</label>
                <input type="text" id="first_name" className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Surname" required />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Spol</label>
                <div className="flex flex-row">
                  <label className="label cursor-pointer mr-2 p-2.5">
                    <span className="label-text mr-1">Moški</span>
                    <input type="radio" name="radio-10" className="radio" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text mr-1">Ženska</span>
                    <input type="radio" name="radio-10" className="radio" />
                  </label>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/next'>
          <a className='btn-blue'>Go to next page</a>
        </Link>
      </div>

      <div className="btm-nav">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          <span className="btm-nav-label">Home</span>
        </button>
        <button className="active">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="btm-nav-label">Warnings</span>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          <span className="btm-nav-label">Statics</span>
        </button>
      </div>
    </React.Fragment >
  );
}

export default Home;
