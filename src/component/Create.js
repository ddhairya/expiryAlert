import { useState } from "react"
import { Card, Jumbotron, Form, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [location, setLocation] = useState("")
    const [user, setUser] = useState("")
    const [status, setStatus] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [alert, setAlert] = useState("")
    const [frequency, setFrequency] = useState("")
    const [note, setNote] = useState("")
    const history = useHistory()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { title, company, location, user, status, expiryDate, alert, frequency, note}
        // console.log((JSON.stringify(item)))
        fetch('http://localhost:8081/items/',{
            method : 'POST',
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
                        <input required className="formIO" type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label className="formLab" >Company: </label>
                        <select required className="formIO" onChange={(e) => setCompany(e.target.value)}>
                            <option value={company}>{company}</option>
                            <option value="AGTC"> AGTC </option>
                        </select>
                    </div>
                    <div>
                        <label className="formLab" >Location: </label>
                        <input required className="formIO" type="text" value={location}  name="location" onChange={(e) => setLocation(e.target.value)} />
                    </div>  
                    <div>
                        <label className="formLab" >User: </label>
                        <input required className="formIO" type="text" value={user}  name="user" onChange={(e) => setUser(e.target.value)} />
                    </div>  
                    <div>
                        <label className="formLab" >Status: </label>
                        <input required className="formIO" type="text" value={status}   name="status" onChange={(e) => setStatus(e.target.value)} />
                    </div>  
                    <div>
                        <label className="formLab" >Expiry Date: </label>
                        <input required className="formIO" type="text" value={expiryDate}  name="expiryDate" onChange={(e) => setExpiryDate(e.target.value)} />
                    </div>  
                    <div>
                        <label className="formLab" >Alert: </label>
                        <input required className="formIO" type="text" value={alert}   name="alert" onChange={(e) => setAlert(e.target.value)} />
                    </div>  
                    <div className="hide">
                        <label className="formLab" >Frequency: </label>
                        <input required className="formIO" type="text" value={frequency}  name="frequency" onChange={(e) => setFrequency(e.target.value)} />
                    </div>  
                    
                    <div>
                        <label className="formLab" > Note: </label>
                        <textarea required className="formIO" rows="6" value={note}  name="note" onChange={(e) => setNote(e.target.value)} />
                        
                    </div>  
                    <div>
                        <Button type="submit" variant="primary" className="cardPostBtn cyanBColor"> POST </Button>               
                    </div>
                </Form>

            </Card>
        </Jumbotron>
    )
}

export default Create