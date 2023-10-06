"use client"

import { Carousel } from "flowbite-react"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const CarouselSection = ({children}: Props) => {

    return (
        <Carousel data-carousel="slide" className="mt-[20vh] max-w-4xl mx-auto w-full relative h-[500px] overflow-hidden rounded-lg md:h-[26rem]">
            {children}
        </Carousel>
    )

}

export default CarouselSection