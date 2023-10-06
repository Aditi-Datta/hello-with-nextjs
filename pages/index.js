// import Head from 'next/head'
// import Image from 'next/image'

import style from '../styles/index.module.css';
import home from './home';
import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function index() {
  return (
    <>

      <Head>
        <title>Home Page</title>
        <meta charset="UTF-8"></meta>
        <meta name="description" content="Free web youtube tutorial"></meta>
        <meta name="keywords" content="HTML, CSS, JavaScript, React, Next.js"></meta>
        <meta name="author" content="Aditi Datta"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <Navbar></Navbar>



      <h2 className='homeTextDesign'>Hey this is Aditi Hello from Next App...</h2>
      <h2 className={style.mainHeading}>Hey this is Aditi Hello from Next App...</h2>
      <home></home>
    </>
  )
}
