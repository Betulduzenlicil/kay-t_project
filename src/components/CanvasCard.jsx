import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function CanvasCard({ders, setDers, canvasDers, setCanvasDers}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () =>{
    
     setShow(true);
    
  
     
     ;}


const handleFullDelete=()=>{
  setDers([])
  
}

  return (
    <>
      <Button variant="primary" className='mb-5 me-3 fw-bold' onClick={() => { handleShow(); handleFullDelete(); }}>
      Approve
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dear Student, Your Approved Courses</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='canvas'>
          {canvasDers.map(({instructor,id,dep,tür})=>(
         
                 <ul key={id}>
               <li> <strong>{dep}</strong></li>
          <li>{instructor}</li>
          <li>{tür}</li>
          
            </ul>
    
            
         
           

          ))}
         
        </Offcanvas.Body>
        
      </Offcanvas>
      
    </>
  );
}

export default CanvasCard;