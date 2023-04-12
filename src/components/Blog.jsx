import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="bg-indigo-100">
				<div className="main-container flex flex-col lg:flex-row gap-x-10 items-center justify-between">
					{/* Text Content */}
                    <div className="pb-20 lg:mt-8 py-10 mx-auto lg:mb-0">
                        <h2 className="mx-auto font-sans font-bold tracking-normal text-indigo-600 text-4xl lg:text-4xl sm:leading-none lg:leading-tight px-3">
                        Blog
                        </h2>
                    </div>
				</div>
			</div>
        
            <div>
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        </h2>
                    </div>
                </div>
                <div className='max-w-screen-xl sm:mx-auto my-24'>
                    <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div className='bg-indigo-200 p-8'>
                                <h3 className="mb-4 text-2xl font-bold">
                                1. When should you use context API?
                                </h3>
                                <p className="text-gray-700">
                                The Context API in React is used for managing the state of an application and passing data down the component tree without the need for props drilling.
                                <br />
                                If you find yourself passing the same props through different levels of your component hierarchy, or if you have a lot of state that needs to be accessed by multiple components, using the Context API can make your code cleaner and more manageable.
                                </p>
                            </div>
                            <div className='bg-indigo-200 p-8'>
                                <h3 className="mb-4 text-2xl font-bold">
                                2. What is a custom hook?
                                </h3>
                                <p className="text-gray-700">
                                Custom hook is a function in React that allows you to extract common logic from components and reuse it across your application. 
                                <br />
                                <br />
                                custom hooks are a powerful tool in React that can help you create reusable and composable code, reduce code duplication, and make your codebase more maintainable.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className='bg-indigo-200 p-8'>
                                <h3 className="mb-4 text-2xl font-bold">
                                    3. What is useRef?
                                </h3>
                                <p className="text-gray-700">
                                useRef is a hook in React, which allows functional components to access and store mutable values that persist across component renderings. 
                                <br />
                                <br />
                                It returns an object with a current property, which can be used to store and access a mutable value. 
                                <br />
                                The value stored in the current property can be updated without causing a component re-render.
                                </p>
                            </div>
                            <div className="bg-indigo-200 p-8">
                                <h3 className="mb-4 text-2xl font-bold">
                                    4. What is useMemo?
                                </h3>
                                <p className="text-gray-700">
                                useMemo is a hook in React that allows you to optimize the performance of your functional components by memoizing the results of expensive calculations.The basic idea behind useMemo is that it will only recompute the memoized value when one of its dependencies changes. This can help avoid expensive calculations being repeated unnecessarily on each component render.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;