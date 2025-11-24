# Cyberpunk Portfolio Design Guidelines

## Design Approach
**Aesthetic Direction:** Cyberpunk/Synthwave with heavy inspiration from Cyberpunk 2077 UI, Blade Runner neon aesthetics, and modern terminal interfaces. This portfolio showcases red team security and DevOps expertise through a futuristic, hacker-inspired visual language.

**Core Principles:**
- Maximum visual impact through neon glows and stunning color contrasts
- Dark, immersive atmosphere with electric accents
- Terminal/hacker aesthetic with modern polish
- Every interactive element should feel reactive and electric

## Color Palette & Glow Effects

**Primary Neon Colors:**
- Electric Cyan (#00F0FF) - primary accent, glows
- Hot Magenta (#FF006E) - secondary accent, warnings
- Acid Green (#39FF14) - success states, highlights
- Deep Purple (#9D00FF) - tertiary accent
- Neon Pink (#FF10F0) - interactive elements

**Backgrounds:**
- Pure Black (#000000) - primary background
- Very Dark Blue (#0A0E27) - section backgrounds
- Dark Purple-Blue (#1A0B2E) - card backgrounds

**Glow Implementation:**
- All text headings: strong neon glow with blur radius
- Borders: animated neon glow that pulses subtly
- Buttons: intense glow on hover
- Icons: constant soft glow
- Cards: glowing edges in cyan/magenta

## Typography

**Font Families:**
- Primary: "Orbitron" (Google Fonts) - futuristic, geometric for headings
- Secondary: "Rajdhani" (Google Fonts) - clean, technical for body text
- Monospace: "Fira Code" (Google Fonts) - terminal/code sections

**Hierarchy:**
- H1: Orbitron Bold, very large (4xl-6xl), electric cyan glow
- H2: Orbitron SemiBold, large (3xl-4xl), magenta glow
- H3: Rajdhani Bold, medium (2xl-3xl), purple glow
- Body: Rajdhani Medium, readable size, white/cyan tint
- Code/Terminal: Fira Code, acid green text

## Layout System

**Spacing Units:** Use Tailwind units of 4, 8, 12, 16, 24 (p-4, m-8, gap-12, py-16, space-y-24)

**Grid Patterns:**
- Background: Animated neon grid lines (similar to Tron aesthetic)
- Sections: Full-width with subtle grid overlay
- Content containers: max-w-7xl with generous padding

**Section Structure:**
- Hero: Full viewport height with animated grid background
- Projects: Masonry/grid layout (2-3 columns desktop, 1 mobile)
- Skills: Horizontal bars or hexagonal grid
- About: Two-column split (image + terminal-style text)
- Contact: Centered form with holographic frame

## Component Library

**Navigation:**
- Sticky header with glowing underline for active states
- Neon border bottom with scanline animation
- Logo with pulsing glow effect
- Menu items with glitch effect on hover

**Hero Section:**
- Full-screen with animated grid background (cyan/magenta lines)
- Large glowing name/title with typewriter animation
- Tagline with glitch text effect
- CTA button with intense glow and holographic border
- Floating geometric shapes with parallax

**Project Cards:**
- Dark background with glowing neon borders
- Hover: Intense border glow, lift effect, scanline overlay
- Thumbnail with cyan/magenta color grading overlay
- Tech stack tags with individual neon glows
- View project button with electric glow

**Skills Visualization:**
- Animated progress bars with neon fills
- Glowing percentage numbers that count up on scroll
- Category icons with pulsing glow
- Alternative: Hexagonal skill grid with glow states

**Contact Form:**
- Input fields with glowing cyan borders
- Focus state: intense border glow + label animation
- Submit button: holographic effect with RGB shift
- Background: Terminal-style frame with corner brackets

**Footer:**
- Minimal with social links in neon icons
- Copyright text in dim cyan
- Scanline animation overlay

## Animations & Effects

**Mandatory Effects:**
- Scanline overlay: Subtle horizontal lines moving top to bottom across entire page
- Glitch effects: Random micro-glitches on headings (very subtle, not distracting)
- Glow pulses: Subtle breathing effect on primary elements
- RGB color shift: On hover for certain interactive elements
- Parallax: Background grid moves slower than content

**Scroll Animations:**
- Fade in with upward slide for sections
- Stagger animations for project cards
- Skill bars animate on scroll into view
- Text typing effect for hero tagline

**Interactions:**
- Button hovers: Intense glow increase + slight scale
- Card hovers: Border glow intensifies, lift shadow
- Link hovers: Glitch effect, color shift
- Cursor trail: Optional neon glow trail effect

## Images

**Hero Background:**
- Abstract cyberpunk grid visualization (animated neon lines forming geometric patterns)
- Alternative: Dark cityscape with neon overlays and heavy blur
- Matrix-style falling code effect as overlay (subtle)

**Project Thumbnails:**
- Screenshots with cyan/magenta color grading applied
- Each should have subtle holographic overlay on hover
- Add glitch effect borders to images

**About Section:**
- Terminal window aesthetic showing code or system stats
- Profile image with neon border frame, scanline effect
- Background: Circuit board pattern with glowing traces

**Accent Images:**
- Geometric shapes: Floating wireframe objects with neon edges
- Icons: All custom icons should have glow effects
- Background elements: Abstract data visualizations, network graphs

**Image Treatment:**
- All images get subtle cyan/magenta color overlay
- Sharp contrast with heavy blacks
- Slight chromatic aberration effect on edges
- Scanline overlay on all visual content

## Critical Implementation Notes

- Every text element should have appropriate glow based on hierarchy
- Maintain high contrast ratios despite dark theme (bright neons on pure black)
- Use CSS filters for glow effects (drop-shadow, blur combinations)
- Buttons on images need backdrop blur with semi-transparent background
- Mobile: Reduce glow intensity slightly, simplify animations
- Performance: Use CSS transforms for animations, limit blur effects on mobile