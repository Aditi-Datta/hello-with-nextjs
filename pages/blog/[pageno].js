import { useRouter } from "next/router"

function pageno() {
    const router = useRouter();
    const pageNumber = router.query.pageno;
    return (
        <>
        <h1>Blog {pageNumber} content here.</h1>
        </>
    )
}

export default pageno