import { useEffect, useState } from "react"
import { Card, Jumbotron, Form, Button, Alert } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import * as moment from 'moment';

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
    const [fetchLoc, setFetchLoc] = useState([""])
    const [dateValid, setDateValid] = useState(true)

    useEffect(() => {
        const abortCont = new AbortController()
        // fetch('http://172.17.7.5:8081/locs/', 
        fetch(`http://172.17.7.5:8081/locs/${company}`,{
                signal: abortCont.signal
            }    
        )
        .then(res => res.json())
        .then(data => {
            
            setFetchLoc(data)
            // console.log(typeof(company))
            //  console.log(data)
        })
        .catch(err => console.log(err))

        return () => abortCont.abort()
    }, [company])
    
    const handleSubmit = (e) => {
        let result = moment(expiryDate, 'DD-MM-YYYY',true).isValid();
        
        e.preventDefault();
        const item = { title, company, location, user, status, expiryDate, alert, frequency, note}
        if (result){
            fetch('http://172.17.7.5:8081/items/',{
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
        }else{
            setDateValid(result)
           
        }
        // console.log((JSON.stringify(item)))
        
        
    }
    return(
        <Jumbotron>
            <Card>
                <Form onSubmit={handleSubmit} className="form">
                    <div>
                        <label className="formLab" >Title: </label>
                        <input required className="formIO" placeholder="Enter the suitable title." type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label className="formLab" >Company: </label>
                        <select required className="formIO" placeholder="Select the company" onChange={(e) => setCompany(e.target.value)}>
                            <option className="placeholder" value={company}>Select the company</option>
                            <option value="AATA"> AATA </option>
                            <option value="AGTC"> AGTC </option>
                            <option value="Coop"> Coop </option>
                            <option value="LaBrioche"> LaBrioche </option>
                            <option value="Oilfiled"> Oilfiled </option>
                            <option value="Sketchley"> Sketchley </option>
                            <option value="Vapiano"> Vapiano </option>

                        </select>
                    </div>
                    
                    <div>
                        <label className="formLab" >Location: </label>
                        {/* <input required className="formIO" type="text" value={location}  name="location" onChange={(e) => setLocation(e.target.value)} /> */}
                        <select required className="formIO" onChange={(e) => setLocation(e.target.value)}>
                            
                            { fetchLoc &&  fetchLoc.map((loc,key) =>
                                <option key={key} value={loc}>{loc}</option>
                            )}
                       

                        </select>
                    </div>  
                    <div>
                        <label className="formLab" >End User: </label>
                        <input required className="formIO" placeholder="Person who is using." type="text" value={user}  name="user" onChange={(e) => setUser(e.target.value)} />
                    </div>  
                    <div>
                        <label className="formLab" >Status: </label>
                        {/* <input required className="formIO" type="text" value={status}   name="status" onChange={(e) => setStatus(e.target.value)} /> */}
                        <select required className="formIO" onChange={(e) => setStatus(e.target.value)}>
                            <option value="Inital"> Inital </option>

                        </select>
                    </div>  
                    <div>
                        <label className="formLab" >Expiry Date: </label>
                        <input required className="formIO" type="text" value={expiryDate} placeholder="dd-mm-yyyy"  name="expiryDate" onChange={(e) => setExpiryDate(e.target.value)} />
                        {!dateValid && 
                            <Alert variant="danger">
                                Please enter the date in dd-mm-yyyy
                            </Alert>
                        }
                    </div>  
                    <div>
                        <label className="formLab" >Alert: </label>
                        <input required className="formIO" placeholder="Start alert before n days." type="number" value={alert}   name="alert" onChange={(e) => setAlert(e.target.value)} />
                    </div>  
                    <div className="hide">
                        <label className="formLab" >Frequency: </label>
                        <input required className="formIO" placeholder="Repeat alert frequency n days." type="text" value={frequency}  name="frequency" onChange={(e) => setFrequency(e.target.value)} />
                    </div>  
                    
                    <div>
                        <label className="formLab" > Note: </label>
                        <textarea required className="formIO" placeholder="General Remarks." rows="6" value={note}  name="note" onChange={(e) => setNote(e.target.value)} />
                        
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