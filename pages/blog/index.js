import Link from 'next/link';
import Navbar from '../../components/Navbar'

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return{
    props: {
      data,
    },
  };
};

function index({data}) {
  return (
    <>
    <Navbar></Navbar>
    <div style={{textAlign:"center", }}>
    
    
    {
      data.slice(0,5).map((curElement) => {
        return(
          <div key={curElement.id} >
          <h3>{curElement.id}</h3>

          <Link href={`/blog/${curElement.id}`}>
          <h2>{curElement.title}</h2>
          </Link>

          </div>
        )
      })
      
    }
    </div>
    <h1>This is Blog page</h1>
    </>
  )
}

export default index