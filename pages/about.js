import Link from "next/link"


function about() {
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
    <h1>This is About Page Section</h1>
    </>
  )
}

export default about