import Image from 'next/image';
import FlipBook from './components/flipbook';
import Flip from './components/FlipBook2';
import { MyFlipBook } from './components/MyFlipBook';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <FlipBook /> */}
      {/* <Flip /> */}
      <MyFlipBook/>
    </div>
  );
}
