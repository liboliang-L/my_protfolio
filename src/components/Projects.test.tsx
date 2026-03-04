import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';
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

describe('Projects Component', () => {
  beforeEach(() => {
    i18n.changeLanguage('zh');
  });

  it('renders section title and subtitle', () => {
    renderWithI18n(<Projects />);
    expect(screen.getByText('精选项目')).toBeInTheDocument();
    expect(screen.getByText(/以下是我参与的一些项目/i)).toBeInTheDocument();
  });

  it('renders project buttons', () => {
    renderWithI18n(<Projects />);
    const sourceButtons = screen.getAllByText('源码');
    expect(sourceButtons.length).toBeGreaterThan(0);
    
    const demoButtons = screen.getAllByText('在线演示');
    expect(demoButtons.length).toBeGreaterThan(0);
  });
});
