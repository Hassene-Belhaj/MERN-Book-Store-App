import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
height: 100vh;
text-transform: capitalize;
background-color: #f3f5f9;
/* display: flex;
justify-content: center; */
`

const Title = styled.h2`
text-align: center;
padding: 2rem 0;
`

const AdBook = styled.div`
width: 30%;
padding: 2rem;
border: 2px solid #000;
margin: 5rem auto;
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
border: 2px solid rgba(0,0,0,0.4);
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



const AddBook = ({addBook,title,author,publishYear,setTitle,setAuthor,setPublishYear}) => {

const navigate = useNavigate()

const handleSubmit = () => {
    addBook();
    navigate('/');
    setTitle('');
    setAuthor('');
    setPublishYear('');
 }

  return (
    <Container>
          <Link to='/' style={{color:'#000'}}>
             <AiOutlineHome style={{marginLeft : '5rem' , marginTop:'2rem' , cursor:'pointer'}} size={25} />
          </Link>
         <Title>create book</Title>
        <AdBook>
            <Form onSubmit={e=>e.preventDefault()} >
                <Label>title</Label>
                <Input value={title} onChange={e=>setTitle(e.target.value)}  />
                <Label>author</Label>
                <Input value={author} onChange={e=>setAuthor(e.target.value)}   />
                <Label>publish year</Label>
                <Input value={publishYear} onChange={e=>setPublishYear(e.target.value)}   />
               <Button onClick={handleSubmit}>Add Book</Button>
            </Form>
        </AdBook>
    </Container>
  )
}

export default AddBook