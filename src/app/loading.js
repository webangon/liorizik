import Image from 'next/image';

export default function Loading() {
    return <p className="preloader"><Image src="/img/chip.png" alt="preloader" width={88} height={90}/></p>;
  }