
import Navbar from "../components/Navbar"
import style from "../styles/about.module.css"

function about() {
  return (
    <>
    <Navbar></Navbar>
    <h1 className={style.heading}>This is About Page Section</h1>
    </>
  )
}

export default about