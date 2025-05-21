import './Banner.scss'

function Banner(props) {
    const className = props.className
    const src = props.src
  
    return(
      <div className={className}>
      <p className='desk'>Chez vous, partout et ailleurs</p>
      <p className='phone'>Chez vous,<br></br> partout et ailleurs</p>
      <img src={src} alt={src} />
      </div>    
    )
}
export default Banner