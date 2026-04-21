import { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [txs, setTxs] = useState([]);

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const user = accounts[0];
    setAccount(user);

    const provider = new ethers.BrowserProvider(window.ethereum);
    const bal = await provider.getBalance(user);
    setBalance(ethers.formatEther(bal));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">🚀 Base Activity Tracker</h1>

      <button
        onClick={connectWallet}
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg mb-4"
      >
        Connect Wallet
      </button>

      {account && (
        <div className="bg-gray-800 p-4 rounded-xl w-full max-w-md">
          <p className="text-sm text-gray-400">Wallet</p>
          <p className="break-all">{account}</p>

          <p className="mt-4 text-sm text-gray-400">Balance</p>
          <p>{balance} ETH</p>
        </div>
      )}

      <div className="mt-6 w-full max-w-md">
        <h2 className="text-xl mb-3">Recent Transactions</h2>

        {txs.length === 0 && (
          <p className="text-gray-400">No transactions yet</p>
        )}
      </div>
    </div>
  );
}

export default App;