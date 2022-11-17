import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Third(props) {

	const [validation, setValidation] = useState(
		{
			name: true,
			surname: true,
			address: true,
			postal_code: true,
			phone: true,
			mail: true,
			gender: true,
			birth_day: true,
			birth_month: true,
			birth_year: true,
		}
	);

	const validateName = (name) => {
		if (name.length === 0) {
			setValidation((previousInputs) => ({ ...previousInputs, name: false }));
		} else { setValidation((previousInputs) => ({ ...previousInputs, name: true })); }
	};

	const validateSurname = (name) => {
		if (name.length === 0) {
			setValidation((previousInputs) => ({ ...previousInputs, surname: false }));
		} else { setValidation((previousInputs) => ({ ...previousInputs, surname: true })); }
	};

	const validateAddress = (address) => {
		if (address.length === 0) {
			setValidation((previousInputs) => ({ ...previousInputs, address: false }));
		} else { setValidation((previousInputs) => ({ ...previousInputs, address: true })); }
	};

	const validatePostalCode = (post) => {
		if (post.length === 0) {
			setValidation((previousInputs) => ({ ...previousInputs, postal_code: false }));
		} else { setValidation((previousInputs) => ({ ...previousInputs, postal_code: true })); }
	};

	const validatePhone = (phone) => {
		if (phone.length === 0) {
			setValidation((previousInputs) => ({ ...previousInputs, phone: false }));
		} else { setValidation((previousInputs) => ({ ...previousInputs, phone: true })); }
	};

	const validateMail = (mail) => {
		if (mail.length === 0) {
			setValidation((previousInputs) => ({ ...previousInputs, mail: false }));
		} else { setValidation((previousInputs) => ({ ...previousInputs, mail: true })); }
	};

	const validateMailRegex = (mail) => {
		const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

		if (mail === '') {
			setValidation((previousInputs) => ({ ...previousInputs, mail: false }));
			return;
		}

		if (!re.test(mail)) {
			setValidation((previousInputs) => ({ ...previousInputs, mail: false }));
			return;
		}
	}

	const validateBirthDay = (day) => {
		if (day === "Dan") {
			setValidation((previousInputs) => ({ ...previousInputs, birth_day: false }));
		} else { setValidation((previousInputs) => ({ ...previousInputs, birth_day: true })); }
	};

	const validateBirthMonth = (month) => {
		if (month === "Mesec") {
			setValidation((previousInputs) => ({ ...previousInputs, birth_month: false }));
		} else { setValidation((previousInputs) => ({ ...previousInputs, birth_month: true })); }
	};

	const validateBirthYear = (year) => {
		if (year === "Leto") {
			setValidation((previousInputs) => ({ ...previousInputs, birth_year: false }));
		} else { setValidation((previousInputs) => ({ ...previousInputs, birth_year: true })); }
	};

	const validateForm = () => {
		validateName(props.personalInfo.name);
		validateSurname(props.personalInfo.surname);
		validateAddress(props.personalInfo.address);
		validatePostalCode(props.personalInfo.post_code);
		validatePhone(props.personalInfo.phone_number);
		validateMail(props.personalInfo.mail);
		validateBirthDay(props.personalInfo.birth_day);
		validateBirthMonth(props.personalInfo.birth_month);
		validateBirthYear(props.personalInfo.birth_year);

		validateMailRegex(props.personalInfo.mail)

	};

	const updatePostCode = (e) => {
		e.preventDefault();

		let newPostCode = e.target.value;
		const re = /^[0-9\b]+$/;

		if (newPostCode === '' || re.test(newPostCode)) {
			if (newPostCode.length < 5) {

				props.setPersonalInfo({ ...props.personalInfo, post_code: newPostCode });

				validatePostalCode(e.target.value);
			}
		}
	}

	const updatePhone = (e) => {
		e.preventDefault();

		let newPhone = e.target.value;
		const re = /^[0-9\b]+$/;

		if (newPhone === '' || re.test(newPhone)) {
			if (newPhone.length < 9) {
				props.setPersonalInfo({ ...props.personalInfo, phone_number: newPhone });
				validatePhone(e.target.value);
			}
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
						<h2 className="card-title">Osebni podatki</h2>
						<div className={`grid ${validation.surname ? "mb-6" : ""} gap-x-20 md:grid-cols-2`}>
							<div className={`flex flex-col ${validation.name ? "gap-4" : ""}`}>
								<div>
									<label className="block mb-2 text-sm font-medium">Ime</label>
									<input type="text" id="first_name" value={props.personalInfo.name} onChange={e => { props.setPersonalInfo({ ...props.personalInfo, name: e.target.value }); validateName(e.target.value); }} className={`input input-bordered ${validation.name ? "input-primary" : "input-error"} w-full bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5`} placeholder="Name" required />
									{!validation.name ?
										<div className='relative w-100 h-200'>
											<label className="label">
												<span className="label-text-alt"></span>
												<span className="label-text-alt"><p className='text-red-700'>Polje je obvezno</p></span>
											</label></div> : <></>}
								</div>
								<div>
									<label className="block mb-2 text-sm font-medium">Priimek</label>
									<input type="text" id="first_name" value={props.personalInfo.surname} onChange={e => { props.setPersonalInfo({ ...props.personalInfo, surname: e.target.value }); validateSurname(e.target.value); }} className={`input input-bordered ${validation.surname ? "input-primary" : "input-error"} w-full bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5`} placeholder="Surname" required />
									{!validation.surname ? <label className="label">
										<span className="label-text-alt"></span>
										<span className="label-text-alt"><p className='text-red-700'>Polje je obvezno</p></span>
									</label> : <></>}
								</div>
							</div>

							<div className={`flex flex-col ${validation.birth_day && validation.birth_month && validation.birth_year ? "gap-4" : ""}`}>
								<div>
									<label className="block mb-2 text-sm font-medium">Datum rojstva</label>
									<div className="flex flex-row">
										<div className="basis-1/4 mr-2">
											<select value={props.personalInfo.birth_day} onChange={e => { props.setPersonalInfo({ ...props.personalInfo, birth_day: e.target.value }); validateBirthDay(e.target.value); }} className={`select ${validation.birth_day ? "input-primary" : "input-error"} bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5`} defaultValue={"Dan"}>
												<option disabled>Dan</option>
												{Array.from({ length: 31 }, (_, index) => index + 1).map(i => (
													<option>{i}</option>
												))}
											</select>
										</div>
										<div className="basis-1/4 mr-2">
											<select value={props.personalInfo.birth_month} onChange={e => { props.setPersonalInfo({ ...props.personalInfo, birth_month: e.target.value }); validateBirthMonth(e.target.value); }} className={`select ${validation.birth_month ? "input-primary" : "input-error"} bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5`} defaultValue={"Mesec"}>
												<option disabled>Mesec</option>
												<option>Januar</option>
												<option>Februar</option>
												<option>Marec</option>
												<option>April</option>
												<option>Maj</option>
												<option>Junij</option>
												<option>Julij</option>
												<option>Avgust</option>
												<option>September</option>
												<option>Oktober</option>
												<option>November</option>
												<option>December</option>
											</select>
										</div>
										<div className="basis-1/2">
											<select value={props.personalInfo.birth_year} onChange={e => { props.setPersonalInfo({ ...props.personalInfo, birth_year: e.target.value }); validateBirthYear(e.target.value); }} className={`select ${validation.birth_year ? "input-primary" : "input-error"} bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5`} defaultValue={"Leto"}>
												<option disabled>Leto</option>
												{Array.from({ length: 2022 }, (_, index) => index + 1).slice(1930, 2023).map(i => (
													<option>{i}</option>
												))}
											</select>
										</div>

									</div>
									{!validation.birth_day || !validation.birth_month || !validation.birth_year ? <label className="label">
										<span className="label-text-alt"></span>
										<span className="label-text-alt"><p className='text-red-700'>Polje je obvezno</p></span>
									</label> : <></>}
								</div>

								<div>
									<label className="block mb-2 text-sm font-medium">Spol</label>
									<div className="flex flex-row">
										<label className="label cursor-pointer mr-5">
											<input checked={props.personalInfo.gender === "male"} onChange={() => props.setPersonalInfo({ ...props.personalInfo, gender: "male" })} type="radio" name="radio-120" className="radio mr-2" />
											<span className="label-text mr-1">Moški</span>
										</label>
										<label className="label cursor-pointer mr-5">
											<input checked={props.personalInfo.gender === "female"} onChange={() => props.setPersonalInfo({ ...props.personalInfo, gender: "female" })} type="radio" name="radio-120" className="radio mr-2" />
											<span className="label-text mr-1">Ženska</span>
										</label>
									</div>
								</div>
							</div>
						</div>

						<div className={`${validation.postal_code && validation.address ? "mb-6" : ""}`}>
							<label className="block mb-2 text-sm font-medium">Poštna številka in naslov</label>
							<div className="flex flex-row">
								<div className="basis-1/3 mr-2">
									<input type="text" id="postal_code" value={props.personalInfo.post_code} onChange={e => { updatePostCode(e) }} className={`input input-bordered ${validation.postal_code ? "input-primary" : "input-error"} w-full bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5`} placeholder="Pošta" required />
									{!validation.postal_code ? <label className="label">
										<span className="label-text-alt"></span>
										<span className="label-text-alt"><p className='text-red-700'>Polje je obvezno</p></span>
									</label> : <></>}
								</div>
								<div className="basis-2/3 mr-2">
									<input type="text" id="address" value={props.personalInfo.address} onChange={e => { props.setPersonalInfo({ ...props.personalInfo, address: e.target.value }); validateAddress(e.target.value) }} className={`input input-bordered ${validation.address ? "input-primary" : "input-error"} w-full bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5`} placeholder="Naslov" required />
									{!validation.address ? <label className="label">
										<span className="label-text-alt"></span>
										<span className="label-text-alt"><p className='text-red-700'>Polje je obvezno</p></span>
									</label> : <></>}
								</div>
							</div>
						</div>


						<div className={`${(validation.phone && validation.mail) ? "mb-6" : ""} grid gap-6 gap-x-20 md:grid-cols-2`}>
							<div>
								<label className="block mb-2 text-sm font-medium">Telefonska številka</label>
								<div className="flex flex-row">
									<div className="basis-1/3">
										<select value={props.personalInfo.phone_prefix} onChange={e => props.setPersonalInfo({ ...props.personalInfo, phone_prefix: e.target.value })} className="select bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-l-lg rounded-r-none block w-full p-2.5" defaultValue={"+ 386 🇸🇮"}>
											<option>+ 386 🇸🇮</option>
											<option>+ 387</option>
											<option>+ 54</option>
										</select>
									</div>
									<div className="basis-2/3 mr-2">
										<input type="text" id="phone" value={props.personalInfo.phone_number} onChange={e => { updatePhone(e) }} className={`input input-bordered ${validation.phone ? "input-primary" : "input-error"} w-full bg-gray-50 text-gray-900 text-sm rounded-r-lg rounded-l-none block w-full p-2.5`} placeholder="Telefon" required />
										{!validation.phone ? <label className="label">
											<span className="label-text-alt"></span>
											<span className="label-text-alt"><p className='text-red-700'>Polje je obvezno</p></span>
										</label> : <></>}
									</div>
								</div>
							</div>

							<div>
								<label className="block mb-2 text-sm font-medium">E-poštni naslov</label>
								<input type="text" id="mail" value={props.personalInfo.mail} onChange={e => { props.setPersonalInfo({ ...props.personalInfo, mail: e.target.value }); validateMail(e.target.value) }} className={`input nput-bordered ${validation.mail ? "input-primary" : "input-error"} w-full bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5`} placeholder="e-pošta" required />
								{!validation.mail ? <label className="label">
									<span className="label-text-alt"></span>
									<span className="label-text-alt"><p className='text-red-700'>Nepravilen vnos</p></span>
								</label> : <></>}
							</div>
						</div>

						<div className='mt-1 flex justify-end'>
							<button onClick={validateForm} className="btn btn-primary">
								<a>Naprej</a>
							</button>
						</div>
					</div>
				</div>

			</div>
		</React.Fragment >
	);
}
