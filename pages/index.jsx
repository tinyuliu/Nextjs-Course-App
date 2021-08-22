import React from 'react';
import Link from 'next/link';


const Page = () => {
    return (
        <div>
            <h1>Index Page</h1>
            <Link href="/notes">
                Note
            </Link>
        </div>
    )
}

export default Page;