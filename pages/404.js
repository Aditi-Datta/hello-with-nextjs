import Link from "next/link"


export default function ErrorPage() {
    return (
        <>
       

            <div style={{textAlign:'center', marginTop:'10%'}}>
                <h1>404</h1>

                <h2>We are sorry. Page not found!</h2>

                <p>The page you are looking for might have been removed had its name changed or its temporarily unavailble.</p>

                <Link href="/"> <button>Back to Homepage</button>  </Link>
            </div>


        </>
    )
}
