import React, { useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
height: 100vh;
text-transform: capitalize;
background-color: #f3f5f9;
`

const Title = styled.h2`
text-align: center;
padding: .5rem 0;
`

const AdBook = styled.div`
max-width: 600px;
padding: 2rem;
border: 2px solid rgba(0,0,0,0.2);
border-radius: 10px;
margin: 5rem auto;
background-color: #fff;
`
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
`


const Label = styled.label`
font-weight: 600;
`

const Input = styled.input`
padding: .5rem .5rem;
font-size: 1.2rem;
border-radius: 5px;
outline: none;
border: 2px solid rgba(0,0,0,0.2);
transition: all ease-in-out 0.4s;
&:focus{
    border: 2px solid rgba(0,0,0,0.8);
}
`


const Button = styled.button`
margin: 5rem 0;
width: 100%;
padding:.8rem 0 ;
background-color: #000;
color: #fff;
transition: all ease-in-out 0.2s;
border:1px solid #000;
border-radius: 5px;
cursor: pointer;
&:hover{
    opacity : 0.9 ;
}
`



const EditBook = ({setMsg,setShowModel,updateBook,data,title,author,publishYear,setTitle,setAuthor,setPublishYear}) => {

  const {id} =  useParams()

  const findBook = data.find((item)=>item._id === id)

  const navigate = useNavigate()
 
useEffect(()=>{
    setTitle(findBook?.title);
    setAuthor(findBook?.author);
    setPublishYear(findBook?.publishYear);
},[])





const handleSubmit = (id) => {
  updateBook(id);
  navigate('/');
}



  return (
    <Container>
          <Link to='/' style={{color:'#000'}}>
             <AiOutlineHome style={{marginLeft : '5rem' , marginTop:'2rem' , cursor:'pointer'}} size={25} />
          </Link>
         <Title>update book</Title>
        <AdBook>
            <Form onSubmit={e=>e.preventDefault()} >
                <Label>title</Label>
                <Input type='text' value={title} onChange={e=>setTitle(e.target.value)}  />
                <Label>author</Label>
                <Input type='text' value={author} onChange={e=>setAuthor(e.target.value)}   />
                <Label>publish year</Label>
                <Input type='number' value={publishYear} onChange={e=>setPublishYear(e.target.value)}   />
               <Button onClick={()=>handleSubmit(findBook?._id)}>update Book</Button>
            </Form>
        </AdBook>
    </Container>
  )
}

export default EditBook