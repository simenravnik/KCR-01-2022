import React, { useState } from 'react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const CARD = "card";
  const CASH = "cash";

  const [activeCarBrandId, setActiveCarBrandId] = useState("1");
  const [activeCarModelId, setActiveCarModelId] = useState("1");
  const [paymentType, setPaymentType] = useState(CARD);
  const [cardNumber, setCardNumber] = useState("");
  const [CVV, setCVV] = useState("");
  const [progress, setProgress] = useState(70);

  const brands = [
    { id: "1", title: "OSNOVNI", src: "/images/car-normal.png" },
    { id: "2", title: "ŠPORTNIK", src: "/images/car-fast.png" },
    { id: "3", title: "SUV", src: "/images/car-suv.png" }
  ]

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
    />
  );
}

export default MyApp;
