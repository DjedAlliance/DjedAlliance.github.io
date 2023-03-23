import ContributorCard from '../../elements/cards/ContributorCard';

export default function Contributors (): JSX.Element {
	return (
		<div className="py-20 my-20 items-center" id="contributors">
			<h4 className='dappsSubtitle my-3'>Valuable Team</h4>
			<h2 className='dappsTitle mb-20'>Our Contributors</h2>
			<div className='item-center align-middle justify-center'>
				<p className='contactParagraph my-10'>We are glad that we have partners who have recognized our values.</p>
			</div>
			<div className="flex items-center align-middle justify-center">
				<ContributorCard contributor="dcSpark" twitterHandle="@dcspark_io" />
				<ContributorCard contributor="Milkomeda" twitterHandle="@Milkomeda_com" />
				<ContributorCard contributor="Thespian" twitterHandle="@ThespianAgency" />
				<ContributorCard contributor="Ergo" twitterHandle="@Ergo_Platform" />
			</div>
		</div>
	);
}
