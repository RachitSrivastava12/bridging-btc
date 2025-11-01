import { Bitcoin, Wallet, ArrowRightLeft, Zap, Shield, Lock, Layers, ArrowRight } from 'lucide-react';

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

export default Home;