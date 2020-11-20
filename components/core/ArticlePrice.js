const ArticlePrice = ({ value = 50 }) => {
	const generatePrice = () => {
		if (value >= 75) {
			return (
				<React.Fragment>
					<span className='dollars-icon'>$</span>13.47 onwards
				</React.Fragment>
			);
		}
		else if (value > 50 && value < 100) {
			return (
				<React.Fragment>
					<span className='dollars-icon'>$</span>
					{value/50}
				</React.Fragment>
			);
		}
		return 'Free';
	};

	return <React.Fragment>{generatePrice()}</React.Fragment>;
};

export default ArticlePrice;
