import { Sparkly } from '@/components/sparkly.tsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="max-w-5xl w-full items-center justify-center mx-auto font-bold font-mono text-xl flex">
        <Sparkly />
      </div>
    </main>
  );
}
