import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import BasicDatePicker from './components/BasicDatePicker';
import { BiHelpCircle } from "react-icons/bi";

function Home(props) {

  return (
    <React.Fragment>
      <Head>
        <title>Avtek d.o.o.</title>
      </Head>

      <div className="container mx-auto px-5 py-5">

        <div className="flex justify-between flex-row items-center">
          <h1 className="font-alfa font-regular leading-tight text-5xl mt-0">AVTEK d.o.o.</h1>
          <div className="text-3xl" >
            <div className="cursor-pointer scale-95 hover:scale-100 ease-in duration-100">
              <label htmlFor="my-modal" className="cursor-pointer">
                <BiHelpCircle> </BiHelpCircle>
              </label>
            </div>
          </div>
        </div>

        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal bg-base-content bg-opacity-25">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Navodila za uporabo</h3>
            <ul className="steps steps-vertical">
              <li className="step step-primary">Izbor vozila in datuma izposoje</li>
              <li className="step">Modifikacija karakteristik vozila</li>
              <li className="step">Obrazec za vnos osebnih podatkov</li>
              <li className="step">Zaključek in plačilo</li>
            </ul>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn btn-primary">OK</label>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link href='/home'>
                  <a tabIndex={1} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    Domov
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/second'>
                  <a tabIndex={2}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    Podatki o vozilu
                  </a>
                </Link>
              </li>
              <li>
                {!props.visiblePages.third ?
                  <a disabled className="unset">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    Osebni podatki
                  </a>
                  : <Link href='/third'>
                    <a tabIndex={3}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                      Osebni podatki
                    </a>
                  </Link>}
              </li>
              <li>
                {!props.visiblePages.forth ?
                  <a disabled className="unset">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    Plačilo
                  </a>
                  : <Link href='/forth'>
                    <a tabIndex={4}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                      Plačilo
                    </a>
                  </Link>}
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {props.brands.map(card => (
            <div tabIndex={parseInt(card.id) + 5} key={card.id} onClick={() => { props.setActiveCarBrandId(card.id); props.setActiveCarModelId("0") }} onKeyPress={() => props.setActiveCarBrandId(card.id)} className={`card mb-5 hover:cursor-pointer ${props.activeCarBrandId === card.id ? "card border shadow-md" : ""}`}>
              <div className='my-2 w-full flex flex-col justify-center'>
                <img className={`object-contain ${props.activeCarBrandId === card.id ? "scale-100" : "scale-95"} hover:scale-100 ease-in duration-100`} src={card.src} />
                <label className="block mb-2 text-xl justify-center text-center font-medium">{card.title}</label>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-8 gap-10">
          {props.cars[props.activeCarBrandId].map((card) => (
            <div tabIndex={parseInt(card.id) + 8} key={card.id} onClick={() => props.setActiveCarModelId(card.id)} onKeyPress={() => props.setActiveCarModelId(card.id)} className={`card mb-5 hover:cursor-pointer ${props.activeCarModelId === card.id ? "card border shadow-md" : ""}`}>
              <div className='my-2 flex flex-col justify-center'>
                <div>
                  <img className={`object-contain p-1 ${props.activeCarModelId === card.id ? "scale-100" : "scale-95"} hover:scale-100 ease-in duration-100`} src={card.src} />
                </div>
                <div>
                  <label className="block justify-center text-center">
                    {card.brand}
                    <div className="text-l font-bold">
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
                <select value={props.carPickupInfo.pickup_location} onChange={e => props.setCarPickupInfo({ ...props.carPickupInfo, pickup_location: e.target.value })} className="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
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
                <label value={props.carPickupInfo.return_location} onChange={e => props.setCarPickupInfo({ ...props.carPickupInfo, return_location: e.target.value })} className="block mb-2 text-sm font-medium">Mesto vračila</label>
                <select className="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
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
                <label className="block mb-2 text-sm font-medium">Prevzem / Vračilo</label>
                <BasicDatePicker carPickupInfo={props.carPickupInfo} setCarPickupInfo={props.setCarPickupInfo} />
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
