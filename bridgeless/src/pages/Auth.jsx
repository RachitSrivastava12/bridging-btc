import { useState } from 'react';
import { Bitcoin, Wallet } from 'lucide-react';

const Auth = ({ onAuth }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = () => {
    if (walletAddress && (isSignup ? name : true)) {
      onAuth({ name: name || 'User', walletAddress });
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-icon-wrapper">
              <Bitcoin size={40} />
            </div>
            <h2 className="auth-title">{isSignup ? 'Create Account' : 'Welcome Back'}</h2>
            <p className="auth-subtitle">Connect your Bitcoin wallet to continue</p>
          </div>

          <div className="auth-form">
            {isSignup && (
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="input-field"
                />
              </div>
            )}

            <div className="input-group">
              <label className="input-label">Bitcoin Wallet Address</label>
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="bc1q..."
                className="input-field"
              />
            </div>

            <button onClick={handleSubmit} className="btn-auth">
              <Wallet size={18} />
              {isSignup ? 'Create Account' : 'Sign In'}
            </button>
          </div>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <button onClick={() => setIsSignup(!isSignup)} className="btn-switch">
            {isSignup ? 'Already have an account? Sign in' : 'New to BridgeLess? Create account'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;