
"use client"

import plantsBackground from '@/public/plants-background-img.jpg';
import Link from 'next/link';
import { useEffect } from 'react';

export interface Params {
  params : {
    frontendSlowdown: boolean;
    backend: string;
  }
}

export default function Page({ params }: Params) {
  useEffect(() => {
    try {
      // This should be the only http request for home page, for health check purposes
      fetch(params.backend + '/success', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      // Sentry.captureException(err);
      console.log(err);
    }
  }, [params.backend]);

  return (
    <div className="hero sentry-unmask">
      <div className="hero-bg-img"
        style={{
          backgroundImage: `url(${plantsBackground.src})`
        }}>
        <div className="hero-content">
          <h1>Empower your plants</h1>
          <p>Keep your houseplants happy.</p>
          <Link href={params.frontendSlowdown ? '/products-fes' : '/products'} className="btn">
            Browse products
          </Link>
        </div>
      </div>
    </div>
  );
}
