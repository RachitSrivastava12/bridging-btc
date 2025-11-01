import { Bitcoin, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

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

export default Navbar;