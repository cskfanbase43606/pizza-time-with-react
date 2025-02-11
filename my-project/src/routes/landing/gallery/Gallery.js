import React from 'react'
//375px
import ImgFour375 from '../../../assets/images/landing/img-four-375.webp'
import ImgOne375 from '../../../assets/images/landing/img-one-375.webp'
import ImgThree375 from '../../../assets/images/landing/img-three-375.webp'
import ImgTwo375 from '../../../assets/images/landing/img-two-375.webp'
//700
import ImgFour700 from '../../../assets/images/landing/img-four-700.webp'
import ImgOne700 from '../../../assets/images/landing/img-one-700.webp'
import ImgThree700 from '../../../assets/images/landing/img-three-700.webp'
import ImgTwo700 from '../../../assets/images/landing/img-two-700.webp'
import './gallery.css'
const Gallery = () => {
  return (
    <article className="homepage__gallery flex-container flex-column">
      <img
        src={ImgOne375}
        srcSet={` ${ImgOne700} 700w, ${ImgOne375} 375w`}
        sizes="(min-width: 700px) 700px, 375px"
        alt=""
        aria-hidden="true"
        loading='lazy'
      />
      <img
        src={ImgTwo375}
        srcSet={` ${ImgTwo700} 700w, ${ImgTwo375} 375w`}
        sizes="(min-width: 700px) 700px, 375px"
        alt=""
        aria-hidden="true"
        loading='lazy'
      />
      <img
        src={ImgThree375}
        srcSet={` ${ImgThree700} 700w, ${ImgThree375} 375w`}
        sizes="(min-width: 700px) 700px, 375px"
        alt=""
        aria-hidden="true"
        loading='lazy'
      />
      <img
        src={ImgFour375}
        srcSet={` ${ImgFour700} 700w, ${ImgFour375} 375w`}
        sizes="(min-width: 700px) 700px, 375px"
        alt=""
        aria-hidden="true"
        loading='lazy'
      />
    </article>
  )
}

export default Gallery