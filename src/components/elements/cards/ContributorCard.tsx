interface Props {
  contributor: string
  imageSrc: string
}

export default function ContributorCard ({ contributor, imageSrc }: Props): JSX.Element {
	return (
		<div className="card max-w-sm rounded-lg overflow-hidden shadow-lg border z-30 m-10 bg-white">
			<div className="px-6 pt-2 pb-2 m-5">
				<div className='flex flex-row align-middle my-6 justify-center'>
					<img className="rounded-full" style={{ width: '142px', height: '142px' }} src={imageSrc} />
				</div>
			</div>
			<div className="px-6 py-4">
				<h3 className="font-bold text-xl mb-2 whitespace-pre">{contributor}</h3>
			</div>
		</div>
	);
}
