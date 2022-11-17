import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Second(props) {

  const cleaningPrice = 20;
  const servicePrice = 31;

  const calculatePricePerDay = () => {

    let final_price = props.cars[props.activeCarBrandId][props.activeCarModelId].price;

    if (props.transmission === "automatic") {
      final_price = final_price + 3;
    }

    if (props.engine === "gas") {
      final_price = final_price + 2;
    }

    return final_price;
  };

  const calculatePrice = () => {

    let pricePerDay = calculatePricePerDay();
    let final_price = pricePerDay * props.carPickupInfo["rent_duration"]

    return final_price;
  };

  const calculatePriceOverall = () => {

    let pricePerDay = calculatePricePerDay();
    let final_price = pricePerDay * props.carPickupInfo["rent_duration"]

    final_price = final_price + cleaningPrice;
    final_price = final_price + servicePrice;

    if (props.assurance === true) {
      final_price = final_price + (2 * props.carPickupInfo["rent_duration"])
    }

    return final_price;
  };

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
                {!props.visiblePages.third ?
                  <a disabled className="unset">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    Osebni podatki
                  </a>
                  : <Link href='/third'>
                    <a>
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
                    <a>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                      Plačilo
                    </a>
                  </Link>}
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid grid-cols-1 gap-4 md:grid-cols-2">

          <div className="card shadow-2xl">
            <div className="card-body">

              <h2 className="card-title mb-2">Podatki o vozilu</h2>

              <div>
                <label className="block text-sm font-medium">Izbrano vozilo</label>
                <div className="flex flex-row items-center">
                  <div className="basis-1/4 mr-5">
                    <label className="label cursor-pointer">
                      <img className={`object-contain`} src={props.cars[props.activeCarBrandId][props.activeCarModelId].src} />
                    </label>
                  </div>
                  <div className="basis-3/4">
                    <select className="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={props.cars[props.activeCarBrandId][props.activeCarModelId].model}>
                      <option>{props.cars[props.activeCarBrandId][props.activeCarModelId].model}</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Menjalnik</label>
                <div className="flex flex-row">
                  <label className="label cursor-pointer mr-5">
                    <input type="radio" checked={props.transmission === "manual"} onChange={() => props.setTransmission("manual")} name="radio-1" className="radio mr-2" />
                    <span className="label-text">Ročni</span>
                  </label>
                  <label className="label cursor-pointer">
                    <input type="radio" checked={props.transmission === "automatic"} onChange={() => props.setTransmission("automatic")} name="radio-1" className="radio mr-2" />
                    <span className="label-text">Avtomatski</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Tip motorja</label>
                <div className="flex flex-row">
                  <label className="label cursor-pointer mr-5">
                    <input type="radio" checked={props.engine === "gas"} onChange={() => props.setEngine("gas")} name="radio-10" className="radio mr-2" />
                    <span className="label-text">Bencinski</span>
                  </label>
                  <label className="label cursor-pointer">
                    <input type="radio" checked={props.engine === "diesel"} onChange={() => props.setEngine("diesel")} name="radio-10" className="radio mr-2" />
                    <span className="label-text">Dizelski</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-2xl">
            <div className="card-body">
              <h2 className="card-title">Cena najema</h2>
              <div className="mb-5">
                <div className="flex flex-row items-center">
                  <div className="basis-3/4">
                    <label className="label cursor-pointer">
                      € {calculatePricePerDay()} &#215; {props.carPickupInfo["rent_duration"]} dni
                    </label>
                  </div>
                  <div className="flex basis-1/4 justify-end">
                    <label className="label cursor-pointer">
                      € {calculatePrice()}.00
                    </label>
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  <div className="basis-3/4">
                    <label className="label cursor-pointer">
                      Čiščenje avtomobila
                    </label>
                  </div>
                  <div className="flex basis-1/4 justify-end">
                    <label className="label cursor-pointer">
                      € {cleaningPrice}.00
                    </label>
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  <div className="basis-3/4">
                    <label className="label cursor-pointer">
                      Cena storitve
                    </label>
                  </div>
                  <div className="flex basis-1/4 justify-end">
                    <label className="label cursor-pointer">
                      € {servicePrice}.00
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex flex-row items-center">
                  <div className="basis-3/4">
                    <div className="flex flex-row items-center">
                      <input type="checkbox" checked={props.assurance === true} onChange={() => props.setAssurance(!props.assurance)} className="checkbox checkbox-primary mr-2" />

                      <label className="label cursor-pointer">
                        Dodatno avtomobilsko zavarovanje
                      </label>
                    </div>
                  </div>
                  <div className="flex basis-1/4 justify-end">
                    <label className="label cursor-pointer">
                      <div className="flex flex-col text-right" >
                        € 2 &#215; {props.carPickupInfo["rent_duration"]} dni
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="basis-3/4">
                  <label className="label cursor-pointer font-bold">
                    Skupaj
                  </label>
                </div>
                <div className="flex basis-1/4 justify-end">
                  <label className="label cursor-pointer font-bold">
                    € {calculatePriceOverall()}.00
                  </label>
                </div>
              </div>

              <div className='mt-5 flex justify-end'>
                <Link href='/third'>
                  <button className="btn btn-primary">
                    <a className=''>Naprej</a>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </React.Fragment >
  );
}
