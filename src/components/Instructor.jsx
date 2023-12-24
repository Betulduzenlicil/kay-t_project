import {useState} from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { instructor,categories } from '../helper/data'
import ModalCard from './ModalCard'


const Instructor = ({ ders, setDers, canvasDers, setCanvasDers }) => {
  const [show, setShow] = useState(false);
  const [ınstName, setInstName] = useState("");
  const [lessonName, setLessonName] = useState("");


  const [detay, setDetay] = useState(true);

  const handleImgClick = () => {
    setShow(true);
  };

  const handleBtnClick = (id) => {
    setDetay((prevDetaylar) => ({
      ...prevDetaylar,
      [id]: !prevDetaylar[id],
    }));
  };
 



  return (
    <Container className='ınstructor'>
      <div className='search'>
      <div className='p-2 input'><input type="text"  placeholder='search'/></div>
      {categories.map((item)=>(
         <button
         key={item}
         className='categoryBtn '
      
       
       >
         {item.toUpperCase()}
       </button>
        
      ))}
      </div>
    
      <Row className='justify-content-center'>
        {instructor.map(({ id, dep, img, name, aim, AKTS,category  }) => (
          <Col xs={12} sm={6} md={4} lg={3} key={id}> 
            {!detay[id] ? (
              <div className='card cardOn'>
                <img src={img} alt="" className="img-thumbnail ınstImg mx-auto" width={"200px"} />
                <h5>{name}</h5>
                <h6>{dep}</h6>
              </div>
            ) : (
              <div className='card cardArka'>
                <p><strong>AIM:</strong>{aim}</p>
               <h5>AKTS: {AKTS}</h5>
               <h4 className='text-primary bg-info '>{category} Lesson</h4>
               {/* <h4>{kind}</h4> */}
              </div>
            )}
            <div className='btnDiv'>
            <button onClick={ (e)=>handleBtnClick(id)}>Details</button>
            <button onClick={(e) => { handleImgClick(); setInstName(name); setLessonName(dep) }}>Add Lesson</button>
            </div>
          
          </Col>
        ))}
      </Row>
      <ModalCard
        show={show}
        handleClose={() => setShow(false)}
        ders={ders}
        setDers={setDers}
        ınstName={ınstName}
        lessonName={lessonName}
        canvasDers={canvasDers}
        setCanvasDers={setCanvasDers}
        

      />
    </Container>
  );
};
export default Instructor