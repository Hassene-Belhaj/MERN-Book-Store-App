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
import Model from './Components/Model'
import InformationModel from './Components/InformationModel'


const App = () => {

  const API_URL = 'http://127.0.0.1:5174/api/v1/books/'
 

  const [data , setData] = useState([])
  const [title , setTitle] = useState('')
  const [author , setAuthor] = useState('')
  const [desc , setDesc] = useState('')
  const [publishYear , setPublishYear] = useState('')
  const [file ,setFile] = useState([])
  const [paramID , setParamID] = useState(null)

  const  [showModel,setShowModel ] = useState(false)
  const  [showModelInformation,setShowModelInformation ] = useState(false)
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
        setShowModel(false) 
        setMsg('')
      }, 3000)
        setMsg('book added Successfully')
        setShowModel(true)  
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
      setShowModel(false) 
      setMsg('')
    }, 3000)
      setMsg('book deleted Successfully')
      setShowModel(true)
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
        setShowModel(false) 
        setMsg('')
      },3000)
        setMsg('book updated Successfully')
        setShowModel(true)
      }
  } catch (error) {
    console.log(error);
  }
 }

  return (
    <Router>
      <GlobalStyleApp />
      <Model showModel={showModel} msg={msg} />
      <InformationModel showModelInformation={showModelInformation} setShowModelInformation={setShowModelInformation} data={data} paramID={paramID}/>
      <Routes>
        <Route path='/' element={< Home setParamID={setParamID} data={data} showModelInformation={showModelInformation} setShowModelInformation={setShowModelInformation} deleteBook={deleteBook}/>} />
        <Route path='/addbook' element={<AddBook file={file} setFile={setFile} setMsg={setMsg} setShowModel={setShowModel} addBook={addBook} title={title} author={author} desc={desc} setDesc={setDesc} publishYear={publishYear}  setTitle={setTitle} setAuthor={setAuthor} setPublishYear={setPublishYear} />} />
        <Route path='/editbook/:id' element={<EditBook file={file} setFile={setFile} setMsg={setMsg}  setShowModel={setShowModel} data={data} updateBook={updateBook} addBook={addBook} title={title} author={author} desc={desc} setDesc={setDesc} publishYear={publishYear}  setTitle={setTitle} setAuthor={setAuthor} setPublishYear={setPublishYear} />} />
        <Route path='/deletebook/:id' element={<DeleteBook setMsg={setMsg} setShowModel={setShowModel} data={data}  deleteBook={deleteBook} addBook={addBook} title={title} author={author} publishYear={publishYear}  setTitle={setTitle} setAuthor={setAuthor} setPublishYear={setPublishYear} />} />
      </Routes> 
    </Router>
  )
}

export default App