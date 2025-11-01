import React, { useState, createContext, useContext, useEffect } from 'react';
import { Bitcoin, Wallet, ArrowRightLeft, Plus, Moon, Sun, Zap, Shield, TrendingUp, X, ArrowRight, Lock, Layers } from 'lucide-react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

// SVG Icons for chains
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

const Navbar = ({ isLoggedIn, onLogout }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-section">
          <div className="logo-icon">
            <Bitcoin size={24} strokeWidth={2.5} />
          </div>
          <span className="logo-text">BridgeLess</span>
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          {isLoggedIn && (
            <button onClick={onLogout} className="btn-nav">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

const Home = ({ onGetStarted }) => {
  const features = [
    {
      icon: <Lock size={24} />,
      title: "Secure by Design",
      description: "Non-custodial solution with end-to-end encryption. Your keys, your crypto."
    },
    {
      icon: <Layers size={24} />,
      title: "Multi-Chain Native",
      description: "Seamlessly interact with Bitcoin, Ethereum, and Solana networks."
    },
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description: "Execute cross-chain transfers in seconds, not hours."
    }
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-badge">
          <div className="badge-dot"></div>
          <span>Next Generation Cross-Chain Protocol</span>
        </div>
        
        <h1 className="hero-title">
          Bitcoin
          <span className="hero-title-gradient"> Without Boundaries</span>
        </h1>
        
        <p className="hero-description">
          The first truly decentralized protocol for moving Bitcoin across blockchains. No bridges. No wrapped tokens. Just pure, native Bitcoin everywhere.
        </p>

        <div className="hero-cta">
          <button onClick={onGetStarted} className="btn-hero">
            Get Started
            <ArrowRight size={18} />
          </button>
          <button className="btn-ghost">
            Learn More
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value">$2.4B+</div>
            <div className="stat-label">Total Value</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">150K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">3</div>
            <div className="stat-label">Supported Chains</div>
          </div>
        </div>
      </div>

      <div className="preview-section">
        <div className="preview-header">
          <h2 className="section-title">Your Unified Portfolio</h2>
          <p className="section-description">Manage Bitcoin across all major chains from a single dashboard</p>
        </div>
        
        <div className="preview-container">
          <div className="preview-card bitcoin-preview">
            <div className="preview-card-glow bitcoin-glow"></div>
            <div className="preview-card-content">
              <div className="preview-icon">
                <Bitcoin size={32} />
              </div>
              <div className="preview-info">
                <div className="preview-chain">Bitcoin Network</div>
                <div className="preview-balance">1.2458 BTC</div>
                <div className="preview-label">Primary Wallet</div>
              </div>
            </div>
          </div>

          <div className="preview-connector">
            <div className="connector-line"></div>
            <div className="connector-icon">
              <ArrowRightLeft size={16} />
            </div>
          </div>

          <div className="preview-card ethereum-preview">
            <div className="preview-card-glow ethereum-glow"></div>
            <div className="preview-card-content">
              <div className="preview-icon">
                <EthereumIcon />
              </div>
              <div className="preview-info">
                <div className="preview-chain">Ethereum Network</div>
                <div className="preview-balance">0.5234 BTC</div>
                <div className="preview-label">Connected</div>
              </div>
            </div>
          </div>

          <div className="preview-connector">
            <div className="connector-line"></div>
            <div className="connector-icon">
              <ArrowRightLeft size={16} />
            </div>
          </div>

          <div className="preview-card solana-preview">
            <div className="preview-card-glow solana-glow"></div>
            <div className="preview-card-content">
              <div className="preview-icon">
                <SolanaIcon />
              </div>
              <div className="preview-info">
                <div className="preview-chain">Solana Network</div>
                <div className="preview-balance">0.7224 BTC</div>
                <div className="preview-label">Connected</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="features-header">
          <h2 className="section-title">Why BridgeLess?</h2>
          <p className="section-description">Built for the future of decentralized finance</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
        return <Wallet size={32} />;
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

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

  const handleAuth = (userData) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar 
          isLoggedIn={!!user} 
          onLogout={handleLogout}
        />
        
        <main className="main-content">
          {currentPage === 'home' && <Home onGetStarted={() => setCurrentPage('auth')} />}
          {currentPage === 'auth' && <Auth onAuth={handleAuth} />}
          {currentPage === 'dashboard' && user && <Dashboard user={user} />}
        </main>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg-primary: #0B0C10;
          --bg-secondary: #13141A;
          --bg-tertiary: #1A1B23;
          --bg-elevated: #1F2029;
          
          --text-primary: #FFFFFF;
          --text-secondary: #9CA3B8;
          --text-tertiary: #6B7280;
          
          --accent-bitcoin: #F7931A;
          --accent-bitcoin-light: #FFB84D;
          --accent-ethereum: #627EEA;
          --accent-ethereum-light: #8FA2FF;
          --accent-solana: #14F195;
          --accent-solana-light: #48FFB4;
          
          --border-subtle: #252631;
          --border-medium: #2D2E3A;
          
          --gradient-orange: linear-gradient(135deg, #F7931A 0%, #FFB84D 100%);
          --gradient-blue: linear-gradient(135deg, #627EEA 0%, #8FA2FF 100%);
          --gradient-green: linear-gradient(135deg, #14F195 0%, #48FFB4 100%);
          
          --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
          --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
          --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
          --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.6);
        }

        [data-theme="light"] {
          --bg-primary: #FAFAFA;
          --bg-secondary: #FFFFFF;
          --bg-tertiary: #F5F5F5;
          --bg-elevated: #FFFFFF;
          
          --text-primary: #111827;
          --text-secondary: #6B7280;
          --text-tertiary: #9CA3AF;
          
          --border-subtle: #000000;
          --border-medium: #000000;
          
          --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
          --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.1);
          --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.12);
          --shadow-xl: 0 8px 32px rgba(0, 0, 0, 0.15);
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Navbar */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(11, 12, 16, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          padding: 1rem 0;
        }

        [data-theme="light"] .navbar {
          background: rgba(255, 255, 255, 0.8);
        }

        .navbar-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          width: 38px;
          height: 38px;
          background: var(--gradient-orange);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(247, 147, 26, 0.3);
        }

        .logo-text {
          font-size: 1.375rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          background: var(--gradient-orange);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .theme-toggle {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-toggle:hover {
          background: var(--bg-elevated);
          border-color: var(--border-medium);
          color: var(--text-primary);
          transform: scale(1.05);
        }

        .btn-nav {
          padding: 0.5rem 1.25rem;
          border-radius: 10px;
          border: 1px solid var(--border-medium);
          background: var(--bg-tertiary);
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-nav:hover {
          background: var(--bg-elevated);
          border-color: var(--accent-bitcoin);
        }

        /* Main Content */
        .main-content {
          flex: 1;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Home Page */
        .home-page {
          padding: 4rem 0;
        }

        .hero-section {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 8rem;
          padding: 4rem 0;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.5rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 100px;
          font-size: 0.813rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-bitcoin);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.035em;
          margin-bottom: 1.5rem;
        }

        .hero-title-gradient {
          background: var(--gradient-orange);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 640px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 4rem;
        }

        .btn-hero {
          padding: 0.875rem 2rem;
          border-radius: 12px;
          border: none;
          background: var(--gradient-orange);
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(247, 147, 26, 0.3);
        }

        .btn-hero:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(247, 147, 26, 0.4);
        }

        .btn-ghost {
          padding: 0.875rem 2rem;
          border-radius: 12px;
          border: 1px solid var(--border-medium);
          background: transparent;
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-ghost:hover {
          background: var(--bg-secondary);
          border-color: var(--border-medium);
        }

        .hero-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          padding: 2rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border-subtle);
        }

        /* Features Section */
        .features-section {
          margin-bottom: 8rem;
        }

        .features-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .section-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .feature-card {
          padding: 2.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }

        .feature-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-medium);
          box-shadow: var(--shadow-lg);
        }

        .feature-icon-wrapper {
          width: 56px;
          height: 56px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-bitcoin);
          margin-bottom: 1.5rem;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .feature-description {
          font-size: 0.938rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        /* Preview Section */
        .preview-section {
          margin-bottom: 4rem;
        }

        .preview-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .preview-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .preview-card {
          position: relative;
          width: 280px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }

        .preview-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .preview-card-glow {
          position: absolute;
          inset: -1px;
          border-radius: 20px;
          padding: 1px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .preview-card:hover .preview-card-glow {
          opacity: 1;
        }

        .bitcoin-glow {
          background: linear-gradient(135deg, var(--accent-bitcoin), var(--accent-bitcoin-light));
        }

        .ethereum-glow {
          background: linear-gradient(135deg, var(--accent-ethereum), var(--accent-ethereum-light));
        }

        .solana-glow {
          background: linear-gradient(135deg, var(--accent-solana), var(--accent-solana-light));
        }

        .preview-card-content {
          position: relative;
          z-index: 1;
        }

        .preview-icon {
          width: 56px;
          height: 56px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .bitcoin-preview .preview-icon {
          color: var(--accent-bitcoin);
        }

        .ethereum-preview .preview-icon {
          color: var(--accent-ethereum);
        }

        .solana-preview .preview-icon {
          color: var(--accent-solana);
        }

        .preview-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .preview-chain {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .preview-balance {
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .preview-label {
          font-size: 0.813rem;
          color: var(--text-tertiary);
        }

        .preview-connector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-tertiary);
        }

        .connector-line {
          width: 40px;
          height: 1px;
          background: var(--border-subtle);
        }

        .connector-icon {
          width: 32px;
          height: 32px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Auth Page */
        .auth-page {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 200px);
          padding: 4rem 0;
        }

        .auth-container {
          width: 100%;
          max-width: 480px;
        }

        .auth-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: var(--shadow-xl);
        }

        [data-theme="light"] .auth-card {
          box-shadow: var(--shadow-lg);
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .auth-icon-wrapper {
          width: 72px;
          height: 72px;
          background: var(--gradient-orange);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 0 auto 1.5rem;
          box-shadow: 0 8px 24px rgba(247, 147, 26, 0.3);
        }

        .auth-title {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }

        .auth-subtitle {
          font-size: 0.938rem;
          color: var(--text-secondary);
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .input-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .input-field {
          padding: 0.875rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          color: var(--text-primary);
          font-size: 0.938rem;
          font-family: inherit;
          transition: all 0.2s ease;
        }

        .input-field:focus {
          outline: none;
          border-color: var(--accent-bitcoin);
          box-shadow: 0 0 0 3px rgba(247, 147, 26, 0.1);
        }

        .input-field::placeholder {
          color: var(--text-tertiary);
        }

        .btn-auth {
          padding: 0.875rem 1.5rem;
          background: var(--gradient-orange);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(247, 147, 26, 0.3);
        }

        .btn-auth:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(247, 147, 26, 0.4);
        }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1.5rem 0;
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }

        .auth-divider::before,
        .auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border-subtle);
        }

        .btn-switch {
          width: 100%;
          padding: 0.875rem;
          background: transparent;
          border: 1px solid var(--border-medium);
          border-radius: 12px;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-switch:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }

        /* Dashboard Page */
        .dashboard-page {
          padding: 3rem 0;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 3rem;
          gap: 2rem;
        }

        .dashboard-welcome {
          flex: 1;
        }

        .dashboard-title {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 0.5rem;
        }

        .dashboard-subtitle {
          font-size: 1.063rem;
          color: var(--text-secondary);
        }

        .balance-overview {
          flex-shrink: 0;
        }

        .balance-card {
          padding: 1.5rem 2rem;
          background: var(--gradient-orange);
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          color: white;
          box-shadow: 0 8px 24px rgba(247, 147, 26, 0.3);
        }

        .balance-icon {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .balance-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .balance-main {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .balance-btc {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .balance-currency {
          font-size: 1.125rem;
          font-weight: 600;
          opacity: 0.9;
        }

        .balance-fiat {
          font-size: 0.938rem;
          opacity: 0.8;
        }

        .dashboard-section {
          margin-bottom: 3rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .section-heading {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .section-text {
          font-size: 0.938rem;
          color: var(--text-secondary);
        }

        .wallets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        /* Wallet Card */
        .wallet-card {
          position: relative;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .wallet-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .wallet-glow {
          position: absolute;
          inset: -1px;
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .wallet-card:hover .wallet-glow {
          opacity: 0.6;
        }

        .wallet-bitcoin:hover {
          border-color: var(--accent-bitcoin);
        }

        .wallet-ethereum:hover {
          border-color: var(--accent-ethereum);
        }

        .wallet-solana:hover {
          border-color: var(--accent-solana);
        }

        .wallet-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .wallet-icon {
          width: 48px;
          height: 48px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .wallet-bitcoin .wallet-icon {
          color: var(--accent-bitcoin);
        }

        .wallet-ethereum .wallet-icon {
          color: var(--accent-ethereum);
        }

        .wallet-solana .wallet-icon {
          color: var(--accent-solana);
        }

        .wallet-name {
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .wallet-balance-section {
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .balance-label {
          font-size: 0.813rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .balance-value {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0.25rem;
        }

        .balance-usd {
          font-size: 0.938rem;
          color: var(--text-secondary);
        }

        .wallet-address-section {
          padding: 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .address-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.375rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .address-value {
          font-size: 0.938rem;
          font-family: 'Courier New', monospace;
          color: var(--text-primary);
          word-break: break-all;
        }

        .btn-wallet-action {
          width: 100%;
          padding: 0.875rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-medium);
          border-radius: 12px;
          color: var(--text-primary);
          font-size: 0.938rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
          position: relative;
          z-index: 1;
        }

        .wallet-bitcoin .btn-wallet-action:hover {
          background: var(--accent-bitcoin);
          border-color: var(--accent-bitcoin);
          color: white;
        }

        .wallet-ethereum .btn-wallet-action:hover {
          background: var(--accent-ethereum);
          border-color: var(--accent-ethereum);
          color: white;
        }

        .wallet-solana .btn-wallet-action:hover {
          background: var(--accent-solana);
          border-color: var(--accent-solana);
          color: white;
        }

        /* Add Wallet Card */
        .add-wallet-card {
          background: var(--bg-secondary);
          border: 2px dashed var(--border-medium);
          border-radius: 20px;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          min-height: 320px;
        }

        .add-wallet-card:hover {
          background: var(--bg-tertiary);
          border-color: var(--accent-bitcoin);
          transform: translateY(-4px);
        }

        .add-wallet-icon {
          width: 64px;
          height: 64px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .add-wallet-card:hover .add-wallet-icon {
          background: var(--gradient-orange);
          border-color: transparent;
          color: white;
        }

        .add-wallet-text {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .add-wallet-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .modal-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 24px;
          width: 100%;
          max-width: 500px;
          box-shadow: var(--shadow-xl);
        }

        [data-theme="light"] .modal-card {
          box-shadow: var(--shadow-lg);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 2rem 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .modal-close {
          width: 36px;
          height: 36px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background: var(--bg-elevated);
          color: var(--text-primary);
        }

        .modal-body {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .modal-footer {
          display: flex;
          gap: 1rem;
          padding: 1.5rem 2rem 2rem;
        }

        .btn-modal-secondary,
        .btn-modal-primary {
          flex: 1;
          padding: 0.875rem;
          border-radius: 12px;
          font-size: 0.938rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-modal-secondary {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-medium);
          color: var(--text-primary);
        }

        .btn-modal-secondary:hover {
          background: var(--bg-elevated);
        }

        .btn-modal-primary {
          background: var(--gradient-orange);
          border: none;
          color: white;
          box-shadow: 0 4px 12px rgba(247, 147, 26, 0.3);
        }

        .btn-modal-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(247, 147, 26, 0.4);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .preview-container {
            flex-direction: column;
          }

          .preview-connector {
            transform: rotate(90deg);
          }
        }

        @media (max-width: 768px) {
          .navbar-content {
            padding: 0 1.5rem;
          }

          .main-content {
            padding: 0 1.5rem;
          }

          .hero-title {
            font-size: 3rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .stat-divider {
            display: none;
          }

          .dashboard-header {
            flex-direction: column;
          }

          .balance-card {
            width: 100%;
          }

          .wallets-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .auth-card {
            padding: 2rem;
          }

          .dashboard-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </ThemeProvider>
  );
}