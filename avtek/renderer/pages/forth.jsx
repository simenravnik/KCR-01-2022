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
        updateProgress(type, cardNumber, CVV);
    }

    const updateCardNumber = (event) => {
        event.preventDefault();

        let newCardNumber = event.target.value;

        newCardNumber = newCardNumber.replace(/-|\s/g, "");

        if (newCardNumber.length < 17) {

            let lettersToReplace = Math.min(12, newCardNumber.length);
            newCardNumber = `✕`.repeat(lettersToReplace) + newCardNumber.slice(lettersToReplace);

            let processedCardNumber = newCardNumber.match(/.{1,4}/g);

            let card = "";
            if (processedCardNumber !== null && processedCardNumber.length > 0) {
                card = processedCardNumber.join('-')
                setCardNumber(card);
            } else {
                setCardNumber(card);
            }

            updateProgress(paymentType, card, CVV);
        }
    }

    const updateCVV = (event) => {
        event.preventDefault();

        let newCVV = event.target.value;

        if (newCVV.length < 4) {
            newCVV = `•`.repeat(newCVV.length) + newCVV.slice(newCVV.length);
            setCVV(newCVV);
        }

        updateProgress(paymentType, cardNumber, newCVV);
    }


    function doSetTimeout(i, oldVal, type) {
        setTimeout(
            () => {
                if (type === "addition") {
                    setProgress(oldVal + i);
                } else if (type === "substraction") {
                    setProgress(oldVal - i);
                }
            },
            20 * (i + 1)
        );
    }

    const animateProgress = (oldVal, newVal, type = "addition") => {
        for (let i = 0; i <= Math.abs(oldVal - newVal); i++) {
            doSetTimeout(i, oldVal, type);
        }
    }


    const updateProgress = (type, card, cvv) => {

        if (type === CASH) {
            if (progress > 90) {
                animateProgress(progress, 85, "substraction");
            } else {
                animateProgress(progress, 85, "addition");
            }
        }

        if (type === CARD) {

            console.log(card.length);

            console.log(card);

            if (card.length < 19) {

                if (progress > 70) {
                    animateProgress(progress, 70, "substraction");
                } else {
                    animateProgress(progress, 70, "addition");
                }
            }

            if (card.length >= 19) {

                if (cvv.length >= 3) {
                    if (progress > 95) {
                        animateProgress(progress, 90, "substraction");
                    } else {
                        animateProgress(progress, 90, "addition");
                    }
                } else {
                    if (progress > 85) {
                        animateProgress(progress, 85, "substraction");
                    } else {
                        animateProgress(progress, 85, "addition");
                    }
                }
            }
        }
    }

    const submit = () => {
        animateProgress(progress, 100, "addition");
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
                        <form>
                            <h2 className="card-title">Plačilo</h2>
                            <div className="grid gap-6 gap-x-20 mb-6 md:grid-cols-2">

                                <div className="card max-h-80 shadow-xl">
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

                                    <div className="flex justify-center gap-10">
                                        <div className={`radial-progress transition-all ease-out duration-100 ${progress === 100 ? "text-success" : "text-primary"}`} style={{ "--value": progress, "--size": "10rem" }}>{
                                            progress !== 100 ?
                                                `${progress}%`
                                                : "Hvala!"
                                        }
                                        </div>
                                    </div>

                                    {progress === 100 ?
                                        <div>
                                            <div>
                                                <div className="flex flex-row items-center">
                                                    <div className="basis-3/4">
                                                        <label className="label">
                                                            Lokacija prevzema
                                                        </label>
                                                    </div>
                                                    <div className="flex basis-1/4 justify-end">
                                                        <label className="label font-bold">
                                                            Kranj
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="flex flex-row items-center">
                                                    <div className="basis-3/4">
                                                        <label className="label">
                                                            Datum prevzema
                                                        </label>
                                                    </div>
                                                    <div className="flex basis-1/4 justify-end">
                                                        <label className="label">
                                                            16. 11. 2022
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="flex flex-row items-center">
                                                    <div className="basis-3/4">
                                                        <label className="label">
                                                            Čas prevzema
                                                        </label>
                                                    </div>
                                                    <div className="flex basis-1/4 justify-end">
                                                        <label className="label">
                                                            13:00
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : <></>
                                    }
                                </div>



                            </div>


                            {progress !== 100 ? <div className='mt-1 flex justify-end'>
                                <Link href='/forth'>
                                    <button type="submit" className="btn btn-primary" onClick={submit}>
                                        {paymentType === CASH ? <a>Oddaj naročilo</a> : <a>Plačaj</a>}
                                    </button>
                                </Link>
                            </div> :
                                <div className='mt-1 flex justify-end'>
                                    <Link href='/home'>
                                        <button className="btn btn-primary">
                                            Zaključi
                                        </button>
                                    </Link>
                                </div>
                            }
                        </form>
                    </div>
                </div>

            </div >
        </React.Fragment >
    );
}
