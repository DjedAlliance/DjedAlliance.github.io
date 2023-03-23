interface Props {
  contributor: string
  twitterHandle: string
}

export default function ContributorCard ({ contributor, twitterHandle }: Props): JSX.Element {
	return (
		<div className="card max-w-sm rounded-lg overflow-hidden shadow-lg border z-30 m-10">
			<div className="px-6 py-4">
				<h3 className="cardTitle font-bold text-xl mb-2 whitespace-pre">{contributor}</h3>
			</div>
			<div className="px-6 pt-4 pb-2 m-5">
				<div className='flex flex-row align-middle my-6'>
					<p className='text-white mt-5 m-3'>{twitterHandle}</p>
				</div>
			</div>
		</div>
	);
}
