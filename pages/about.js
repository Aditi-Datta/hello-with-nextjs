import Navbar from "../components/Navbar"
import Image from "next/image"

function about() {
  return (
    <>
    <Navbar></Navbar>
    <h1>This is About Page Section</h1>
    <p className="introp">Subscribe to my channel</p>
    <style jsx>
    {`
      h1{
        color: blue;
      }
      .introp{
        color: orange;
      }
      
    `}
    </style>

      <Image src="/computer.jpg" width="500" height="400" ></Image>


    </>
  )
}

export default about