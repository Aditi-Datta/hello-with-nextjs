import { useRouter } from "next/router"
import Navbar from "../../components/Navbar";

function pageno() {
    const router = useRouter();
    const pageNumber = router.query.pageno;
    return (
        <>
        <Navbar></Navbar>
        <h1>Blog {pageNumber} content here.</h1>
        </>
    )
}

export default pageno