import { Suspense } from 'react';
import HomeClient from '@/components/home-client';
import Loading from '@/components/loading/loading';

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeClient />
    </Suspense>
  );
}
