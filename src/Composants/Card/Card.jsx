import { NavLink } from 'react-router'
import './Card.scss'
function Card(props) {
    const title = props.title
    const src = props.src
    const id = props.id

    return(
        <NavLink className='card' to={`/FicheLogement/${id}`}>
            <img src={src} alt={title} />
            <h2>{title}</h2>
        </NavLink>
    )
}
export default Card