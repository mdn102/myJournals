import { GithubIcon } from '../../assets/Icons';

const NavBar = () => {
	return (
		<React.Fragment>
			<div className='nav-bar'>
				<div className='nav-body'>
					<div className='container'>
						<a href='/' rel=''>
							<p className='brand-name'>
								my<span className='accent-clr'>Journals</span>
							</p>
						</a>
						<a href='https://developer.nytimes.com/' target='_blank' rel='open new tab'>
							<p className='brand-name'>
								<span className='accent-clr'>NewYork's Times</span>
							</p>
						</a>
						<a
							href='https://github.com/minhd-nguyen/myJournal'
							target='_blank'
							rel=''
						>
							<GithubIcon />
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
