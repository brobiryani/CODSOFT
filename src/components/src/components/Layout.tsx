import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Explore', path: '/' },
    { name: 'Recommendations', path: '/recommendations' },
    { name: 'Favorites', path: '/favorites' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-movie-primary sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-movie-accent mb-4 md:mb-0">
              MovieFlix
            </Link>
            
            <nav className="flex space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-md transition-colors",
                    location.pathname === item.path
                      ? "text-white font-medium"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        {children}
      </main>
      
      <footer className="bg-movie-primary py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 MovieFlix - Your Personal Movie Recommendation System</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
