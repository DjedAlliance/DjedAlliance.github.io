import DappCard from '../../elements/cards/DappCard';

export default function Dapps (): JSX.Element {
	const cardTextMilkomeda = 'Interact with Djed on the Milkomeda-C1\nEVM-Compatible Sidechain of Cardano.';
	const cardTextSig = 'Interact with SigmaUSD,\nthe first ever deployment of Djed,\non the Ergo Blockchain.';

	return (
		<div className="py-20 my-20 items-center" id="djed_apps">
			<h2 className='dappsTitle mb-20'>Djed</h2>
			<h4 className='dappsSubtitle my-3'>On Multiple Blockchains</h4>
			<div className="flex align-middle justify-center">
				<DappCard cardTitle="SigmaUSD" cardText={cardTextSig} cardHref="https://sigmausd.io/#/"/>
				<DappCard cardTitle="Milkomeda-C1 Djed Dollar" cardText={cardTextMilkomeda} cardHref="https://milkomeda.com/"/>
			</div>
			{/* <div className='item-center align-middle justify-center'>
				<p className='contactParagraph my-10'>&#x2022; Contact us to have DJED on your blockchain</p>
			</div> */}
		</div>
	);
}
