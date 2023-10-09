import React from 'react'
import { GlobalStyleApp } from './GlobalStyle'
import Home from './Components/Home'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import EditBook from './Pages/EditBook'
import AddBook from './Pages/AddBook'
import DeleteBook from './Pages/DeleteBook'
import Modal from './Components/Modal'
import InformationModal from './Components/InformationModal'
import ImageModal from './Components/ImageModal'


const App = () => {

  const API_URL = 'http://127.0.0.1:5174/api/v1/books/'
 

  const [data , setData] = useState([])
  const [title , setTitle] = useState('')
  const [author , setAuthor] = useState('')
  const [desc , setDesc] = useState('')
  const [publishYear , setPublishYear] = useState('')
  const [file ,setFile] = useState([])
  const [paramID , setParamID] = useState(null)

  const  [showModal,setShowModal ] = useState(false)
  const  [showModalInformation,setShowModalInformation ] = useState(false)
  const  [showModalImage,setShowModalImage] = useState(false)
  const  [msg,setMsg ] = useState('')


  const fetchBooks = async () => {
      try {
        const resp =  await axios.get(API_URL + 'all' , {
          method : "GET"
          })
          setData(resp.data.data)
      } catch (error) {
          console.log(error);
      }
  }
  
  useEffect(()=>{
      fetchBooks()
  },[data])


const addBook = async () => {
  try {
     const resp =  await axios.post(API_URL + '/post' , {
      method : 'POST' ,
      title : title,
      author : author ,
      desc : desc,
      publishYear : publishYear ,
      image : file,
    })
   
    if(resp.data.success === true) {
      setTimeout(() => {
        setShowModal(false) 
        setMsg('')
      }, 3000)
        setMsg('book added Successfully')
        setShowModal(true)  
      }  
  } catch (error) {
    console.log(error);
  }
}



 const deleteBook = async (id) => {
  try {
    const resp =  await axios.delete(API_URL + '/delete/' + id , {
    method : 'DELETE' ,
  })
    if(resp.data.success === true) {
    setTimeout(() => {
      setShowModal(false) 
      setMsg('')
    }, 3000)
      setMsg('book deleted Successfully')
      setShowModal(true)
    }
   
  } catch (error) {
    console.log(error);
  }
 }
 
 const updateBook = async(id) => {
  try {
    const resp = await axios.patch(API_URL + '/update/' + id , {
      method : 'PATCH',
      title : title,
      author:author ,
      desc : desc,
      publishYear : publishYear,
      image : file,
    })
     if(resp.data.success === true) {
      setTimeout(() => {
        setShowModal(false) 
        setMsg('')
      },3000)
        setMsg('book updated Successfully')
        setShowModal(true)
      }
  } catch (error) {
    console.log(error);
  }
 }

  return (
    <Router>
      <GlobalStyleApp />
      <Modal showModal={showModal} msg={msg} />
      <InformationModal showModalInformation={showModalInformation} setShowModalInformation={setShowModalInformation} data={data} paramID={paramID}/>
      <ImageModal showModalImage={showModalImage} setShowModalImage={setShowModalImage} data={data} paramID={paramID}/>
      <Routes>
        <Route path='/' element={< Home showModalImage={showModalImage} setShowModalImage={setShowModalImage} setParamID={setParamID} data={data} showModalInformation={showModalInformation} setShowModalInformation={setShowModalInformation} deleteBook={deleteBook}/>} />
        <Route path='/addbook' element={<AddBook file={file} setFile={setFile} setMsg={setMsg} setShowModal={setShowModal} addBook={addBook} title={title} author={author} desc={desc} setDesc={setDesc} publishYear={publishYear}  setTitle={setTitle} setAuthor={setAuthor} setPublishYear={setPublishYear} />} />
        <Route path='/editbook/:id' element={<EditBook file={file} setFile={setFile} setMsg={setMsg}  setShowModal={setShowModal} data={data} updateBook={updateBook} addBook={addBook} title={title} author={author} desc={desc} setDesc={setDesc} publishYear={publishYear}  setTitle={setTitle} setAuthor={setAuthor} setPublishYear={setPublishYear} />} />
        <Route path='/deletebook/:id' element={<DeleteBook setMsg={setMsg} setShowModal={setShowModal} data={data}  deleteBook={deleteBook} addBook={addBook} title={title} author={author} publishYear={publishYear}  setTitle={setTitle} setAuthor={setAuthor} setPublishYear={setPublishYear} />} />
      </Routes> 
    </Router>
  )
}

export default App