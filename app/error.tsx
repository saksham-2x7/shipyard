"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log unexpected errors for client monitoring
    console.error("ShipYard application error:", error);
  }, [error]);

  return (
    <main className="container" role="alert">
      <div className="state-container error-state">
        <span className="state-icon" aria-hidden="true">
          ⚠️
        </span>
        <h1 className="state-title">Something went wrong!</h1>
        <p className="state-desc">
          We encountered an issue while loading this page. Please try again or head back to the catalog.
        </p>
        <div className="state-actions">
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-primary"
          >
            ↻ Try Again
          </button>
          <Link href="/" className="btn btn-secondary">
            ← Back to catalog
          </Link>
        </div>
      </div>
    </main>
  );
}
