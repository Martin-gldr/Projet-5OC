import './CardBoard.scss'
import Card from '../Card/Card'
import datas from '../../Data.json'

function CardBoard() {

    return(
        <div className='card-board'>
            <div className='card-grid'>
            {datas.map((datas)=>(
                <Card key={datas.id} id={datas.id} title={datas.title} src={datas.cover} />))}
            </div>
        </div>
    )
}
export default CardBoard