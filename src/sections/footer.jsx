import { socials } from '../constants'

const Footer = () => {
	const currentYear = new Date().getFullYear()
	
	return (
		<footer className="bg-n8 py-10">
			<div className='container'>
				<div className='flex w-full items-center justify-between gap-8 max-md:flex-col'>
					<div className="flex items-center gap-8 max-md:flex-col">
						<a href="/" className="block">
							<img src="/images/xora.svg" alt="Xora" width={133} height={48} />
						</a>
						<p className="text-n4">© {currentYear} Xora. All rights reserved.</p>
					</div>
					
					<div className='flex items-center flex-wrap gap-4 sm:ml-auto'>
						<a href="#" className='text-n4 hover:text-p1 transition-colors duration-200'>
							Privacy Policy
						</a>
						<span className="text-n6">•</span>
						<a href="#" className='text-n4 hover:text-p1 transition-colors duration-200'>
							Terms of Use
						</a>
					</div>

					<ul className='flex gap-4 max-md:mt-6'>
						{socials.map(({ id, url, icon, title }) => (
							<li key={id}>
								<a 
									href={url} 
									className='flex size-10 items-center justify-center rounded-full bg-n7 transition-colors duration-200 hover:bg-n6'
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={icon}
										alt={title}
										width={20}
										height={20}
										className='object-contain'
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
