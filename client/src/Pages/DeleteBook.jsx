import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'



const Container = styled.div`
padding-top: 15rem;
height: 100vh;
text-transform: capitalize;
background-color: #f3f5f9;
`

const AdBook = styled.div`
max-width: 600px;
border: 2px solid rgba(0,0,0,0.2);
border-radius: 10px;
background-color: #fff;
margin: auto;
`




const Title = styled.p`
text-align: center;
padding: 2rem 0;
`



const Button = styled.button`
display: flex;
justify-content: center;
margin: 2rem auto;
width: 80%;
padding:.8rem 0 ;
background-color: ${({$bg})=>$bg};
color: ${({color})=>color};
font-weight: 800;
transition: all ease-in-out 0.2s;
border:1px solid #000;
border-radius: 5px;
cursor: pointer;
text-transform: capitalize;
&:hover{
    opacity : 0.9 ;
}
`
const Span = styled.span`
font-weight: 800;
text-transform: capitalize;
border-bottom: 2px solid #000;
border-spacing: 4px;
`

const DeleteBook = ({setMsg,setShowModel,data,deleteBook}) => {

    const {id} = useParams()
    const findBook = data.find((item) =>item._id === id)

    const navigate= useNavigate()



    const handleSubmit = (id) => {
            deleteBook(id);
            navigate('/');
     }

  return (
    <Container>
        <AdBook>
            <Title>
                 Are you sure you want to delete <Span> {findBook?.title} by {findBook?.author} </Span> book ?   
            </Title>
            <Button onClick={()=>handleSubmit(id)} $bg='#000' color='#fff'>yes</Button>
            <Button onClick={()=>navigate('/')} $bg='#fff' color='#000'>no</Button>
        </AdBook>
    </Container>
  )
}

export default DeleteBook