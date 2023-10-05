// import Head from 'next/head'
// import Image from 'next/image'

import style from '../styles/index.module.css';
import home from './home';
import Navbar from '../components/Navbar';

export default function index() {
  return (
    <>

     <Navbar></Navbar>



      <h2 className='homeTextDesign'>Hey this is Aditi Hello from Next App...</h2>
      <h2 className={style.mainHeading}>Hey this is Aditi Hello from Next App...</h2>
      <home></home>
    </>
  )
}
