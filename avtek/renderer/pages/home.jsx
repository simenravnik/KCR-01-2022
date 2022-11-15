import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
        <title>Avtek d.o.o.</title>
      </Head>

      <div className="container mx-auto px-5 py-5">

        <h1 className="font-alfa font-regular leading-tight text-5xl mt-0">AVTEK d.o.o.</h1>

        <div className="mb-5">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link href='/home'>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    Domov
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/second'>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    Podatki o vozilu
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/third'>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    Osebni podatki
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/forth'>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    Plačilo
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {[
            { id: "1", title: "OSNOVNI", src: "/images/car-normal.png" },
            { id: "2", title: "ŠPORTNIK", src: "/images/car-fast.png" },
            { id: "3", title: "SUV", src: "/images/car-suv.png" }
          ].map(card => (
            <div onClick={() => setActiveCarBrandId(card.id)} className={`card mb-5 hover:cursor-pointer ${activeCarBrandId === card.id ? "card border shadow-md" : ""}`}>
              <div className='my-2 w-full flex flex-col justify-center'>
                <img className={`object-contain ${activeCarBrandId === card.id ? "scale-100" : "scale-95"} hover:scale-100 ease-in duration-100`} src={card.src} />
                <label className="block mb-2 text-xl justify-center text-center font-medium">{card.title}</label>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-10">
          {cars[activeCarBrandId].map((card) => (
            <div onClick={() => setActiveCarModelId(card.id)} className={`card mb-5 hover:cursor-pointer ${activeCarModelId === card.id ? "card border shadow-md" : ""}`}>
              <div className='my-2 w-full flex flex-col justify-center'>
                <div>
                  <img className={`object-contain ${activeCarModelId === card.id ? "scale-100" : "scale-95"} hover:scale-100 ease-in duration-100`} src={card.src} />
                </div>
                <div>
                  <label className="block justify-center text-center">
                    {card.brand}
                    <div className="text-xl font-medium">
                      {card.model}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card shadow-2xl mb-5">
          <div className="card-body">
            <h2 className="card-title">Prevzem in vračilo</h2>

            <div className="flex flex-row mb-5">
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

            <div className='mt-1 flex justify-end'>
              <Link href='/second'>
                <button className="btn btn-primary">
                  <a>Naprej</a>
                </button>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </React.Fragment >
  );
}

export default Home;
