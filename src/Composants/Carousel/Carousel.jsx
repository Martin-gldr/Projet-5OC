import './Carousel.scss'
import logo from '../../assets/logo/fleche.png'
import { useEffect, useRef, useState } from 'react'
import { Logger } from 'sass'
function Carousel(props) {

    const pictures = props.pictures
    const nbPictures = pictures.length
    const nbClick = nbPictures - 1
    let [resize, setResize] = useState('')
    let [currentImg, setCurrentImage] = useState(0)
    let [transform, setTransform] = useState({ transform: 'translateX(Ovw)' })
    const boxRef = useRef(null)
    let [width, setWidth] = useState(0)
    let [newWidth, setNewWidth] = useState(0)
    let counter = 'counter'
    let carouselPrev = 'carousel-prev'
    let carouselNext = 'carousel-next'




    if (nbPictures === 1) {

        carouselPrev = 'hide'
        carouselNext = 'hide'
        counter = 'hide'



    } else if (nbPictures > 1) {
        useEffect(() => {
            setWidth(boxRef.current.getBoundingClientRect().width)
        })
        useEffect(() => {
            setNewWidth(boxRef.current.getBoundingClientRect().width)
        })

        useEffect(() => {


            function handleResize() {
                if (!boxRef.current) return;
                setNewWidth(boxRef.current.getBoundingClientRect().width)
                setResize('resize')
            }
            function handleTransform() {

                if (newWidth != width) {
                    setTransform(transform = { transform: 'translateX(' + currentImg * -newWidth + 'px)' })
                }
            }
            handleTransform()



            setTimeout(() => {
                window.addEventListener("resize", handleResize)
                setResize('')
                setWidth(width = newWidth)

                return () => {

                    window.removeEventListener("resize", handleResize)

                }
            }, 300);
        })

    }






    function nextImg() {
        if (currentImg >= nbClick) {
            setCurrentImage(currentImg = 0)
            setTransform(transform = { transform: 'translateX(' + currentImg * -width + 'px)' })
        }
        else if (currentImg < nbClick) {
            setCurrentImage(currentImg = currentImg + 1)
            setTransform(transform = { transform: 'translateX(' + currentImg * -width + 'px)' })
        }



    }
    function prevImg() {

        if (currentImg <= 0) {
            setCurrentImage(currentImg = nbClick)
            setTransform(transform = { transform: 'translateX(' + currentImg * -width + 'px)' })

        }
        else if (currentImg <= nbClick) {
            setCurrentImage(currentImg = currentImg - 1)

            setTransform(transform = { transform: 'translateX(' + currentImg * -width + 'px)' })

        }

    }

    return (
        <div className='image-view-box' ref={boxRef}>
            <button className={carouselPrev} onClick={prevImg}> <img src={logo} alt="" /></button>
            <div className={`carousel ${resize}`} style={transform}>
                {pictures.map((picture) => (
                    <img className='carousel-image' src={picture} alt={picture} key={picture} />))}
            </div>
            <p className={counter}>{currentImg + 1}/{nbPictures}</p>
            <button className={carouselNext} onClick={nextImg}> <img src={logo} alt="" /></button>
        </div>

    )
}
export default Carousel