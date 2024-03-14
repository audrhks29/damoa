import Image from "next/image";

import { useState } from "react";

export default function SearchImageAll_Image(props: { imgSrc: string }) {
  const [imageUrl, setImageUrl] = useState(true);

  return (
    <Image
      src={imageUrl ? props.imgSrc : '/cantFindImage.png'}
      // src={props.imgSrc}
      alt="image"
      fill
      sizes="20vw"
      quality={50}
      priority={true}
      className='object-contain'
      onError={() => setImageUrl(false)}
    />
  )

}