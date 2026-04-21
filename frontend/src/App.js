import { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [txs, setTxs] = useState([]);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Install MetaMask");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const user = accounts[0];
    setAccount(user);

    const provider = new ethers.BrowserProvider(window.ethereum);
    const bal = await provider.getBalance(user);
    setBalance(ethers.formatEther(bal));

    // Fetch transactions
    fetchTxs(user);
  };

  const fetchTxs = async (address) => {
    const API_KEY = "YOUR_API_KEY";

    const url = `https://api-sepolia.basescan.org/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.status === "1") {
      setTxs(data.result.slice(0, 5)); // last 5 txs
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Base Activity Tracker</h2>

      <button onClick={connectWallet}>Connect Wallet</button>

      <p><b>Account:</b> {account}</p>
      <p><b>Balance:</b> {balance} ETH</p>

      <h3>Recent Transactions</h3>

      {txs.map((tx, i) => (
        <div key={i} style={{ marginBottom: "10px" }}>
          <p>Hash: {tx.hash.slice(0, 10)}...</p>
          <p>Value: {ethers.formatEther(tx.value)} ETH</p>
        </div>
      ))}
    </div>
  );
}

export default App;