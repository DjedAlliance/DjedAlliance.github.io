interface Props {
  cardTitle: string
  cardText: string
  children: React.ReactNode;
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
			<div className="px-6 pt-4 pb-2 m-2">
				{props.children};
			</div>
		</div>
	);
};

export default DappCard;
