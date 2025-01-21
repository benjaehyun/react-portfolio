import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkBackground, setIsDarkBackground] = useState(true);
    const location = useLocation();
  
    useEffect(() => {
      // pages with dark backgrounds to manually adjust for higher contrast
      const darkBackgroundRoutes = ['/projects'];
      setIsDarkBackground(darkBackgroundRoutes.includes(location.pathname));
    }, [location]);
  
    const value = {
      isMobileMenuOpen,
      setIsMobileMenuOpen,
      isDarkBackground
    };
  
    return (
      <NavigationContext.Provider value={value}>
        {children}
      </NavigationContext.Provider>
    );
  };

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};