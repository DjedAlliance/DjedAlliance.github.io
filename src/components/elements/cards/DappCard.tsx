import ArrowButton from '../../blocks/svg/ArrowButton';

interface Props {
  cardTitle: string
  cardText: string
}

const DappCard = (props: Props): JSX.Element => {
	return (
		<div className="card max-w-sm rounded-lg overflow-hidden shadow-lg border z-30 m-10">
			<div className="px-6 py-4">
				<h3 className="cardTitle font-bold text-xl mb-2 whitespace-pre">{props.cardTitle}</h3>
				<p className="cardSubtitle text-left whitespace-pre">
					{props.cardText}
				</p>
			</div>
			<div className="px-6 pt-4 pb-2 m-5">
				<div className='flex flex-row align-middle my-6'>
					<ArrowButton />
					<p className='text-white mt-5 m-3'>Try out {props.cardTitle}</p>
				</div>
			</div>
		</div>
	);
};

export default DappCard;
