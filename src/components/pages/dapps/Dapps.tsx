import DappCard from '../../elements/cards/DappCard';
import DappLink from '../../elements/cards/DappLink';

export default function Dapps(): JSX.Element {
	const cardTextErgo = 'Interact with SigmaUSD,\nthe first deployment of Djed,\non the Ergo Blockchain.';
	const cardTextCOTI = 'Interact with COTI\'s Djed\nimplemented in Plutus\non the Cardano Blockchain.';
	const cardTextMilkomeda = 'Interact with Djed on\nthe Milkomeda-C1\nEVM Sidechain of Cardano.';
	const cardTextZephyr = 'Interact with Zephyr Protocol, \na privacy focused, native chain \nDjed Implementation';

	return (
		<div className="py-20 my-20 items-center justify-center" id="djed_apps">
			<h4 className="dappsSubtitle my-3">Deployments of</h4>
			<h2 className="dappsTitle mb-20">Djed</h2>
			<div className="sm:flex-row lg:flex align-middle justify-center md:flex">
				<DappCard cardTitle="SigmaUSD" cardText={cardTextErgo}>
					<DappLink text="sigmausd.io" href="https://sigmausd.io/#/" />
					<DappLink text="tokenjay.app" href="https://tokenjay.app/app/#ageusd" />
				</DappCard>
				<DappCard cardTitle="COTI's Djed" cardText={cardTextCOTI}>
					<DappLink text="djed.xyz" href="https://djed.xyz/" />
				</DappCard>
				<DappCard cardTitle="Milkomeda-C1 Djed Dollar" cardText={cardTextMilkomeda}>
					<DappLink text="milkomeda-c1.djed.one" href="https://milkomeda-c1.djed.one/" />
				</DappCard>
				<DappCard cardTitle="Zephyr Protocol" cardText={cardTextZephyr}>
					<DappLink text="zephyrprotocol.com" href="https://zephyrprotocol.com/" />
					<DappLink text="network.zephyrprotocol.com" href="https://network.zephyrprotocol.com/" />
				</DappCard>
			</div>
		</div>
	);
}
