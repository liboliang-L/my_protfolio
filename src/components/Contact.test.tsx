import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import '@testing-library/jest-dom';

const renderWithI18n = (component: React.ReactNode) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
};

describe('Contact Component', () => {
  beforeEach(() => {
    i18n.changeLanguage('zh');
  });

  it('renders section title', () => {
    renderWithI18n(<Contact />);
    expect(screen.getByText(/联系我/i)).toBeInTheDocument();
  });

  it('renders social links', () => {
    renderWithI18n(<Contact />);
    
    // Check if main contact options exist
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });

  it('contains correct link attributes', () => {
    renderWithI18n(<Contact />);
    
    // Check for mailto link
    const emailLink = screen.getByText('Email').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@example.com');
    
    // Check for github link
    const githubLink = screen.getByText('GitHub').closest('a');
    expect(githubLink).toHaveAttribute('href', 'https://github.com');
    
    // Verify target="_blank" for external links
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  it('renders footer text', () => {
    renderWithI18n(<Contact />);
    expect(screen.getByText(/我的作品集。基于 React & Tailwind CSS 构建/i)).toBeInTheDocument();
  });
});
