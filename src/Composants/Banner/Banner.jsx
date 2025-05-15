import './Banner.scss'

function Banner(props) {
    const content = props.content
    const className = props.className
    const src = props.src
  
    return(
      <div className={className}><p>{content}</p>
      <img src={src} alt={src} />
      </div>    
    )
}
export default Banner