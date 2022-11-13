import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CarBrandCard from '../elements/CarBrandCard';
import CarModelCard from '../elements/CarModelCard';

export default function Second() {

  return (
    <React.Fragment>
      <Head>
        <title>Avtek</title>
      </Head>

      <div className="container mx-auto px-2 py-5">

        <h1 className="font-alfa font-regular leading-tight text-5xl mt-0 mb-2">AVTEK.si</h1>

        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href='/home'>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Documents
              </a>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              Add Document
            </li>
          </ul>
        </div>

      </div>
    </React.Fragment >
  );
}
