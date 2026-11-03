'use client';

import { useEffect } from 'react';

/** Hides root brochure navbar/footer while the premiere route is mounted. */
export default function PremiereChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add('premiere-mode');
    return () => {
      document.body.classList.remove('premiere-mode');
    };
  }, []);

  return <>{children}</>;
}
