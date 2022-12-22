import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl text-orange-600 font-bold my-5'>WELCOME TO OUR GOOD CHOICE</h1>
            <div>
            <h2 className='text-2xl'>1. Difference between sql and nosql?</h2>
            <p className='p-4'>
            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
            </p>
            </div>

            <div>
                <h2 className='text-2xl' >
                2. What is JWT, and how does it work?
                </h2>
                <p>
                What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).

                </p>
                
            </div>

        </div>
    );
};

export default Blog;