import DappCard from '../../elements/cards/DappCard';
import DappLink from '../../elements/cards/DappLink';

export default function Dapps (): JSX.Element {
	const cardTextMilkomeda = 'Interact with Djed on the Milkomeda-C1\nEVM-Compatible Sidechain of Cardano.\n\nTestnet! (Mainnet coming soon.)';
	const cardTextErgo = 'Interact with SigmaUSD,\nthe first ever deployment of Djed,\non the Ergo Blockchain.';

	return (
		<div className="py-20 my-20 items-center" id="djed_apps">
			<h4 className='dappsSubtitle my-3'>Deployments of</h4>
			<h2 className='dappsTitle mb-20'>Djed</h2>
			<div className="flex align-middle justify-center">
				<DappCard cardTitle="SigmaUSD" cardText={cardTextErgo}>
					<DappLink text="SigmaUSD" href="https://sigmausd.io/#/" />
				</DappCard>
				<DappCard cardTitle="Milkomeda-C1 Djed Dollar" cardText={cardTextMilkomeda}>
					<DappLink text="Milkomed-C1 Djed Dollar" href="https://milkomeda-c1-testnet.djed.one/" />
				</DappCard>
			</div>
			{/* <div className='item-center align-middle justify-center'>
				<p className='contactParagraph my-10'>&#x2022; Contact us to have DJED on your blockchain</p>
			</div> */}
		</div>
	);
}
