import DappCard from '../../elements/cards/DappCard';

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
				<DappCard cardTitle="SigmaUSD" href="https://sigmausd.io/#/" cardText={cardTextErgo} />
				<DappCard cardTitle="Djed powered by COTI" href="https://djed.xyz/" cardText={cardTextCOTI} />
				<DappCard cardTitle="Milkomeda Djed Osiris" href="https://milkomeda-c1.djed.one/" cardText={cardTextMilkomeda} />
				<DappCard cardTitle="Zephyr Protocol" href="https://zephyrprotocol.com/" cardText={cardTextZephyr} />
			</div>
		</div>
	);
}
