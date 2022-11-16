import React, { useState } from 'react';

import 'antd/dist/antd.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const CARD = "card";
  const CASH = "cash";

  const [activeCarBrandId, setActiveCarBrandId] = useState("0");
  const [activeCarModelId, setActiveCarModelId] = useState("0");
  const [paymentType, setPaymentType] = useState(CARD);
  const [cardNumber, setCardNumber] = useState("");
  const [CVV, setCVV] = useState("");
  const [progress, setProgress] = useState(70);
  const [transmission, setTransmission] = useState("manual");
  const [engine, setEngine] = useState("diesel");
  const [assurance, setAssurance] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    surname: "",
    birth_day: "Dan",
    birth_month: "Mesec",
    birth_year: "Leto",
    gender: "",
    address: "",
    post_code: "",
    phone_prefix: "+ 386 🇸🇮",
    phone_number: "",
    mail: "",

  });

  const brands = [
    { id: "0", title: "OSNOVNI", src: "/images/car-normal.png" },
    { id: "1", title: "ŠPORTNIK", src: "/images/car-fast.png" },
    { id: "2", title: "SUV", src: "/images/car-suv.png" }
  ]

  const cars = {
    "0": [
      { id: "0", brand: "Mercedes", model: "C180", src: "/images/logos/mercedes.png" },
      { id: "1", brand: "Audi", model: "A5", src: "/images/logos/audi.png" },
      { id: "2", brand: "Toyota", model: "Avensis", src: "/images/logos/toyota.png" },
      { id: "3", brand: "Honda", model: "Accord", src: "/images/logos/honda.png" },
      { id: "4", brand: "Skoda", model: "Octavia", src: "/images/logos/skoda.png" }
    ],
    "1": [
      { id: "0", brand: "Lamborgini", model: "Aventador", src: "/images/logos/lamborgini.png" },
      { id: "1", brand: "Ferrari", model: "488", src: "/images/logos/ferrari.png" },
      { id: "2", brand: "Porsche", model: "911", src: "/images/logos/porsche.png" },
    ],
    "2": [
      { id: "0", brand: "Jeep", model: "Wrangler", src: "/images/logos/jeep.png" },
      { id: "1", brand: "Land Rover", model: "Defender", src: "/images/logos/land-rover.png" },
      { id: "2", brand: "Toyota", model: "4runner", src: "/images/logos/toyota.png" },
      { id: "3", brand: "Suzuki", model: "Jimny", src: "/images/logos/suzuki.png" },
    ],
  }

  return (
    <Component {...pageProps}
      activeCarBrandId={activeCarBrandId}
      setActiveCarBrandId={setActiveCarBrandId}
      activeCarModelId={activeCarModelId}
      setActiveCarModelId={setActiveCarModelId}
      brands={brands}
      cars={cars}
      CASH={CASH}
      CARD={CARD}
      paymentType={paymentType}
      setPaymentType={setPaymentType}
      cardNumber={cardNumber}
      setCardNumber={setCardNumber}
      CVV={CVV}
      setCVV={setCVV}
      progress={progress}
      setProgress={setProgress}
      transmission={transmission}
      setTransmission={setTransmission}
      engine={engine}
      setEngine={setEngine}
      assurance={assurance}
      setAssurance={setAssurance}
      personalInfo={personalInfo}
      setPersonalInfo={setPersonalInfo}
    />
  );
}

export default MyApp;
