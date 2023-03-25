import React, { useState } from 'react'
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri'

const CategoryScroller = ({ id, children }) => {
    const scrollLength = 500

    const [isScrollLeftActive, setIsScrollLeftActive] = useState(false)
    const [isScrollRightActive, setIsScrollRightActive] = useState(true)
    const scrollLeft = () => {
        const scroller = document.querySelector(`#${id}`)
        if (scroller != null) {
            let leftHandler = 0;
            if (scroller.scrollLeft - scrollLength >= 0) {
                leftHandler = scroller.scrollLeft - scrollLength
                scroller.scrollLeft = scroller.scrollLeft - scrollLength
            }
            else {
                leftHandler = scroller.scrollLeft - scrollLength
                scroller.scrollLeft = 0
            }
            setIsScrollLeftActive(leftHandler > 0)
            setIsScrollRightActive(leftHandler + scrollLength < scroller.clientWidth)
        }
    }

    const scrollRight = () => {
        const scroller = document.querySelector(`#${id}`)
        if (scroller != null) {
            let leftHandler = 0;
            if (scroller.scrollLeft + scrollLength < scroller.clientWidth) {
                leftHandler = scroller.scrollLeft + scrollLength
                scroller.scrollLeft = scroller.scrollLeft + scrollLength
            }
            else {
                leftHandler = scroller.scrollLeft + scrollLength
                scroller.scrollLeft = scroller.clientWidth
            }
            setIsScrollLeftActive(leftHandler > 0)
            setIsScrollRightActive(leftHandler + scrollLength < scroller.clientWidth)
        }
    }

    return (
        <div className='w-[80vw] md:w-[90vw]'>
            <div className='flex justify-between items-center'>
                <div className="w-full flex justify-end gap-4 items-center">

                    {
                        isScrollLeftActive &&
                        <div onClick={() => scrollLeft()} className="flex items-center cursor-pointer" >
                            <RiArrowDropLeftLine size={25} className="text-black" />
                            <span className='text-black font-medium'>Previous</span>
                        </div>
                    }
                    {
                        isScrollRightActive &&
                        <div onClick={() => scrollRight()} className="flex cursor-pointer ">
                            <span className='text-black font-medium'>Next</span>
                            <RiArrowDropRightLine size={25} className="text-black" />
                        </div>
                    }

                </div>
            </div>


            <div id={id} className="flex overflow-x-auto  gap-4 mt-8">
                {
                    children
                }
            </div>
        </div>
    )
}

export default CategoryScroller