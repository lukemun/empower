import Link from "next/link";
import '@/ui/nav.css';
import '@/ui/global.css';
import EPlogo from '@/public/empowerplant-logo.svg';
import { Item } from "@/lib/definitions";

interface Props {
  frontendSlowdown: boolean;
  cart: {
    items: Item[],
    quantities: {},
    total: number
  };
}

export default function Nav({ cart, frontendSlowdown }: Props) {
  return (
    <>
      <nav id="top-nav" className="show-mobile">
        <div className="nav-contents">
          <Link href="/" id="home-link">
            <img src={EPlogo.src} className="logo sentry-unmask" alt="logo" />
          </Link>

          <div id="top-right-links">
            <Link href="/about" className="sentry-unmask">
              About
            </Link>
            <Link href="/products" className="sentry-unmask">
              Products
            </Link>
            <Link href="/cart" className="sentry-unmask">
              Cart
              {cart.items.length > 0 ? (
                <span>
                  <span className="sentry-unmask"> ($</span>
                  <span className="sentry-mask">{cart.total}.00</span>
                  <span className="sentry-unmask">)</span>
                </span>
              ) : (
                ''
              )}
            </Link>
          </div>
        </div>
      </nav>

      <nav id="top-nav" className="show-desktop">
        <div className="nav-contents">
          <Link href="/" id="home-link" className="sentry-unmask">
            <img src={EPlogo.src} className="logo sentry-unmask" alt="logo" />
            Empower Plant
          </Link>

          <div id="top-right-links">
            <Link href="/about" className="sentry-unmask">
              About
            </Link>
            <Link
              href={frontendSlowdown ? '/products-fes' : '/products'}
              className="sentry-unmask"
            >
              Products
            </Link>
            <Link href="/cart">
              <span className="sentry-unmask">Cart</span>
              {cart.items.length > 0 ? (
                <span>
                  <span className="sentry-unmask"> ($</span>
                  <span className="sentry-mask">{cart.total}.00</span>
                  <span className="sentry-unmask">)</span>
                </span>
              ) : (
                ''
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
