import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import moment from 'moment'
import { useRouter } from 'next/router'

export default function Forth(props) {

    const router = useRouter();

    const updatePaymentType = (type) => {
        props.setPaymentType(type);
        updateProgress(type, props.cardNumber, props.CVV);
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
                props.setCardNumber(card);
            } else {
                props.setCardNumber(card);
            }

            updateProgress(props.paymentType, card, props.CVV);

            validatePaymentCard(newCardNumber);
        }
    }

    const updateCVV = (event) => {
        event.preventDefault();

        let newCVV = event.target.value;

        if (newCVV.length < 4) {
            newCVV = `•`.repeat(newCVV.length) + newCVV.slice(newCVV.length);
            props.setCVV(newCVV);

            validateCVV(newCVV);
        }

        updateProgress(props.paymentType, props.cardNumber, newCVV);

    }


    function doSetTimeout(i, oldVal, type) {
        setTimeout(
            () => {
                if (type === "addition") {
                    props.setProgress(oldVal + i);
                } else if (type === "substraction") {
                    props.setProgress(oldVal - i);
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

        if (type === props.CASH) {
            if (props.progress > 70) {
                animateProgress(props.progress, 70, "substraction");
            } else {
                animateProgress(props.progress, 70, "addition");
            }
        }

        if (type === props.CARD) {

            console.log(card.length);

            console.log(card);

            if (card.length < 19) {

                if (props.progress > 70) {
                    animateProgress(props.progress, 70, "substraction");
                } else {
                    animateProgress(props.progress, 70, "addition");
                }
            }

            if (card.length >= 19) {

                if (cvv.length >= 3) {
                    if (props.progress > 90) {
                        animateProgress(props.progress, 90, "substraction");
                    } else {
                        animateProgress(props.progress, 90, "addition");
                    }
                } else {
                    if (props.progress > 80) {
                        animateProgress(props.progress, 80, "substraction");
                    } else {
                        animateProgress(props.progress, 80, "addition");
                    }
                }
            }
        }
    }

    const submit = () => {
        if (props.paymentType === props.CARD) {
            let p = validatePaymentCard(props.cardNumber);
            let pl = validatePaymentCardLength(props.cardNumber);
            let c = validateCVV(props.CVV);
            let cl = validateCVVLength(props.CVV);

            if (!(p && c && pl && cl)) {
                return;
            }
        }
        animateProgress(props.progress, 100, "addition");
    }

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

    useEffect(() => {
        if (props.progress !== 100) {
            animateProgress(60, props.progress, "addition");
        }
        props.setVisiblePages((previousInputs) => ({ ...previousInputs, forth: true }))
    }, [])


    const CARD = "card";
    const CASH = "cash";

    const [loading, setLoading] = useState(false);

    const resetAndReturn = () => {

        setLoading(true);

        props.setActiveCarBrandId("0");
        props.setActiveCarModelId("0");
        props.setPaymentType(CARD);
        props.setCardNumber("");
        props.setCVV("");
        props.setProgress(70);
        props.setTransmission("manual");
        props.setEngine("diesel");
        props.setAssurance(true);
        props.setPersonalInfo({
            name: "",
            surname: "",
            birth_day: "Dan",
            birth_month: "Mesec",
            birth_year: "Leto",
            gender: "male",
            address: "",
            post_code: "",
            phone_prefix: "+ 386 🇸🇮",
            phone_number: "",
            mail: "",
            licence_length: 1,
        });
        props.setCarPickupInfo({
            pickup_location: "Ljubljana",
            pickup_time: moment().format(),
            return_location: "Ljubljana",
            return_time: moment().add(5, 'days').format(),
            rent_duration: 5,
            moment_time: [moment(), moment().add(5, 'days')],
        });
        props.setVisiblePages({
            first: true,
            second: true,
            third: false,
            forth: false,
        });

        router.push('/home');
    };


    const [validation, setValidation] = useState(
        {
            paymentCard: true,
            CVV: true,
        }
    );

    const validatePaymentCard = (card) => {
        if (card.length === 0) {
            setValidation((previousInputs) => ({ ...previousInputs, paymentCard: false }));
            return false;
        } else { setValidation((previousInputs) => ({ ...previousInputs, paymentCard: true })); return true; }
    };

    const validatePaymentCardLength = (card) => {
        if (card.length < 19) {
            setValidation((previousInputs) => ({ ...previousInputs, paymentCard: false }));
            return false;
        } else { setValidation((previousInputs) => ({ ...previousInputs, paymentCard: true })); return true; }
    };

    const validateCVV = (card) => {
        if (card.length === 0) {
            setValidation((previousInputs) => ({ ...previousInputs, CVV: false }));
            return false;
        } else { setValidation((previousInputs) => ({ ...previousInputs, CVV: true })); return true; }
    };

    const validateCVVLength = (card) => {
        if (card.length < 3) {
            setValidation((previousInputs) => ({ ...previousInputs, CVV: false }));
            return false;
        } else { setValidation((previousInputs) => ({ ...previousInputs, CVV: true })); return true; }
    };

    return (
        <React.Fragment>
            <Head>
                <title>Avtek d.o.o.</title>
            </Head>

            {loading ? <></> : <div className="container mx-auto px-5 py-5">

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

                <div className="card shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">Plačilo</h2>
                        <div className="grid gap-6 gap-x-20 mb-2 md:grid-cols-2">

                            <div className="card max-h-80 shadow-xl">
                                <div className="card-body">
                                    <div className="mb-5">
                                        <div className="flex flex-row items-center">
                                            <div className="basis-3/4">
                                                <label className="label">
                                                    € {calculatePricePerDay()} &#215; {props.carPickupInfo["rent_duration"]} dni
                                                </label>
                                            </div>
                                            <div className="flex basis-1/4 justify-end">
                                                <label className="label">
                                                    € {calculatePrice()}.00
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
                                                    € {cleaningPrice}.00
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
                                                    € {servicePrice}.00
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
                                                    € {props.assurance ? 2 * props.carPickupInfo["rent_duration"] : 0}.00
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
                                                € {calculatePriceOverall()}.00
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
                                            <input type="radio" disabled={props.progress === 100} checked={props.paymentType === props.CASH} onChange={() => updatePaymentType(props.CASH)} name="radio-3" className="radio mr-2" />
                                            <span className="label-text">Gotovina</span>
                                        </label>
                                        <label className="label cursor-pointer">
                                            <input type="radio" disabled={props.progress === 100} checked={props.paymentType === props.CARD} onChange={() => updatePaymentType(props.CARD)} name="radio-3" className="radio mr-2" />
                                            <span className="label-text">Plačilna kartica</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Številka plačilne kartice</label>
                                    <div className="flex flex-row">
                                        <div className="basis-3/4 mr-2">
                                            <input type="text" id="postal_code" disabled={props.paymentType === props.CASH || props.progress === 100} className={`input bg-gray-50 ${validation.paymentCard ? "input-primary" : "input-error"} text-gray-900 text-sm rounded-lg block w-full p-2.5`} value={props.cardNumber} onChange={updateCardNumber} placeholder="Plačilna kartica" required />
                                        </div>
                                        <div className="basis-1/4 mr-2">
                                            <input type="text" id="address" disabled={props.paymentType === props.CASH || props.progress === 100} className={`input bg-gray-50 ${validation.CVV ? "input-primary" : "input-error"} text-gray-900 text-sm rounded-lg block w-full p-2.5`} value={props.CVV} onChange={updateCVV} placeholder="CCV" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-10">
                                    <div className={`radial-progress transition-all ease-out duration-100 ${props.progress === 100 ? "text-success" : "text-primary"}`} style={{ "--value": props.progress, "--size": "10rem" }}>{
                                        props.progress !== 100 ?
                                            <div className='flex flex-col'><div className='text-center'>Zaključeno</div><div className='text-center'>{props.progress}%</div></div>
                                            : "Hvala!"
                                    }
                                    </div>
                                </div>

                                {props.progress === 100 ?
                                    <div>
                                        <div className="flex flex-row items-center">
                                            <div className="basis-3/4">
                                                <label className="label">
                                                    Lokacija prevzema
                                                </label>
                                            </div>
                                            <div className="flex basis-1/4 justify-end">
                                                <label className="label font-bold">
                                                    {props.carPickupInfo.pickup_location}
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
                                                    {console.log(props.carPickupInfo)}
                                                    {moment(props.carPickupInfo.pickup_time).format("DD. MM. YYYY")}
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
                                                    {moment(props.carPickupInfo.pickup_time).format("HH:mm")}
                                                </label>
                                            </div>
                                        </div>
                                    </div> : <></>
                                }
                            </div>
                        </div>

                        {props.progress !== 100 ? <div className='mt-1 flex justify-end'>
                            <button type="submit" className="btn btn-primary" onClick={submit}>
                                {props.paymentType === props.CASH ? <a>Oddaj naročilo</a> : <a>Plačaj</a>}
                            </button>
                        </div> :
                            <div className='flex justify-end'>
                                <button onClick={resetAndReturn} className="btn btn-primary">
                                    Zaključi
                                </button>
                            </div>
                        }
                    </div>
                </div>

            </div >}
        </React.Fragment >
    );
}
