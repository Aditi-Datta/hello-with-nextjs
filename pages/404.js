import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react";

export default function ErrorPage() {

    const router = useRouter();
    const handleInput = () => {
        router.push("/");
    };


    useEffect ( () => {
        setTimeout( () => {
            router.push('/');
        }, 3000);
    },[]);

    return (
        <>
            <div style={{textAlign:'center', marginTop:'10%'}}>
                <h1>404</h1>

                <h2>We are sorry. Page not found!</h2>

                <p>The page you are looking for might have been removed had its name changed or its temporarily unavailble.</p>

                
                <Link href="/"> <button>Back to Homepage</button>  </Link>

                <div>
                <a onClick={() => router.push("/") }> Back to Homepage</a>
                </div>

                <div>
                <a onClick={handleInput}>Back to Homepage</a>
                </div>
            </div>


        </>
    )
}
