
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import logo from "./ui/images/Screenshot 2025-07-03 214101.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Packages', path: '/buy-certificate' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '#footer' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-green-950 backdrop-blur-sm border-b border-green-800/50 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-green-900 font-bold text-lg">H</span>
            </div>
            <span className="font-playfair text-xl font-bold text-white">
              Hedamo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.name === 'Contact' ? (
                <button
                  key={item.name}
                  onClick={handleContactClick}
                  className="text-sm font-medium transition-colors hover:text-green-200 text-green-100"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-green-200 ${isActive(item.path) ? 'text-white' : 'text-green-100'
                    }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Auth Buttons and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-white hover:bg-green-800">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-white text-green-900 hover:bg-green-50">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            < ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-green-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-green-800">
              {navItems.map((item) => (
                item.name === 'Contact' ? (
                  <button
                    key={item.name}
                    onClick={(e) => {
                      handleContactClick(e);
                      setIsOpen(false);
                    }}
                    className="block px-3 py-2 rounded-md text-base font-medium text-green-100 hover:text-white hover:bg-green-800 w-full text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.path)
                      ? 'text-white bg-green-800'
                      : 'text-green-100 hover:text-white hover:bg-green-800'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4 pb-3 border-t border-green-800">
                <div className="flex items-center px-3 space-x-3">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" size="sm" className="w-full text-white hover:bg-green-800">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsOpen(false)}>
                    <Button size="sm" className="w-full bg-white text-green-900 hover:bg-green-50">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
