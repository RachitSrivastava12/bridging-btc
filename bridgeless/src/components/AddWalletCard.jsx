import { Plus } from 'lucide-react';

const AddWalletCard = ({ onAdd }) => {
  return (
    <div className="add-wallet-card" onClick={onAdd}>
      <div className="add-wallet-icon">
        <Plus size={32} />
      </div>
      <div className="add-wallet-text">Add Wallet</div>
      <div className="add-wallet-description">Connect Ethereum or Solana</div>
    </div>
  );
};

export default AddWalletCard;