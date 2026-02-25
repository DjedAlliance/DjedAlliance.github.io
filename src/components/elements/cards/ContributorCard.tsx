interface Props {
	contributor: string
	imageSrc: string
	contributorWeb: string
}

export default function ContributorCard({ contributor, imageSrc, contributorWeb }: Props): JSX.Element {
	return (
		<a
			href={contributorWeb}
			target='_blank'
			rel='noopener noreferrer'
			className='card block rounded-lg overflow-hidden shadow-lg border-[0.5px] border-[#353535] z-30 m-10 text-white bg-[linear-gradient(103deg,_#1A0E03_0.02%,_#272018_101.38%)] cursor-pointer'>
			<div className="px-6 pt-2 pb-2 m-5">
				<div className='flex flex-row align-middle my-6 justify-center'>
					<img className="rounded-full" style={{ width: '142px', height: '142px' }} src={imageSrc} alt={`${contributor} logo`} />
				</div>
			</div>
			<div className="px-6 py-4">
				<h3 className="font-bold text-xl mb-2 text-wrap">{contributor}</h3>
			</div>
		</a>
	);
}