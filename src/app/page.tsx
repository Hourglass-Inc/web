import { Suspense } from 'react';
import HomeClient from '@/components/home-client';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeClient />
    </Suspense>
  );
}
