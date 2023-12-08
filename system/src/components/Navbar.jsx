import React from 'react';

const Navbar = React.memo(({ show, setShow }) => {
	return (
		<div>
			<nav className='fixed w-full bg-transparent backdrop-blur-sm shadow-sm'>
				<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
					<a href='#home' className='flex items-center'>
						<span className='self-center text-2xl font-semibold whitespace-nowrap text-orange-500'>Muntinlupa</span>
					</a>
					<button
						onClick={() => setShow((prev) => !prev)}
						className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200'
					>
						<svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
							<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
						</svg>
					</button>
					<div className={show ? 'block w-full md:block md:w-auto' : 'hidden w-full md:block md:w-auto'} id='navbar-default'>
						<ul className='font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0'>
							<li>
								<a href='#home' className='block text-gray-100 p-4 rounded md:hover:bg-transparent md:border-0 md:p-0'>
									Home
								</a>
							</li>
							<li>
								<a href='#about' className='block text-gray-100 p-4 rounded md:hover:bg-transparent md:border-0 md:p-0'>
									Schools 
								</a>
							</li>
							<li>
								<a href='#contact' className='block text-gray-100 p-4 rounded md:hover:bg-transparent md:border-0 md:p-0 '>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
});

export default Navbar;
