/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  screenReaderOptimized: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindFriendly: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSetting: <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => void;
  resetSettings: () => void;
}

const defaultSettings: AccessibilitySettings = {
  highContrast: false,
  reducedMotion: false,
  fontSize: 'medium',
  screenReaderOptimized: false,
  keyboardNavigation: true,
  focusIndicators: true,
  colorBlindFriendly: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    // Load settings from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('accessibility-settings');
      if (saved) {
        try {
          return { ...defaultSettings, ...JSON.parse(saved) };
        } catch {
          return defaultSettings;
        }
      }
    }
    return defaultSettings;
  });

  // Detect user preferences from system
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Detect reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setSettings(prev => ({ ...prev, reducedMotion: true }));
      }

      // Detect high contrast preference
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      if (prefersHighContrast) {
        setSettings(prev => ({ ...prev, highContrast: true }));
      }

      // Listen for changes
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');

      const handleReducedMotionChange = (e: MediaQueryListEvent) => {
        setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
      };

      const handleHighContrastChange = (e: MediaQueryListEvent) => {
        setSettings(prev => ({ ...prev, highContrast: e.matches }));
      };

      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
      highContrastQuery.addEventListener('change', handleHighContrastChange);

      return () => {
        reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
        highContrastQuery.removeEventListener('change', handleHighContrastChange);
      };
    }
  }, []);

  // Apply settings to document
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;

      // High contrast mode
      if (settings.highContrast) {
        root.classList.add('high-contrast');
      } else {
        root.classList.remove('high-contrast');
      }

      // Reduced motion
      if (settings.reducedMotion) {
        root.classList.add('reduced-motion');
      } else {
        root.classList.remove('reduced-motion');
      }

      // Font size
      root.classList.remove('font-small', 'font-medium', 'font-large', 'font-extra-large');
      root.classList.add(`font-${settings.fontSize}`);

      // Screen reader optimization
      if (settings.screenReaderOptimized) {
        root.classList.add('screen-reader-optimized');
      } else {
        root.classList.remove('screen-reader-optimized');
      }

      // Keyboard navigation
      if (settings.keyboardNavigation) {
        root.classList.add('keyboard-navigation');
      } else {
        root.classList.remove('keyboard-navigation');
      }

      // Focus indicators
      if (settings.focusIndicators) {
        root.classList.add('focus-indicators');
      } else {
        root.classList.remove('focus-indicators');
      }

      // Color blind friendly
      if (settings.colorBlindFriendly) {
        root.classList.add('color-blind-friendly');
      } else {
        root.classList.remove('color-blind-friendly');
      }
    }
  }, [settings]);

  // Save settings to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    }
  }, [settings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessibility-settings');
    }
  };

  return (
    <AccessibilityContext.Provider value={{ settings, updateSetting, resetSettings }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// Accessibility CSS styles to be injected
const accessibilityStyles = `
  /* High Contrast Mode */
  .high-contrast {
    --text-primary: black !important;
    --text-secondary: black !important;
    --bg-primary: white !important;
    --bg-secondary: #f5f5f5 !important;
    --border-color: black !important;
    --link-color: blue !important;
    --link-hover: darkblue !important;
  }

  .high-contrast * {
    background-color: var(--bg-primary) !important;
    color: var(--text-primary) !important;
    border-color: var(--border-color) !important;
  }

  .high-contrast a {
    color: var(--link-color) !important;
  }

  .high-contrast a:hover {
    color: var(--link-hover) !important;
  }

  /* Reduced Motion */
  .reduced-motion *,
  .reduced-motion *::before,
  .reduced-motion *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Font Sizes */
  .font-small {
    font-size: 14px;
  }

  .font-medium {
    font-size: 16px;
  }

  .font-large {
    font-size: 18px;
  }

  .font-extra-large {
    font-size: 20px;
  }

  /* Screen Reader Optimization */
  .screen-reader-optimized .sr-only {
    position: static !important;
    width: auto !important;
    height: auto !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: visible !important;
    clip: auto !important;
    white-space: normal !important;
  }

  /* Enhanced Focus Indicators */
  .focus-indicators *:focus {
    outline: 3px solid var(--chakra-colors-blue-500) !important;
    outline-offset: 2px !important;
    box-shadow: 0 0 0 2px white, 0 0 0 5px var(--chakra-colors-blue-500) !important;
  }

  /* Keyboard Navigation */
  .keyboard-navigation *:focus-visible {
    outline: 3px solid var(--chakra-colors-blue-500) !important;
    outline-offset: 2px !important;
  }

  /* Color Blind Friendly */
  .color-blind-friendly {
    --primary-color: var(--chakra-colors-blue-500);
    --secondary-color: var(--chakra-colors-orange-500);
    --success-color: var(--chakra-colors-green-500);
    --warning-color: var(--chakra-colors-yellow-500);
    --error-color: var(--chakra-colors-red-500);
  }

  /* Skip Links */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: black;
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 9999;
    border-radius: 4px;
  }

  .skip-link:focus {
    top: 6px;
  }

  /* ARIA Live Regions */
  .sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
`;

export { accessibilityStyles };

// Skip Links Component
export const SkipLinks: React.FC = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <a href="#navigation" className="skip-link">
        Skip to navigation
      </a>
      <a href="#footer" className="skip-link">
        Skip to footer
      </a>
    </>
  );
};

// Accessibility Control Panel Component
export const AccessibilityControls: React.FC = () => {
  const { settings, updateSetting, resetSettings } = useAccessibility();

  return (
    <div
      role="region"
      aria-label="Accessibility Controls"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: 'white',
        border: '2px solid black',
        borderRadius: '8px',
        padding: '16px',
        zIndex: 9999,
        maxWidth: '300px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      }}
    >
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 'bold' }}>
        Accessibility Settings
      </h3>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={(e) => updateSetting('highContrast', e.target.checked)}
            aria-describedby="high-contrast-desc"
          />
          High Contrast Mode
        </label>
        <div id="high-contrast-desc" className="sr-only">
          Increases contrast for better visibility
        </div>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={settings.reducedMotion}
            onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
            aria-describedby="reduced-motion-desc"
          />
          Reduce Motion
        </label>
        <div id="reduced-motion-desc" className="sr-only">
          Reduces animations and transitions
        </div>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>
          Font Size:
        </label>
        <select
          value={settings.fontSize}
          onChange={(e) => updateSetting('fontSize', e.target.value as AccessibilitySettings['fontSize'])}
          style={{ width: '100%', padding: '4px' }}
          aria-describedby="font-size-desc"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extra-large">Extra Large</option>
        </select>
        <div id="font-size-desc" className="sr-only">
          Adjusts the base font size for better readability
        </div>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={settings.screenReaderOptimized}
            onChange={(e) => updateSetting('screenReaderOptimized', e.target.checked)}
            aria-describedby="screen-reader-desc"
          />
          Screen Reader Mode
        </label>
        <div id="screen-reader-desc" className="sr-only">
          Optimizes the interface for screen readers
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={settings.colorBlindFriendly}
            onChange={(e) => updateSetting('colorBlindFriendly', e.target.checked)}
            aria-describedby="color-blind-desc"
          />
          Color Blind Friendly
        </label>
        <div id="color-blind-desc" className="sr-only">
          Uses colors that are easier to distinguish for color blind users
        </div>
      </div>

      <button
        onClick={resetSettings}
        style={{
          width: '100%',
          padding: '8px',
                  background: 'var(--chakra-colors-blue-500)',
        color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        aria-describedby="reset-desc"
      >
        Reset to Defaults
      </button>
      <div id="reset-desc" className="sr-only">
        Resets all accessibility settings to their default values
      </div>
    </div>
  );
}; 
