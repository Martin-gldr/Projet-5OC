import { useState } from 'react'
import './Collapse.scss'
import logo from '../../assets/logo/chevron.png'
function Collapse(props) {
    const content = props.content
    const description =props.description
    let [display, setDiplay] = useState('hide')
    let [chevron, setChevron] = useState('up')

    function handleClick(){
       
        if(display === 'hide'){
            setDiplay('active-description')
            setChevron('down')

        }
        if(display === 'active-description'){
            setDiplay('hide-transition')
            setChevron('up')
            setTimeout(()=>{
                setDiplay('hide')}, 450) 
        }

    }
    return(
        <div>
        <button className='collapse' >
            <h2>{content}</h2>
            <img className={chevron} onClick={handleClick} src={logo}/>   
        </button> 

        <p className={display}>{description}</p>
            
        </div>
    )
}
export default Collapse