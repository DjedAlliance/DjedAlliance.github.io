import DappCard from '../../elements/cards/DappCard';
import DappLink from '../../elements/cards/DappLink';

export default function Dapps (): JSX.Element {
	const cardTextErgo = 'Interact with SigmaUSD,\nthe first deployment of Djed,\non the Ergo Blockchain.';
	const cardTextCOTI = 'Interact with COTI&apos;s Djed\nimplemented in Plutus\non the Cardano Blockchain.';
	const cardTextMilkomeda = 'Interact with Djed on the Milkomeda-C1\nEVM-Compatible Sidechain of Cardano.\nTestnet! (Mainnet coming soon!)';

	return (
		<div className="py-20 my-20 items-center" id="djed_apps">
			<h4 className='dappsSubtitle my-3'>Deployments of</h4>
			<h2 className='dappsTitle mb-20'>Djed</h2>
			<div className="flex align-middle justify-center">
				<DappCard cardTitle="SigmaUSD" cardText={cardTextErgo}>
					<DappLink text="sigmausd.io" href="https://sigmausd.io/#/" />
					<DappLink text="tokenjay.app" href="https://tokenjay.app/app/#ageusd" />
				</DappCard>
				<DappCard cardTitle="COTI&apos;s Djed" cardText={cardTextCOTI}>
					<DappLink text="djed.xyz" href="https://djed.xyz/" />
				</DappCard>
				<DappCard cardTitle="Milkomeda-C1 Djed Dollar" cardText={cardTextMilkomeda}>
					<DappLink text="milkomeda-c1.djed.one" href="https://milkomeda-c1-testnet.djed.one/" />
				</DappCard>
			</div>
		</div>
	);
}
