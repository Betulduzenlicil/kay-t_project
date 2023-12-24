import { useState } from 'react'
import Instructor from '../components/Instructor'
import {categories, lesson} from "../helper/data"
import LessonList from '../components/LessonList'
import CanvasCard from '../components/CanvasCard'
import Header from '../components/Header'



const Home = () => {

const [lessons,setLessons]=useState(lesson)
const [sil, setSil] = useState(false)
const [canvasDers, setCanvasDers] = useState([])

console.log(lessons);
  return (
    <div className='text-center mt-2'>
      {/* <h1 className='display-5 text-primary fw-bold'>Course Registration Procedures</h1> */}
      <Header/>
      <Instructor ders={lessons} setDers={setLessons} canvasDers={canvasDers} setCanvasDers={setCanvasDers} categories={categories}/>
      <LessonList ders={lessons} setDers={setLessons} canvasDers={canvasDers} setCanvasDers={setCanvasDers}/>
      <CanvasCard ders={lessons} setDers={setLessons} canvasDers={canvasDers} setCanvasDers={setCanvasDers}/>

      

    </div>
  )
}

export default Home
