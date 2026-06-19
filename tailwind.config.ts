import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        surface: '#f9f9f8',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f3f4f3',
        'surface-container': '#eeeeed',
        'surface-container-high': '#e8e8e7',
        'surface-container-highest': '#e2e2e2',
        'on-surface': '#1a1c1c',
        'on-surface-variant': '#3f4944',
        outline: '#6f7973',
        'outline-variant': '#bec9c2',
        primary: '#004532',
        'primary-container': '#065f46',
        'on-primary': '#ffffff',
        'primary-fixed': '#a6f2d1',
        'primary-fixed-dim': '#8bd6b6',
        secondary: '#735c00',
        'secondary-container': '#fed65b',
        'on-secondary-container': '#745c00',
        tertiary: '#3f3b39',
        'tertiary-container': '#575250',
        background: '#f9f9f8'
      },
      boxShadow: {
        manuscript: '0 4px 20px rgba(6, 95, 70, 0.04)',
        'manuscript-raised': '0 12px 32px rgba(6, 95, 70, 0.08)'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      maxWidth: {
        container: '1280px'
      },
      spacing: {
        gutter: '24px',
        'section-gap': '80px'
      },
      borderRadius: {
        xl: '1.5rem'
      }
    }
  }
}
