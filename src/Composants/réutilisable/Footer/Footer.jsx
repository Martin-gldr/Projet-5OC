import './Footer.scss'
import logo from '../../../assets/logo/LOGO-B.svg'
function Footer() {
    return(
        
       <div className='footer'>
        <img src={logo} />
        <p className='desk'>© 2020 Kasa. All rights reserved</p>
        <p className='phone'>© 2020 Kasa. All<br></br> rights reserved</p>

       </div>
        
    )
}
export default Footer