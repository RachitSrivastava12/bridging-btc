import { Bitcoin, ArrowRightLeft } from 'lucide-react';

// SVG Icons
const EthereumIcon = () => (
  <svg viewBox="0 0 256 417" width="28" height="28">
    <path fill="currentColor" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"/>
    <path fill="currentColor" d="M127.962 0L0 212.32l127.962 75.639V154.158z" opacity="0.6"/>
    <path fill="currentColor" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"/>
    <path fill="currentColor" d="M127.962 416.905v-104.72L0 236.585z" opacity="0.6"/>
    <path fill="currentColor" d="M127.961 287.958l127.96-75.637-127.96-58.162z" opacity="0.2"/>
    <path fill="currentColor" d="M0 212.32l127.96 75.638v-133.8z" opacity="0.6"/>
  </svg>
);

const SolanaIcon = () => (
  <svg viewBox="0 0 397 311" width="28" height="28">
    <defs>
      <linearGradient id="solGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00FFA3"/>
        <stop offset="100%" stopColor="#DC1FFF"/>
      </linearGradient>
    </defs>
    <path fill="url(#solGradient)" d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"/>
    <path fill="url(#solGradient)" d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" opacity="0.6"/>
    <path fill="url(#solGradient)" d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" opacity="0.8"/>
  </svg>
);

const WalletCard = ({ wallet, onTransfer }) => {
  const getChainIcon = () => {
    switch(wallet.chain) {
      case 'bitcoin':
        return <Bitcoin size={32} />;
      case 'ethereum':
        return <EthereumIcon />;
      case 'solana':
        return <SolanaIcon />;
      default:
        return <Bitcoin size={32} />;
    }
  };

  const getChainName = () => {
    return wallet.chain.charAt(0).toUpperCase() + wallet.chain.slice(1);
  };

  return (
    <div className={`wallet-card wallet-${wallet.chain}`}>
      <div className={`wallet-glow ${wallet.chain}-glow`}></div>
      <div className="wallet-header">
        <div className="wallet-icon">
          {getChainIcon()}
        </div>
        <div className="wallet-name">{getChainName()}</div>
      </div>

      <div className="wallet-balance-section">
        <div className="balance-label">Balance</div>
        <div className="balance-value">{wallet.balance.toFixed(4)} BTC</div>
        <div className="balance-usd">≈ ${(wallet.balance * 43000).toLocaleString()}</div>
      </div>

      <div className="wallet-address-section">
        <div className="address-label">Wallet Address</div>
        <div className="address-value">
          {wallet.address.slice(0, 8)}...{wallet.address.slice(-6)}
        </div>
      </div>

      {wallet.chain !== 'bitcoin' && (
        <button onClick={() => onTransfer(wallet)} className="btn-wallet-action">
          <ArrowRightLeft size={16} />
          Transfer
        </button>
      )}
    </div>
  );
};

export default WalletCard;