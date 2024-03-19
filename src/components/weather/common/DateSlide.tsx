import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function DateSlide(props: {
  fcstTimeArray: {
    fcstDate: string;
    fcstTime: string;
    displayTime: string;
  }[]
  displayIndex: number[];
  setDisplayIndex: React.Dispatch<React.SetStateAction<number[]>>
}) {

  const handleClickNext = () => {
    if (props.displayIndex[8] !== props.fcstTimeArray.length) {
      const next = props.displayIndex.map(item => {
        return item + 1
      })
      props.setDisplayIndex(next)
    }
  }

  const handleClickPrev = () => {
    if (props.displayIndex[0] !== 0) {
      const prev = props.displayIndex.map(item => {
        return item - 1
      })
      props.setDisplayIndex(prev)
    }
  }

  return (
    <React.Fragment>
      <div
        onClick={handleClickPrev}
        className='absolute top-1/2 left-0 -translate-y-1/2 text-[20px] cursor-pointer'
      >
        <i><IoIosArrowBack /></i>
      </div>

      <div
        onClick={handleClickNext}
        className='absolute top-1/2 right-0 -translate-y-1/2 text-[20px] cursor-pointer'
      >
        <i><IoIosArrowForward /></i>
      </div>
    </React.Fragment>
  )
}