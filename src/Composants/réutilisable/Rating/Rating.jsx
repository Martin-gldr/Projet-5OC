
import './Rating.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'



function Rating(props) {
  
  const nbStars = props.nbStar

  const noStars = 5-nbStars

  let stars = []

  for(let i = 0; i< nbStars; i++){
    
    const key = 'starr'+ i
    const star = <FontAwesomeIcon key={key} icon={fasStar} className='red'/> 

    stars.push(star)
    
  }
  for(let i = 0; i< noStars; i++){
    
    const key = 'starg'+ i
    const star = <FontAwesomeIcon key={key} icon={fasStar} className='grey'/> 

    stars.push(star)
    
  }

  console.log(stars)

  
  
  
  return (

    <div className='rating'>
    {stars}
    </div>
     
    

  )
}

export default Rating