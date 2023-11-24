import React from 'react';

export async function generateStaticParams() {
  return [
    { direction: '01-03-04' },
    { direction: '09-03-01' },
    { direction: '09-03-03' },
    { direction: '09-03-04' },
    { direction: '01-04-04' },
    { direction: '09-04-01' },
    { direction: '09-04-03' },
    { direction: '09-04-04' },
  ];
}

export const revalidate = 7200;
export const dynamicParams = false;

export default function DirectionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
