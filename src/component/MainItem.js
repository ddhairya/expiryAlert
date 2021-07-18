import { useState } from "react";
import {Jumbotron, Table  } from "react-bootstrap";
import CardView from "./CardView";
import CardTitle from "./CardTitle";

const MainItemView = () => {

    const [items, setItem] = useState([
        {
            "id":1,
            "title":"Sharp Renewal",
            "company":"La Brioche",
            "location":"Head Office",
            "user":"Dhairya",
            "status": "Notify",
            "expiryDate":'27-07-2021',
            "alert":30, 
            "frequency": 4
        },
        {
            "id":2,
            "title":"alahliagroup domain Renewal",
            "status": "Done",
            "expiryDate":'27-07-2022',
            "frequency": 4
        }
    ])
    return (
        <Jumbotron>
            <Table striped >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Items</th>
                        <th>Renewals</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => 
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <CardTitle item={item} />
                                <CardView item={item} />
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Jumbotron>
    )
}

export default MainItemView