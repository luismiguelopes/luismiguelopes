import { useEffect, useState, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const { navigation, personal } = portfolioData;

// Scroll movement (px) ignored before the navbar reacts, so a trackpad
// jitter doesn't make it flicker.
const SCROLL_THRESHOLD = 8;
// Below this offset the navbar always shows and stays transparent over the hero.
const TOP_ZONE = 80;

/**
 * Sections are lazy-loaded, so on a direct visit to e.g. /#projects the
 * browser's own jump happens before the page has its final height. Wait until
 * the target stops moving, then jump to it.
 */
function useScrollToInitialHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    let lastTop = Number.NaN;
    let stableTicks = 0;
    let ticks = 0;
    const timer = window.setInterval(() => {
      ticks += 1;
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        stableTicks = top === lastTop ? stableTicks + 1 : 0;
        lastTop = top;
        if (stableTicks >= 3) {
          window.clearInterval(timer);
          el.scrollIntoView?.({ behavior: 'auto' });
          return;
        }
      }
      if (ticks >= 30) window.clearInterval(timer);
    }, 100);

    return () => window.clearInterval(timer);
  }, []);
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useScrollToInitialHash();

  // Hide while scrolling down, show again as soon as the user scrolls up.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 16);
      if (y < TOP_ZONE) {
        setHidden(false);
        lastY = y;
      } else if (Math.abs(y - lastY) > SCROLL_THRESHOLD) {
        setHidden(y > lastY);
        lastY = y;
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Highlight the section crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { id } = entry.target;
          if (entry.isIntersecting) setActiveId(id);
          else setActiveId((current) => (current === id ? null : current));
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    for (const { id } of navigation) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const goToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({ top: 0 });
  };

  const linkClass = (id: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      activeId === id ? 'bg-blue-600/20 text-blue-300' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
    }`;

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-300 ${
        hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0'
      } ${solid ? 'border-b border-gray-800 bg-gray-950/85 backdrop-blur-md' : 'border-b border-transparent bg-transparent'}`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#" onClick={goToTop} className="text-lg font-semibold text-white hover:text-blue-300 transition-colors">
          {personal.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)} aria-current={activeId === id ? 'location' : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white md:hidden"
          aria-controls="mobile-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <ul id="mobile-nav" className="space-y-1 border-t border-gray-800 px-4 pb-4 pt-2 md:hidden">
          {navigation.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block ${linkClass(id)}`}
                aria-current={activeId === id ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
