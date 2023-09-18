import React from 'react'
import { useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
height: 100vh;
text-transform: capitalize;
`

const Title = styled.h2`
text-align: center;
padding: .5rem 0;
`

const AdBook = styled.div`
max-width: 700px;
padding: 1rem;
border: 2px solid rgba(0,0,0,0.2);
border-radius: 10px;
margin: 1rem auto;
background-color: #fff;
`
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
gap: .5rem;
`


const Label = styled.label`
font-weight: 600;
`

const Input = styled.input`
padding: .5rem .5rem;
font-size: 1rem;
border-radius: 5px;
outline: none;
border: 2px solid rgba(0,0,0,0.2);
transition: all ease-in-out 0.4s;
&:focus{
    border: 2px solid rgba(0,0,0,0.8);
}
`

const Textarea = styled.textarea`
height: 10rem;
padding: .5rem .5rem;
font-size: 1rem;
border-radius: 5px;
outline: none;
border: 2px solid rgba(0,0,0,0.2);
transition: all ease-in-out 0.4s;
&:focus{
    border: 2px solid rgba(0,0,0,0.8);
}

`


const Button = styled.button`
margin: 1rem 0;
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


const AddBook = ({file,setFile,addBook,title,author,desc,setDesc,publishYear,setTitle,setAuthor,setPublishYear}) => {
        
const location = useLocation()


useEffect(()=>{
    setTitle('')
    setAuthor('')
    setDesc('')
    setPublishYear('')
    setFile('')
},[location.pathname])    


    const navigate = useNavigate()

    // const handleImage = (e) =>{
    //     const file = e.target.files[0];
    //     transformFile(file);
    //     console.log(file);
    // }
    
    // const transformFile = (file) =>{
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () =>{
    //         setFile(reader.result);
    //     }
    
    // }
      


const handleSubmit = () => {
    if(title.length > 2) {
        addBook();
        navigate('/');
    }
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
                <Input type='text' value={title} onChange={e=>setTitle(e.target.value)} placeholder='Title' />
                <Label>author</Label>
                <Input type='text' value={author} onChange={e=>setAuthor(e.target.value)} placeholder='Author'  />
                <Label>description</Label>
                <Textarea type='text' value={desc} onChange={e=>setDesc(e.target.value)} placeholder='description'  />
                <Label>publish year</Label>
                <Input type='number' value={publishYear} onChange={e=>setPublishYear(e.target.value)} placeholder='Published Year'  />
                <Label>image url</Label>
                <Input type='text' value={file} onChange={e=>setFile(e.target.value)}  placeholder='Image url' />
             

                 
                
               <Button onClick={handleSubmit}>Add Book</Button>
            </Form>
        </AdBook>
    </Container>
  )
}

export default AddBook