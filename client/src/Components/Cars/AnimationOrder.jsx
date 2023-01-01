import vehicle1 from "./Img/vehicle1.jpg"
import vehicle2 from "./Img/vehicle2.jpg"
import vehicle3 from "./Img/vehicle3.jpg"
import vehicle4 from "./Img/vehicle4.jpg"

import estate1 from "./Img/estate1.jpg"
import estate2 from "./Img/estate2.jpg"
import estate3 from "./Img/estate3.jpg"
import estate4 from "./Img/estate4.jpg"

export const graduallyAppear = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  export const graduallyDisAppear = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

export const CarAnimation = [
    {id:1, img:vehicle1},
    {id:2, img:vehicle3},
    {id:3, img:vehicle2},
    {id:4, img:vehicle4},
]

export const EstateAnimation = [
    {id:1, img:estate1},
    {id:2, img:estate2},
    {id:3, img:estate3},
    {id:4, img:estate4},
]