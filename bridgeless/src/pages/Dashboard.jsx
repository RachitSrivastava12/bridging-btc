import { useState } from 'react';
import { TrendingUp, X } from 'lucide-react';
import WalletCard from '../components/WalletCard';
import AddWalletCard from '../components/AddWalletCard';

const Dashboard = ({ user }) => {
  const [wallets, setWallets] = useState([
    {
      id: 1,
      chain: 'bitcoin',
      address: user.walletAddress,
      balance: 1.2458
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newWalletChain, setNewWalletChain] = useState('');
  const [newWalletAddress, setNewWalletAddress] = useState('');

  const totalBalance = wallets.reduce((sum, wallet) => sum + wallet.balance, 0);
  const totalUSD = totalBalance * 43000;

  const handleAddWallet = () => {
    if (newWalletChain && newWalletAddress) {
      const newWallet = {
        id: wallets.length + 1,
        chain: newWalletChain,
        address: newWalletAddress,
        balance: Math.random() * 0.5
      };
      setWallets([...wallets, newWallet]);
      setShowAddModal(false);
      setNewWalletChain('');
      setNewWalletAddress('');
    }
  };

  const handleTransfer = (wallet) => {
    alert(`Transfer from ${wallet.chain} - Coming Soon!`);
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1 className="dashboard-title">Welcome back, {user.name}</h1>
          <p className="dashboard-subtitle">Manage your cross-chain Bitcoin portfolio</p>
        </div>

        <div className="balance-overview">
          <div className="balance-card">
            <div className="balance-icon">
              <TrendingUp size={20} />
            </div>
            <div className="balance-info">
              <div className="balance-main">
                <span className="balance-btc">{totalBalance.toFixed(4)}</span>
                <span className="balance-currency">BTC</span>
              </div>
              <div className="balance-fiat">${totalUSD.toLocaleString()} USD</div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="section-header">
          <h2 className="section-heading">Your Wallets</h2>
          <p className="section-text">{wallets.length} wallet{wallets.length !== 1 ? 's' : ''} connected</p>
        </div>

        <div className="wallets-grid">
          {wallets.map(wallet => (
            <WalletCard 
              key={wallet.id} 
              wallet={wallet} 
              onTransfer={handleTransfer}
            />
          ))}
          {wallets.length < 3 && (
            <AddWalletCard onAdd={() => setShowAddModal(true)} />
          )}
        </div>
      </div>

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Add New Wallet</h3>
              <button onClick={() => setShowAddModal(false)} className="modal-close">
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="input-group">
                <label className="input-label">Select Network</label>
                <select 
                  value={newWalletChain} 
                  onChange={(e) => setNewWalletChain(e.target.value)}
                  className="input-field"
                >
                  <option value="">Choose a network...</option>
                  {!wallets.find(w => w.chain === 'ethereum') && (
                    <option value="ethereum">Ethereum</option>
                  )}
                  {!wallets.find(w => w.chain === 'solana') && (
                    <option value="solana">Solana</option>
                  )}
                </select>
              </div>

              <div className="input-group">
                <label className="input-label">Wallet Address</label>
                <input
                  type="text"
                  value={newWalletAddress}
                  onChange={(e) => setNewWalletAddress(e.target.value)}
                  placeholder="Enter wallet address"
                  className="input-field"
                />
              </div>
            </div>

            <div className="modal-footer">
              <button onClick={() => setShowAddModal(false)} className="btn-modal-secondary">
                Cancel
              </button>
              <button onClick={handleAddWallet} className="btn-modal-primary">
                Add Wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;