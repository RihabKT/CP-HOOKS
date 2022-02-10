import React , {useState} from "react";
import {Modal,Button} from 'react-bootstrap';

function AddMovie(props){
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [posterUrl,setPosterUrl]=useState('');
  const [rating,setRating]=useState(0)
  

  
 

            const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
            const handleSubmit = () => {
              let newMovie = {
               title ,
                description,
              posterUrl,
                rating,
               };
               handleClose();
               return(props.addMovieClick(newMovie))
               
            }
           
            
            return (
              
                <>
                  <Button variant="btn btn-outline-dark " className="buttonAdd" onClick={handleShow}>
                    +
                  </Button>
            
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title className="modalTitle">LET'S ADD A MOVIE !</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalBody">ADD A NEW MOVIE! </Modal.Body>
                <input placeholder="ENTER NEW TITLE" className="formAdd" type="text" value= {title} onChange={(e)=>setTitle(e.target.value)}/>
                <input placeholder="ENTER NEW DESCRIPTION" className="formAdd"  type="text" value= {description} onChange={(e)=>setDescription(e.target.value)} />
                <input placeholder="SELECT A NEW POSTER" className="formAdd" type="text" value= {posterUrl} onChange={(e)=>setPosterUrl(e.target.value)} />
                <input placeholder="ENTER RATING STARS NUMBER" className="formAdd" type="number" min={0} max={5} value= {rating} onChange={(e)=>setRating(e.target.value)} />
                    <Modal.Footer>
                      <Button variant=" btn btn-primary " onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant=" btn btn-success " onClick={handleSubmit}>
                        Add 
                      </Button>
                     
                      
                    </Modal.Footer>
                  </Modal>
                </>
              );
            }
            
        
           
           
             
          
          
          
          
  export default AddMovie;

