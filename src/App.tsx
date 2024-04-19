import React, { useEffect } from 'react';
import { MainIndex } from './components';
import { ThemeBlackState, ThemeWhiteState, useToggleTheme } from './hooks/useToggleTheme';
import { useWallet } from './hooks/useWallet';
import { useConnectKeplrWalletStore } from './hooks/useConnectKeplrWalletStore';

function App() {

	const [theme, setTheme] = useToggleTheme();
	const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();
	const [ wallet, setWallet ] = useWallet();

	useEffect(() => {
		if (localStorage.getItem('Theme') != "") {
			setTheme(localStorage.getItem('Theme') == 'white' ? ThemeWhiteState : ThemeBlackState)
		} else {
			setTheme(ThemeWhiteState)
		}

		if (!localStorage.hasOwnProperty('Wallet')) {
			localStorage.setItem('Wallet', JSON.stringify({
				init: false,
				wallet: null,
				type: ""
			}))
		} else {
			//if (localStorage.getItem('Wallet') != "") { 
			let wallet = JSON.parse(String(localStorage.getItem('Wallet')))
			if (wallet.wallet === null) {
				setConnectWallet({connected: false})
			} else {
				setConnectWallet({connected: true})
			}
			setWallet(wallet)

		}
	}, [])

	return (
		<div>
			<MainIndex />
		</div>
	);
}

export default App;
