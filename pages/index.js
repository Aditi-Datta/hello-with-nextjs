// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import home from './home';

export default function index() {
  return (
    <>

      <nav>
        <ul >
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/product">
            Product
          </Link>
        </li>
        </ul>
      </nav>



      <h2>Hey this is Aditi Hello from Next App...</h2>
      <home></home>
    </>
  )
}
