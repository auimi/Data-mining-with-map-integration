import React from "react";
import { useState } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import MapComponent from './Map';
import Contact from './Contact';


const Home = () => {
    const [show, setShow] = useState(false);
    return(
    <div id='home' className='min-h-[100dvh] bg-black/60 relative'>
			<div className='bg-image'></div>
			<Navbar show={show} setShow={setShow} />

			<div className='w-full h-screen md:w-11/12 mx-auto overflow-hidden'>
				<div className='hero h-full flex flex-col lg:flex-row'>
					<div className='w-full h-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-2 text-center lg:text-start'>
						<p className='font-medium text-orange-500 text-xl md:text-2xl lg:text-3xl'>Under Data Mining - </p>
						<h1 className='text-gray-100 font-semibold text-5xl md:text-6xl lg:text-8xl tracking-tighter py-2'>Muntinlupa City</h1>
						<p className='max-w-sm md:max-w-md lg:max-w-xl text-sm md:text-md lg:text-lg mt-3 leading-5 text-gray-100'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et odio nostrum aspernatur debitis ab, fugiat cupiditate veritatis minus beatae nam? Id officiis aperiam optio soluta!
						</p>
						<a
							href='#about'
							type='button'
							className='focus:outline-none text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 mt-8'
						>
							Get Started
						</a>
					</div>
					<div className='w-full h-full lg:w-1/2 flex flex-col justify-center items-center lg:items-end space-y-4'>
						<div className='flex flex-col py-4 px-2 items-center lg:items-end justify-center'>
							<h1 className='text-5xl md:text-6xl lg:text-7xl text-orange-500 tracking-tight font-medium'>
								504,500 <span className='text-red-600 font-black'>+</span>
							</h1>
							<p className='text-xl font-medium text-gray-100'>population</p>
						</div>
						<div className='flex flex-col py-4 px-2 items-center lg:items-end justify-center'>
							<h1 className='text-5xl md:text-6xl lg:text-7xl text-orange-500 tracking-tight font-medium'>
								77,000 <span className='text-red-600 font-black'>+</span>
							</h1>
							<p className='text-xl font-medium text-gray-100'>active Students</p>
						</div>
						<div className='flex flex-col py-4 px-2 items-center lg:items-end justify-center'>
							<h1 className='text-5xl md:text-6xl lg:text-7xl text-orange-500 tracking-tight font-medium'>
								9 <span className='text-red-600 font-black'>+</span>
							</h1>
							<p className='text-xl font-medium text-gray-100'>total Barangays</p>
						</div>
					</div>
				</div>
			</div>
            <MapComponent />
            <Contact />
            <Footer />
            </div>

    );
}

export default Home;