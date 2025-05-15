import './Carousel.scss'
import logo from '../../assets/logo/chevron.png'
import { useEffect, useRef, useState } from 'react'
function Carousel(props) {
 
    const pictures = props.pictures
    const nbPictures = pictures.length
    const nbClick = nbPictures-1
    let [currentImg, setCurrentImage] = useState(0)
    let [transform, setTransform]= useState({transform : 'translateX(Ovw)'})
    const boxRef = useRef (null)
    let [width, setWidth] = useState(0)
    useEffect(()=>{
        setWidth(boxRef.current.getBoundingClientRect().width)
    })
    console.log(width)



    
    function nextImg(){
        if(currentImg>=nbClick ){
            setCurrentImage (currentImg = 0)
            setTransform(transform= {transform : 'translateX('+currentImg*-width+'px)'})
        }
        else if(currentImg<nbClick){
            setCurrentImage(currentImg = currentImg+1)
            console.log(currentImg)
            setTransform(transform= {transform : 'translateX('+currentImg*-width+'px)'})
        }

        

    }
    function prevImg(){
        
        if(currentImg<=0 ){
            setCurrentImage (currentImg = nbClick)
            setTransform(transform= {transform : 'translateX('+currentImg*-width+'px)'})
           
        }
        else if(currentImg<=nbClick){
            setCurrentImage(currentImg = currentImg-1)
            console.log(currentImg)
            setTransform(transform= {transform : 'translateX('+currentImg*-width+'px)'}) 
            console.log(transform)
        }

    }
  
    return(
        <div className='image-view-box' ref={boxRef}>
            <button className='carousel-prev' onClick={prevImg}> <img src={logo} alt="" /></button>
            <div className='carousel' style={transform}>
                {pictures.map((picture) => (
                        <img className='carousel-image'src={picture} alt={picture} key={picture} /> ))}
            </div>  
            <button className='carousel-next' onClick={nextImg}> <img src={logo} alt="" /></button>
        </div>

    )
}
export default Carousel