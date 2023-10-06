import Navbar from "../components/Navbar"
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



    </>
  )
}

export default about