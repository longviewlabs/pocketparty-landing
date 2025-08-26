import { render, screen } from '@testing-library/react';
import HeroRevolution from '../HeroRevolution';

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock matchMedia for reduced motion
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: query === '(prefers-reduced-motion: reduce)',
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('HeroRevolution', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders HeroLayer immediately when disableAnimation is true', () => {
    render(<HeroRevolution disableAnimation={true} />);
    
    expect(screen.getByText('Join the Offline Revolution')).toBeInTheDocument();
    expect(screen.getByText(/The best moments aren't on a feed/)).toBeInTheDocument();
  });

  it('renders HeroLayer immediately when reduced motion is preferred', () => {
    // Mock reduced motion preference
    (window.matchMedia as jest.Mock).mockImplementation(query => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    render(<HeroRevolution />);
    
    expect(screen.getByText('Join the Offline Revolution')).toBeInTheDocument();
    expect(screen.getByText(/The best moments aren't on a feed/)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<HeroRevolution className="custom-class" />);
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders custom children when provided', () => {
    render(
      <HeroRevolution disableAnimation={true}>
        <div data-testid="custom-child">Custom Content</div>
      </HeroRevolution>
    );
    
    expect(screen.getByTestId('custom-child')).toBeInTheDocument();
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });

  it('includes StoreBadges component in hero layer', () => {
    render(<HeroRevolution disableAnimation={true} />);
    
    // StoreBadges should render app store links
    expect(screen.getByLabelText(/Download Pocket Party on the App Store/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Get Pocket Party on Google Play/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Play Pocket Party on the Web/)).toBeInTheDocument();
  });
});
