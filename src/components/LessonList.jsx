import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {MdDelete} from "react-icons/md"


const LessonList = ({ders, setDers}) => {

const handleDelete=(id)=>{
setDers(ders.filter((item)=>item.id!==id))

}


  return (
    <Container className='mt-5'>
   

      {ders.length<1 && <img src="./img/DERS.png" className='mt-5 mb-5 border border-secondary borderRadius rounded'/>}


      {ders.map(({id, student, add, instructor,tür,day,dep,kind })=>(

 <div key={id} >
 <Row className='align-item-center lessonCard'>
      <Col className='col' xs={12} sm={12} md={4}>
      <h6>{student}</h6>
      <h4>{dep}</h4>
      <h6>{kind}</h6>
      </Col>

      <Col><h5>{tür}</h5></Col>
      <Col><h6>{instructor}</h6></Col>

      <Col><h5>{day}</h5></Col>
      <Col className='text-end'>
      <MdDelete className='text-danger fs-3 icon' type='button' onClick={()=>handleDelete(id)}/></Col>
     </Row>

 </div>
      ))}




    </Container>
  )
}

export default LessonList
