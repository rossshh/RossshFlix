import Link from 'next/link';

const NotFound=()=>{
    return(
        <section>
            <div>
                <h1>404</h1>
                <h2>Not Found</h2>
                <p>Could Not Find Requested Reference</p>
                <Link href="/"><button>Go to Home Page</button></Link>
            </div>
        </section>
    );
};
export default NotFound;