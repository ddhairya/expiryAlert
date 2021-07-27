import { useState, useEffect } from "react";
import { Card, Form, Jumbotron,  Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom"

const CardDetails = () => {

    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [location, setLocation] = useState("")
    const [user, setUser] = useState("")
    const [status, setStatus] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [alert, setAlert] = useState("")
    const [frequency, setFrequency] = useState("")
    const [note, setNote] = useState("")
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        const abortCont = new AbortController()
        fetch(`http://localhost:8081/items/${id}`, 
            {
                signal: abortCont.signal
            }    
        )
        .then(res => res.json())
        .then(data => {
            setTitle(data.title)
            setCompany(data.company)
            setLocation(data.location)
            setUser(data.user)
            setStatus(data.status)
            setExpiryDate(data.expiryDate)
            setAlert(data.alert)
            setFrequency(data.frequency)
            setNote(data.note)
        })
        .catch(err => console.log(err))

        return () => abortCont.abort()
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { id, title, company, location, user, status, expiryDate, alert, frequency, note}
        console.log(item)
        
        fetch(`http://localhost:8081/items/${id}`,{
            method : 'PUT',
            mode: 'cors',
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify(item)
        })
        .then( (res)=>{
            // console.log(res)
            history.push('/')
        }
        )
        
    }

    return(
        <Jumbotron>
            
            <Card>
                <Form onSubmit={handleSubmit} className="form">
                    <div>
                        <label className="formLab" >Title: </label>
                        <input className="formIO" type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label className="formLab" >Company: </label>
                        {/* <Dropdown onSelect= {(e) => setCompany(e.target.value)}>
                            <Dropdown.Menu>
                            <Dropdown.Item value="LaBrioche">La Brioche</Dropdown.Item>
                            <Dropdown.Item value="AGTC">AGTC</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                         */}
                        <select className="formIO" onChange={(e) => setCompany(e.target.value)}>
                            <option value={company}>{company}</option>
                            <option value="AGTC"> AGTC </option>
                        </select>
                    </div>
                    <div>
                        <label className="formLab" >Location: </label>
                        <input className="formIO" type="text" value={location}  name="location" onChange={(e) => setLocation(e.target.value)} />
                    </div>  
                    <div>
                        <label className="formLab" >User: </label>
                        <input className="formIO" type="text" value={user}  name="user" onChange={(e) => setUser(e.target.value)} />
                    </div>  
                    <div>
                        <label className="formLab" >Status: </label>
                        <input className="formIO" type="text" value={status}   name="status" onChange={(e) => setStatus(e.target.value)} />
                    </div>  
                    <div>
                        <label className="formLab" >Expiry Date: </label>
                        <input className="formIO" type="text" value={expiryDate}  name="expiryDate" onChange={(e) => setExpiryDate(e.target.value)} />
                    </div>  
                    <div>
                        <label className="formLab" >Alert: </label>
                        <input className="formIO" type="text" value={alert}   name="alert" onChange={(e) => setAlert(e.target.value)} />
                    </div>  
                    <div className="hide">
                        <label className="formLab" >Frequency: </label>
                        <input className="formIO" type="text" value={frequency}  name="frequency" onChange={(e) => setFrequency(e.target.value)} />
                    </div>  
                    
                    <div>
                        <label className="formLab" > Note: </label>
                        <textarea className="formIO" rows="6" value={ note}  name="note" onChange={(e) => setNote(e.target.value)} />
                        
                    </div>  
                    <div>
                        <Button type="submit" variant="primary" className="cardPostBtn cyanBColor"> Update </Button>               
                    </div>
                </Form>

            </Card>
        </Jumbotron>
    )
}

export default CardDetails