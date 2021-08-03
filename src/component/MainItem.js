import { useEffect, useState } from "react";
import {Jumbotron, Table  } from "react-bootstrap";
import CardView from "./CardView";
import CardTitle from "./CardTitle";

const MainItemView = () => {

    const [items, setItem] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()
        fetch('http://172.17.7.5:8081/items', 
            {
                signal: abortCont.signal
            }    
        )
        .then(res => res.json())
        .then(data => setItem(data.items))
        .catch(err => console.log(err))

        return () => abortCont.abort()
    },[])
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
                    {items &&
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