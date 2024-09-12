import Image from 'next/image';
import FlipBook from './components/flipbook';
import Flip from './components/FlipBook2';
import { MyFlipBook } from './components/MyFlipBook';
import NewFlipBook from './components/NewFlipBook';

export default function Home() {
  return (
    <div>
      {/* <FlipBook /> */}
      {/* <Flip /> */}
      {/* <MyFlipBook/> */}
      <NewFlipBook/>
    </div>
  );
}
