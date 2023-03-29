import DappCard from '../../elements/cards/DappCard';

export default function Dapps (): JSX.Element {
	const cardTextMilkomeda = 'Here you can interact with a\ndeployment that uses these\nsmart contracts on Milkomeda C1.';
	const cardTextSig = 'Experience the latest\nadvancements in Stablecoins by\nbuying and selling SigUSD.';

	return (
		<div className="py-20 my-20 items-center" id="djed_apps">
			<h4 className='dappsSubtitle my-3'>Our solutions</h4>
			<h2 className='dappsTitle mb-20'>Get started</h2>
			<div className="flex align-middle justify-center">
				<DappCard cardTitle="Milkomeda C1" cardText={cardTextMilkomeda} cardHref="https://milkomeda.com/"/>
				<DappCard cardTitle="SigUSD" cardText={cardTextSig} cardHref="https://sigmausd.io/#/"/>
			</div>
			<div className='item-center align-middle justify-center'>
				<p className='contactParagraph my-10'>&#x2022; Contact us to have DJED on your blockchain</p>
			</div>
		</div>
	);
}
