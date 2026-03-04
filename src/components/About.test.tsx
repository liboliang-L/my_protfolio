import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';
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

describe('About Component', () => {
  beforeEach(() => {
    i18n.changeLanguage('zh');
  });

  it('renders section title', () => {
    renderWithI18n(<About />);
    expect(screen.getByText(/关于我/i)).toBeInTheDocument();
  });

  it('renders introduction text', () => {
    renderWithI18n(<About />);
    expect(screen.getByText(/充满激情的全栈开发者/i)).toBeInTheDocument();
    expect(screen.getByText(/你好！我是一名致力于构建美观、功能强大且可扩展的 Web 应用程序的软件工程师/i)).toBeInTheDocument();
  });

  it('renders skill categories', () => {
    renderWithI18n(<About />);
    expect(screen.getByText('前端开发')).toBeInTheDocument();
    expect(screen.getByText('后端与数据库')).toBeInTheDocument();
    expect(screen.getByText('工具与运维')).toBeInTheDocument();
  });

  it('renders specific skills', () => {
    renderWithI18n(<About />);
    const skillsToCheck = ['React', 'Node.js', 'Docker', 'TypeScript'];
    skillsToCheck.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('renders stats', () => {
    renderWithI18n(<About />);
    expect(screen.getByText('5+')).toBeInTheDocument(); // Years Exp
    expect(screen.getByText('50+')).toBeInTheDocument(); // Projects
  });
});
