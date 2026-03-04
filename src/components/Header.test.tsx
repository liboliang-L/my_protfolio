import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '../context/ThemeContext';
import '@testing-library/jest-dom';

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        {component}
      </ThemeProvider>
    </I18nextProvider>
  );
};

describe('Header Component', () => {
  beforeEach(() => {
    i18n.changeLanguage('zh'); // Ensure tests run with Chinese by default
  });

  it('renders logo and navigation items', () => {
    renderWithProviders(<Header />);
    
    expect(screen.getByText('PORTFOLIO')).toBeInTheDocument();
    expect(screen.getByText('首页')).toBeInTheDocument();
    expect(screen.getByText('产品')).toBeInTheDocument();
    expect(screen.getByText('关于我们')).toBeInTheDocument();
    expect(screen.getByText('联系方式')).toBeInTheDocument();
  });

  it('renders login and register buttons when not logged in', () => {
    renderWithProviders(<Header isLoggedIn={false} />);
    
    const loginButtons = screen.getAllByText('登录');
    const registerButtons = screen.getAllByText('注册');
    
    expect(loginButtons.length).toBeGreaterThan(0);
    expect(registerButtons.length).toBeGreaterThan(0);
    expect(screen.queryByText('用户')).not.toBeInTheDocument();
  });

  it('renders user avatar when logged in', () => {
    renderWithProviders(<Header isLoggedIn={true} />);
    
    const userElements = screen.getAllByText('用户');
    expect(userElements.length).toBeGreaterThan(0);
    
    expect(screen.queryByText('登录')).not.toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger button is clicked', () => {
    renderWithProviders(<Header />);
    
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);
    expect(menuButton).toBeInTheDocument();
  });

  it('applies custom theme color', () => {
    const themeColor = 'linear-gradient(to right, red, yellow)';
    renderWithProviders(<Header themeColor={themeColor} isLoggedIn={false} />);
    
    const registerButtons = screen.getAllByText('注册');
    registerButtons.forEach(button => {
        expect(button).toHaveStyle({ background: themeColor });
    });
  });

  it('calls onLogin/onRegister callbacks', () => {
    const onLogin = vi.fn();
    const onRegister = vi.fn();
    
    renderWithProviders(<Header isLoggedIn={false} onLogin={onLogin} onRegister={onRegister} />);
    
    const loginButtons = screen.getAllByText('登录');
    fireEvent.click(loginButtons[0]);
    expect(onLogin).toHaveBeenCalledTimes(1);
    
    const registerButtons = screen.getAllByText('注册');
    fireEvent.click(registerButtons[0]);
    expect(onRegister).toHaveBeenCalledTimes(1);
  });
});
