// Color scheme constants
export const COLORS = {
  PRIMARY_GOLD: '#FFD700',
  PRIMARY_BLACK: '#000000',
  TEXT_WHITE: '#FFFFFF',
  TEXT_GREY: '#808080',
  ACCENT_GOLD: '#FFA500',
  BACKGROUND_DARK: '#1a1a1a',
  SECONDARY_BLACK: '#0a0a0a'
} as const;

// Typography scale
export const TYPOGRAPHY = {
  HERO_TITLE_DESKTOP: '4rem',
  HERO_TITLE_MOBILE: '2.5rem',
  SECTION_HEADER_DESKTOP: '2.5rem',
  SECTION_HEADER_MOBILE: '1.8rem',
  BODY_TEXT: '1.1rem',
  CAPTION_TEXT: '0.9rem'
} as const;

// Spacing system
export const SPACING = {
  SECTION_PADDING_DESKTOP: '4rem',
  SECTION_PADDING_MOBILE: '2rem',
  COMPONENT_MARGIN: '2rem',
  ELEMENT_SPACING_SMALL: '1rem',
  ELEMENT_SPACING_MEDIUM: '1.5rem',
  ELEMENT_SPACING_LARGE: '2rem'
} as const;

// Animation durations
export const ANIMATIONS = {
  HOVER_TRANSITION: '0.3s',
  SCROLL_SYNC_THROTTLE: 16,
  FADE_IN_DURATION: '0.5s'
} as const;

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: '480px',
  TABLET: '768px',
  DESKTOP: '1024px',
  LARGE_DESKTOP: '1400px'
} as const;