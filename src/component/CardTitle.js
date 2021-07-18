import {Card } from "react-bootstrap";

const CardTitle = ({item}) => {
    return(
        <td className="width40pt valign">
            <Card className='p-1 '>
                <Card.Title className="text-center cyanColor">{item.title} </Card.Title>
                <Card.Subtitle className="p-1">{item.company} - {item.location}</Card.Subtitle>
                <Card.Text className="text-center">{item.user}</Card.Text>
                <Card.Footer className="text-muted text-center"> Alert {item.alert} - days ago</Card.Footer>
            </Card>
        </td>
    )
}

export default CardTitle;