import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl text-orange-600 font-bold my-5'>WELCOME TO OUR GOOD CHOICE</h1>
            <div>
            <h3 className='text-2xl'>1. Difference between sql and nosql?</h3>
            <p className='p-4'>
            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
            </p>
            </div>

        </div>
    );
};

export default Blog;