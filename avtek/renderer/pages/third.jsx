import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Third() {

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
						<div className="grid gap-6 gap-x-20 mb-6 md:grid-cols-2">
							<div className="flex flex-col gap-4">
								<div>
									<label className="block mb-2 text-sm font-medium">Ime</label>
									<input type="text" id="first_name" className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Name" required />
								</div>
								<div>
									<label className="block mb-2 text-sm font-medium">Priimek</label>
									<input type="text" id="first_name" className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Surname" required />
								</div>

							</div>

							<div className="flex flex-col gap-4">
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
									<label className="block mb-2 text-sm font-medium">Spol</label>
									<div className="flex flex-row">
										<label className="label cursor-pointer mr-5">
											<input type="radio" name="radio-10" className="radio mr-2" />
											<span className="label-text mr-1">Moški</span>
										</label>
										<label className="label cursor-pointer mr-5">
											<input type="radio" name="radio-10" className="radio mr-2" />
											<span className="label-text mr-1">Ženska</span>
										</label>
									</div>
								</div>
							</div>
						</div>

						<div className="mb-6">
							<label className="block mb-2 text-sm font-medium">Naslov in poštna številka</label>
							<div className="flex flex-row">
								<div className="basis-1/3 mr-2">
									<input type="text" id="postal_code" className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Pošta" required />
								</div>
								<div className="basis-2/3 mr-2">
									<input type="text" id="address" className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Naslov" required />
								</div>
							</div>
						</div>


						<div className="grid gap-6 mb-2 gap-x-20 md:grid-cols-2">
							<div className="mb-6">
								<label className="block mb-2 text-sm font-medium">Telefonska številka</label>
								<div className="flex flex-row">
									<div className="basis-1/3">
										<select className="select bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-l-lg rounded-r-none block w-full p-2.5" defaultValue={"+ 386 🇸🇮"}>
											<option>+ 386 🇸🇮</option>
											<option>+ 387</option>
										</select>
									</div>
									<div className="basis-2/3 mr-2">
										<input type="text" id="address" className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-none rounded-r-lg block w-full p-2.5" placeholder="Telefon" required />
									</div>
								</div>
							</div>

							<div className="mb-6">
								<label className="block mb-2 text-sm font-medium">E-poštni naslov</label>
								<input type="text" id="address" className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="e-pošta" required />
							</div>
						</div>

						<div className='mt-1 flex justify-end'>
							<Link href='/forth'>
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
