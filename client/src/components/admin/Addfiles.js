import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router";
import DisfilesAdmin from './DisfilesAdmin';
import './styles/Addfiles.css';
import NavBar from '../common/navBar';
import Swal from 'sweetalert2';


export default function Addfiles() {

    const [description, setDescription] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [file, setFile] = useState([]);
    const [ev1doc, setEv1doc] = useState('');
    const [ev2doc, setEv2doc] = useState('');
    const [ev3doc, setEv3doc] = useState('');
    const [ev1pre_start, setEv1pre_start] = useState('');
    const [ev2pre_start, setEv2pre_start] = useState('');
    const [ev3pre_start, setEv3pre_start] = useState('');
    const [ev1pre_end, setEv1pre_end] = useState('');
    const [ev2pre_end, setEv2pre_end] = useState('');
    const [ev3pre_end, setEv3pre_end] = useState('');

    const onChangeFile = e => {
        setFile(e.target.files[0]);
    }

    const navi = new useNavigate();
    
      async function SweatAlert(text, item) {
    // await sleep(1000)
            Swal.fire({
                 icon: item,
                text: text,
    })
  }

    const changeonClick = (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("description", description);
        formData.append("specialization", specialization);
        formData.append("ev1doc", ev1doc);
        formData.append("ev2doc", ev2doc);
        formData.append("ev3doc", ev3doc);
        formData.append("ev1pre_start", ev1pre_start);
        formData.append("ev2pre_start", ev2pre_start);
        formData.append("ev3pre_start", ev3pre_start);
        formData.append("ev1pre_end", ev1pre_end);
        formData.append("ev2pre_end", ev2pre_end);
        formData.append("ev3pre_end", ev3pre_end);
        formData.append("file", file);

        setSpecialization("");
        setDescription("");
        setEv1doc("");
        setEv2doc("");
        setEv3doc("");
        setEv1pre_start("");
        setEv2pre_start("");
        setEv3pre_start("");
        setEv1pre_end("");
        setEv2pre_end("");
        setEv3pre_end("");

        console.log(description);
        for (var value of formData.values()) {
            console.log(value);
         }

        axios
            .post("/adminfile/add", formData)
            .then((res) => {
                setMessage(res.data);
                navi("/addfiles");
            } )
            .catch((err) => {
                console.log(err);
            });
        SweatAlert('Successfully insereted', 'success');
    };

  return (
        <div >
            <NavBar />
            <div className = 'bod mt-5' style={{ maxWidth: 800, margin: "auto" }}>
            <br></br>
                <h3>ADD New Research Details</h3>
                <form onSubmit={changeonClick} encType="multipart/form-data" >

                    {/* specialization */}
                    <div className="form-group">  
                        <label className='m'>Specialization :</label>
                        <select class="form-select"  value={specialization} onChange={(e) => setSpecialization(e.target.value)} >
                            <option>Software Engineering</option>
                            <option>Data Science</option>
                            <option>Cyber Security</option>
                            <option>Information Technology</option>
                        </select>
                    </div><br></br>

                    {/* Description */}
                    <div className="form-group">  
                    <label className='m'>Description :</label>
                        <input
                            type="text"  
                            placeholder="Description" 
                            value={description} required
                            onChange={(e)=>setDescription(e.target.value)}
                            className="form-control"/>
                    </div><br></br>

                    {/* Evalution 1 */}
                    <div className="form-group m"> 
                        <label className='m'>Evaluation 1 :</label><br/>
                        <div style={{ maxWidth: 700, margin: "auto" }}>
                            <label>Document Submition Date :</label>
                            <input 
                                type="date" 
                                value={ev1doc} 
                                onChange={(e)=> setEv1doc(e.target.value)}
                                className="form-control"/>
                             <div className='m'style={{ display: 'flex', margin: "auto" }}>
                                <label>Precentation starting Date :</label>
                                <label>Precentation Ending Date :</label>
                            </div>   
                             <div style={{ display: 'flex', margin: "auto" }}>   
                                <input 
                                    type="date" 
                                    value={ev1pre_start} 
                                    onChange={(e)=> setEv1pre_start(e.target.value)}
                                    className="form-control"/>
                                <input 
                                    type="date" 
                                    value={ev1pre_end} 
                                    onChange={(e)=> setEv1pre_end(e.target.value)}
                                    className="form-control"/>
                            </div>
                        </div>
                    </div><br></br>

                    {/* Evalution 2 */}
                    <div className="form-group m"> 
                        <label>Evaluation 2 :</label><br/>
                        <div style={{ maxWidth: 700, margin: "auto" }}>
                            <label>Document Submition Date :</label>
                            <input 
                                type="date" 
                                value={ev2doc} 
                                onChange={(e)=> setEv2doc(e.target.value)}
                                className="form-control"/>
                             <div style={{ display: 'flex', margin: "auto" }}>
                                <label>Precentation starting Date :</label>
                                <label>Precentation Ending Date :</label>
                            </div>   
                             <div style={{ display: 'flex', margin: "auto" }}>   
                                <input 
                                    type="date" 
                                    value={ev2pre_start} 
                                    onChange={(e)=> setEv2pre_start(e.target.value)}
                                    className="form-control"/>
                                <input 
                                    type="date" 
                                    value={ev2pre_end} 
                                    onChange={(e)=> setEv2pre_end(e.target.value)}
                                    className="form-control"/>
                            </div>
                        </div>
                    </div><br></br>

                    {/* Evalution 3 */}
                    <div className="form-group m"> 
                        <label>Evaluation 3 :</label><br/>
                        <div style={{ maxWidth: 700, margin: "auto" }}>
                            <label>Document Submition Date :</label>
                            <input 
                                type="date" 
                                value={ev3doc} 
                                onChange={(e)=> setEv3doc(e.target.value)}
                                className="form-control"/>
                             <div style={{ display: 'flex', margin: "auto" }}>
                                <label>Precentation starting Date :</label>
                                <label>Precentation Ending Date :</label>
                            </div>   
                             <div style={{ display: 'flex', margin: "auto" }}>   
                                <input 
                                    type="date" 
                                    value={ev3pre_start} 
                                    onChange={(e)=> setEv3pre_start(e.target.value)}
                                    className="form-control"/>
                                <input 
                                    type="date" 
                                    value={ev3pre_end} 
                                    onChange={(e)=> setEv3pre_end(e.target.value)}
                                    className="form-control"/>
                            </div>
                        </div>
                    </div><br></br>

                    <div className="form-group m">
                        <label>File :</label><br/>
                        <input 
                            type="file" multiple  
                            filename="file"
                            className="form-control" 
                            onChange={onChangeFile}/>
                    </div><br></br>

                <button className="btn btn-primary" 
                    type="submit" 
                    variant="primary"
                    size="lg"
                > 
                    ADD
                </button>      
            </form>
        </div>
        <br /><br />
    </div>
  )
}

