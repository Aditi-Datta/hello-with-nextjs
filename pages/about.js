import Head from "next/head"
import Navbar from "../components/Navbar"
import Image from "next/image"

function about() {
  return (
    <>
    <Head>
    <title>About Page</title>
    </Head>
      <Navbar></Navbar>
      <div style={{textAlign:"center"}}>
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
      </div>

      <Image src="https://www.bing.com/images/search?view=detailV2&ccid=yiwghr5M&id=20F312AC32482D2315F32381C25148C9A3E24304&thid=OIP.yiwghr5Mibj5Mb3soH0W1wHaE6&mediaurl=https%3a%2f%2fwww.shropshire-chamber.co.uk%2fwp-content%2fuploads%2f2016%2f09%2fwoman-using-computer-1241717-1919x1274.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ca2c2086be4c89b8f931bdeca07d16d7%3frik%3dBEPio8lIUcKBIw%26pid%3dImgRaw%26r%3d0&exph=1275&expw=1919&q=computer+useing+image&simid=608052810020833400&FORM=IRPRST&ck=FACCB3326176F3C264CB6333F15A36F7&selectedIndex=44&ajaxhist=0&ajaxserp=0" width="500" height="400"  alt="aboutImage"></Image>


    </>
  )
}

export default about