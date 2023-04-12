import React, { useEffect, useState } from 'react';
import Category from './Category';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
			.then((res) => res.json())
			.then((data) => setCategories(data));
    }, []);

    return (
        <section>
            <div className='flex flex-col items-center pb-4 text-center lg:pb-12 text-gray-900'>
                <h1 className=' pt-36 w-full lg:leading-tight text-3xl lg:text-4xl font-bold lg:max-w-3xl title-text'>Job Category List</h1>
                <p className='my-6 text-lg px-4 md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900'>Explore thousands of job opportunities with all the information you need in your future.</p>
            </div>
            <div className='grid grid-cols lg:grid-cols-4 gap-5 main-container lg:space-y-0'>
                {categories.map((catagory)=> 
                <Category
                    key={catagory.id}
                    catagory= {catagory}
                ></Category>
                )}
            </div>
            
        </section>
    );
};

export default CategoryList;