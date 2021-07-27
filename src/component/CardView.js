import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
var moment = require('moment')

const CardView = ({item}) => {
    // console.log(item.status)
    // const [stageItem, setStageItem] = useState(stage)
    

    const Duration = (date1) => {
        const expDate = moment(date1, 'DD-MM-YYYY')
        const today = moment()
        const duration = expDate.diff(today, 'days')    
        return <span className="xlfont"> {duration} </span>
    }

    const saveItem = () => {
        // code goes for renewing
        console.log(item)
    }
    
    return(
        <td>
            <Card className="p-1" >           
                <Card.Title className="text-center pt-pb-1">Status - {item.status} </Card.Title>
                { item.expiryDate && <Card.Subtitle className="p-1"> Expiry Date - {item.expiryDate} </Card.Subtitle> }
                <Card.Footer className="text-muted text-center">Duration {  Duration( item.expiryDate) }  days left. </Card.Footer>
                <Card.Text><i>Note</i> - {item.note}</Card.Text>
                <div className="text-center mb-1">
                    <Link to={`/items/${item.id}`}>
                        <Button variant="primary" className="cardPostBtn cyanBColor" onClick={() => saveItem()}>Manage</Button>
                    </Link>
                </div>                   
            </Card>
        </td>
    )
}

export default CardView