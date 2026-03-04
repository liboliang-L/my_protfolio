import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
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

describe('Hero Component', () => {
  beforeEach(() => {
    i18n.changeLanguage('zh');
  });

  it('renders greeting and role', () => {
    renderWithI18n(<Hero />);
    expect(screen.getByText('你好，我是')).toBeInTheDocument();
    expect(screen.getByText('创意')).toBeInTheDocument();
    expect(screen.getByText('开发者')).toBeInTheDocument();
  });

  it('renders description', () => {
    renderWithI18n(<Hero />);
    expect(screen.getByText(/热衷于使用现代技术构建美观的 Web 体验/i)).toBeInTheDocument();
  });

  it('renders call to action buttons', () => {
    renderWithI18n(<Hero />);
    expect(screen.getByText('查看作品')).toBeInTheDocument();
    expect(screen.getByText('联系我')).toBeInTheDocument();
  });
});
