import { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");

  // Connect wallet
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Install MetaMask");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);

    // Get balance
    const provider = new ethers.BrowserProvider(window.ethereum);
    const bal = await provider.getBalance(accounts[0]);
    setBalance(ethers.formatEther(bal));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Base Activity Tracker</h2>

      <button onClick={connectWallet}>Connect Wallet</button>

      <p><b>Account:</b> {account}</p>
      <p><b>Balance:</b> {balance} ETH</p>
    </div>
  );
}

export default App;// tweak 04/20/2026 21:53:00
// tweak 04/20/2026 21:53:06
// tweak 04/20/2026 21:53:10
// tweak 04/20/2026 21:53:15
// tweak 04/20/2026 21:53:20
// tweak 04/20/2026 21:53:25
// tweak 04/20/2026 21:53:39
// tweak 04/20/2026 21:53:45
// tweak 04/20/2026 21:53:59
// tweak 04/20/2026 21:54:10
// tweak 04/20/2026 21:54:14
// tweak 04/20/2026 21:54:18
// tweak 04/20/2026 21:54:22
// tweak 04/20/2026 21:54:25
// tweak 04/20/2026 21:54:30
// tweak 04/21/2026 22:46:46
// tweak 04/21/2026 22:46:50
// tweak 04/21/2026 22:47:50
