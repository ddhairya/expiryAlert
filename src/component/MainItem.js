import { useEffect, useState } from "react";
import {Jumbotron, Table  } from "react-bootstrap";
import CardView from "./CardView";
import CardTitle from "./CardTitle";

const MainItemView = () => {

    const [items, setItem] = useState(null)
    const [sort, setSort] = useState(null)
    const [filter, setFilter] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()
        fetch(`http://172.17.7.5:8081/items?sortBy=${sort}&filterBy=${filter}`, 
            {
                signal: abortCont.signal
            }    
        )
        .then(res => res.json())
        .then(data => setItem(data.items))
        .catch(err => console.log(err))

        return () => abortCont.abort()
    },[sort, filter])
    return (
        <Jumbotron>
            <Table striped >
                <thead>
                    <tr>
                        <th colSpan='3' className="txtAlignEnd">
                            <span className="formLab" >SortBy: </span>
                            <select className="formIOsm" onChange={(e) => setSort(e.target.value)}> 
                                <option className="placeholder" value="">Sort Option</option>
                                <option value="title" >Title</option>
                                <option value="expiryDate"> Expiry Date</option>
                                <option value="status">Status</option>
                            </select>
                            <span className="formLab" >FilterBy: </span>
                            <select className="formIOsm" onChange={(e) => setFilter(e.target.value)}> 
                                <option className="placeholder" value="">Filter Option</option>
                                <option value="AATA"> AATA </option>
                                <option value="AGTC"> AGTC </option>
                                <option value="Coop"> Coop </option>
                                <option value="LaBrioche"> LaBrioche </option>
                                <option value="Oilfiled"> Oilfiled </option>
                                <option value="Sketchley"> Sketchley </option>
                                <option value="Vapiano"> Vapiano </option>
                            </select>
                        </th>
                    </tr>
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
                                <td></td>
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