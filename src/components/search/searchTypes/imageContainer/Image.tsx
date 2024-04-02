import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function SearchImageAll_Image(props: {
  imgSrc: string
  photoWidth: number;
  photoHeight: number;
  url: string;
}) {
  const [imageUrl, setImageUrl] = useState(true);

  const widthHeightRatio = props.photoHeight / props.photoWidth
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10); +1

  return (
    <div className="w-[270px] justify-self-center"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Link href={props.url}
        target="_black"
        className="grid place-content-center">
        <div className="overflow-hidden group">
          <Image
            src={imageUrl ? props.imgSrc : '/cantFindImage.png'}
            alt="image"
            width={270}
            height={galleryHeight}
            sizes="270px"
            quality={50}
            className='object-cover hover:scale-105 bg-black transition-all sm:w-56 md:w-full'
            onError={() => setImageUrl(false)}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApBUlcwAAAABJRU5ErkJggg=="
          />
        </div>
      </Link>
    </div>
  )

}