const Footer = () => {
	return (
		<div>
			<footer className='px-4 py-8 bg-gray-800 text-gray-400'>
				<div className='container flex flex-col flex-wrap items-center justify-center mx-auto space-y-4 sm:flex-row sm:justify-between sm:space-y-0'>
					<div className='flex flex-row'>
						<div className='flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full mr-8'>
							<a href='#home' className='flex items-center'>
								<span className='self-center text-2xl font-semibold whitespace-nowrap text-orange-500 ml-14'>Muntinlupa</span>
							</a>
						</div>
					</div>
					<ul className='flex flex-wrap space-x-4 sm:space-x-8'>
						<li>
							<a rel='noopener noreferrer' href='#'>
								Instagram
							</a>
						</li>
						<li>
							<a rel='noopener noreferrer' href='#'>
								Facebook
							</a>
						</li>
						<li>
							<a rel='noopener noreferrer' href='#'>
								Twitter
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
