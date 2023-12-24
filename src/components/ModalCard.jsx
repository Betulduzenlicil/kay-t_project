import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalCard({show,handleClose, ders, setDers, ınstName, lessonName, canvasDers, setCanvasDers}) {

const [name, setName] = useState("")
const [date, setDate] = useState("")
console.log(name, date);

const [tür, setTür] = useState('');




const handleSubmit=(e)=>{
  e.preventDefault()
setDers([...ders, {
  id: new Date().getTime(),
  student:name,
  day:date,
  add: false,
  instructor:ınstName,
  dep: lessonName,
  tür: tür,
  approved : false

},
])
setName("")
  handleClose()
  setCanvasDers([...canvasDers, {
    id: new Date().getTime(),
    student:name,
    day:date,
    add: false,
    instructor:ınstName,
    dep: lessonName,
    tür:tür,
   
  
  
  },
  ])
console.log(canvasDers);
}

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ders Sec {lessonName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" value={name} placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" value={date} placeholder="Date" required onChange={(e)=>setDate(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="tür">
      <Form.Label>Eğitim Türü</Form.Label>
      <Form.Select value={tür} type="select" onChange={(e)=>setTür(e.target.value)}>
        <option >Yüz Yüze</option>
        <option >Online</option>
      </Form.Select>
      </Form.Group>
      <div className='text-center'>
      <Button variant="secondary" onClick={handleClose} className='me-5'>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={handleClose}>
            Save 
          </Button>
      </div>
    </Form>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default ModalCard;