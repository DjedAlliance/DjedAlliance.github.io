import ArrowButton from '../../blocks/svg/ArrowButton';

interface Props {
  cardTitle: string
  cardText: string
  cardHref: string
}

const DappCard = (props: Props): JSX.Element => {
	return (
		<div className="card rounded-lg overflow-hidden shadow-lg border z-30 lg:m-10 m-5">
			<div className="px-6 py-4">
				<h3 className="cardTitle font-bold whitespace-normal text-md lg:text-xl mb-2 py-2 lg:whitespace-pre">{props.cardTitle}</h3>
				<p className="cardSubtitle text-left whitespace-normal text-sm md:text-lg py-2 lg:whitespace-pre">
					{props.cardText}
				</p>
			</div>
			<div className="px-6 pt-4 pb-2 m-5">
				<div className='flex flex-row align-middle my-6'>
					<span className='hidden lg:block md:block'><ArrowButton onClick={() => window.open(props.cardHref, '_blank')}/></span>
					<a href={props.cardHref} target="_blank" rel="noreferrer"><p className='text-white mt-0 lg:mt-5 m-0 lg:m-3 md:mt-4 md:mx-4'>Try out {props.cardTitle}</p></a>
				</div>
			</div>
		</div>
	);
};

export default DappCard;
