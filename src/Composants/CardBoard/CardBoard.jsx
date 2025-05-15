import './CardBoard.scss'
import Card from '../Card/Card'
import datas from '../../Data.json'

function CardBoard() {

    return(
        <div className='card-board'>
            {datas.map((datas)=>(
                <Card key={datas.id} id={datas.id} title={datas.title} src={datas.cover} />))}
        </div>
    )
}
export default CardBoard