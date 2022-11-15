import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Forth() {

    const CARD = "card";
    const CASH = "cash";
    const [paymentType, setPaymentType] = useState(CARD);
    const [cardNumber, setCardNumber] = useState("");
    const [CVV, setCVV] = useState("");
    const [progress, setProgress] = useState(70);

    const updatePaymentType = (type) => {

        setPaymentType(type);
    }

    const updateCardNumber = (event) => {
        event.preventDefault();

        let pressedKey = event.nativeEvent.data;
        let newCardNumber = event.target.value;


        newCardNumber = newCardNumber.replace(/-|\s/g, "");

        if (newCardNumber.length < 17) {

            let lettersToReplace = Math.min(12, newCardNumber.length);
            newCardNumber = `✕`.repeat(lettersToReplace) + newCardNumber.slice(lettersToReplace);

            let processedCardNumber = newCardNumber.match(/.{1,4}/g);

            updateProgress();

            if (processedCardNumber !== null && processedCardNumber.length > 0) {
                setCardNumber(processedCardNumber.join('-'));
            } else {
                setCardNumber("");
            }

        }
    }

    const updateCVV = (event) => {
        event.preventDefault();

        let newCVV = event.target.value;

        if (newCVV.length < 4) {
            newCVV = `•`.repeat(newCVV.length) + newCVV.slice(newCVV.length);
            setCVV(newCVV);
        }
    }


    function doSetTimeout(i) {
        setTimeout(
            () => setProgress(i),
            10 * (i + 1)
        );
    }

    const animateProgress = (oldVal, newVal) => {
        for (let i = 0; i <= Math.abs(oldVal - newVal); i++) {
            doSetTimeout(i)
        }
    }


    const updateProgress = () => {
        if (cardNumber.length === 16) {
            animateProgress(30, 90);
        }
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

                <div className="card shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">Plačilo</h2>
                        <div className="grid gap-6 gap-x-20 mb-6 md:grid-cols-2">

                            <div className="card shadow-xl">
                                <div className="card-body">
                                    <div className="mb-5">
                                        <div className="flex flex-row items-center">
                                            <div className="basis-3/4">
                                                <label className="label">
                                                    € 95 &#215; 5 dni
                                                </label>
                                            </div>
                                            <div className="flex basis-1/4 justify-end">
                                                <label className="label">
                                                    € 475.00
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-center">
                                            <div className="basis-3/4">
                                                <label className="label">
                                                    Čiščenje avtomobila
                                                </label>
                                            </div>
                                            <div className="flex basis-1/4 justify-end">
                                                <label className="label">
                                                    € 20.00
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-center">
                                            <div className="basis-3/4">
                                                <label className="label">
                                                    Cena storitve
                                                </label>
                                            </div>
                                            <div className="flex basis-1/4 justify-end">
                                                <label className="label">
                                                    € 31.00
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-8">
                                        <div className="flex flex-row items-center">
                                            <div className="basis-3/4">
                                                <div className="flex flex-row items-center">

                                                    <label className="label">
                                                        Dodatno avtomobilsko zavarovanje
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="flex basis-1/4 justify-end">
                                                <label className="label">
                                                    € 2.00
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <div className="basis-3/4">
                                            <label className="label font-bold">
                                                Skupaj
                                            </label>
                                        </div>
                                        <div className="flex basis-1/4 justify-end">
                                            <label className="label font-bold">
                                                € 475.00
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">Način plačila</label>
                                        <div className="flex flex-row">
                                            <label className="label cursor-pointer mr-5">
                                                <input type="radio" checked={paymentType === CASH} onChange={() => updatePaymentType(CASH)} name="radio-3" className="radio mr-2" />
                                                <span className="label-text">Gotovina</span>
                                            </label>
                                            <label className="label cursor-pointer">
                                                <input type="radio" checked={paymentType === CARD} onChange={() => updatePaymentType(CARD)} name="radio-3" className="radio mr-2" />
                                                <span className="label-text">Plačilna kartica</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">Številka plačilne kartice</label>
                                        <div className="flex flex-row">
                                            <div className="basis-3/4 mr-2">
                                                <input type="text" id="postal_code" disabled={paymentType === CASH} className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" value={cardNumber} onChange={updateCardNumber} placeholder="Plačilna kartica" required />
                                            </div>
                                            <div className="basis-1/4 mr-2">
                                                <input type="text" id="address" disabled={paymentType === CASH} className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" value={CVV} onChange={updateCVV} placeholder="CCV" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="radial-progress text-primary transition-all ease-out duration-1000" style={{ "--value": progress, "--size": "10rem" }}>{progress}%</div>
                                    </div>

                                </div>
                            </form>

                        </div>

                        <div className='mt-1 flex justify-end'>
                            <Link href='/forth'>
                                <button className="btn btn-primary">
                                    {paymentType === CASH ? <a>Oddaj naročilo</a> : <a>Plačaj</a>}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment >
    );
}
