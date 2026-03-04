import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import '@testing-library/jest-dom';

describe('LanguageSwitcher Component', () => {
  it('renders current language label', () => {
    // Set initial language to English
    i18n.changeLanguage('en');
    
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('switches language when option is clicked', async () => {
    i18n.changeLanguage('en');
    
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    // Open dropdown
    const button = screen.getByLabelText('Select Language');
    fireEvent.click(button);

    // Click Chinese option
    const zhOption = screen.getByText('中文');
    fireEvent.click(zhOption);

    // Expect language to change
    await waitFor(() => {
        expect(i18n.language).toBe('zh');
        expect(screen.getByText('中文')).toBeInTheDocument();
    });
  });

  it('persists language preference', () => {
    // Mock localStorage
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    
    i18n.changeLanguage('en');
    
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    const button = screen.getByLabelText('Select Language');
    fireEvent.click(button);
    fireEvent.click(screen.getByText('中文'));

    // i18next-browser-languagedetector should call localStorage.setItem
    // The key depends on configuration, default is 'i18nextLng'
    expect(setItemSpy).toHaveBeenCalledWith('i18nextLng', 'zh');
    
    setItemSpy.mockRestore();
  });
});
