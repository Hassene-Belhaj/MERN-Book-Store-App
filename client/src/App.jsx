import React from 'react'
import { GlobalStyleApp } from './GlobalStyle'
import Home from './Components/Home'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router , Routes,Route, useNavigate } from 'react-router-dom'
import EditBook from './Pages/EditBook'
import AddBook from './Pages/AddBook'


const App = () => {

  const API_URL = 'http://127.0.0.1:5174/api/v1/books/'
 

  const [data , setData] = useState([])
  const [title , setTitle] = useState('')
  const [author , setAuthor] = useState('')

  const [publishYear , setPublishYear] = useState('')
  
  
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
      await axios.post(API_URL + '/post' , {
      method : 'POST' ,
      title : title,
      author : author ,
      publishYear : publishYear ,
    })
  } catch (error) {
    console.log(error);
  }
}



 const deleteBook = async (id) => {
  try {
    await axios.delete(API_URL + '/delete/' + id , {
    method : 'DELETE' ,
  })
  } catch (error) {
    console.log(error);
  }
 }

 const updateBook = async(id) => {
  try {
    const resp =  await axios.patch(API_URL + '/update/' + id , {
      method : 'PATCH',
      title : title,
      author:author ,
      publishYear : publishYear,
    })
    
  } catch (error) {
    console.log(error);
  }
 }

  return (
    <Router>
      <GlobalStyleApp />
      <Routes>
        <Route path='/' element={< Home data={data} deleteBook={deleteBook}/>} />
        <Route path='/addbook' element={<AddBook  addBook={addBook} title={title} author={author} publishYear={publishYear}  setTitle={setTitle} setAuthor={setAuthor} setPublishYear={setPublishYear} />} />
        <Route path='/editbook/:id' element={<EditBook data={data} updateBook={updateBook} addBook={addBook} title={title} author={author} publishYear={publishYear}  setTitle={setTitle} setAuthor={setAuthor} setPublishYear={setPublishYear} />} />
      </Routes> 
    </Router>
  )
}

export default App