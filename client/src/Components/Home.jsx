import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { AiOutlineEdit } from 'react-icons/ai'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { FiTrash } from 'react-icons/fi'

const Container = styled.div`
height: 100vh;
background-color: #f3f5f9;
`
const BookContainer = styled.div`
text-align: center;
padding-top: 5rem ;
`
const Book = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: auto;
margin: 2rem 2rem;
text-transform: capitalize;
background-color: #fff;
gap: 1rem;
`


const Title = styled.h4`
flex: 1;
border : 1px solid rgba(0,0,0,1);
border-radius:5px;
font-weight: 300;
`
    
const Author = styled.h4`
flex: 1;
border : 1px solid rgba(0,0,0,1);
border-radius:5px;
font-weight: 300;
`

const PublishYear = styled.h4`
flex: 1;
border : 1px solid rgba(0,0,0,1);
border-radius:5px;
font-weight: 300;
`
const Edit = styled.div`
flex:1;
border : 1px solid rgba(0,0,0,1);
border-radius:5px;
font-weight: 300;
`

const Icons = styled.div`
flex :1 ;
display: flex;
justify-content: center;
`
const IconI = styled(HiOutlineInformationCircle)`
margin-right: 1rem;
`

const IconEdit = styled(AiOutlineEdit)`
margin-right: 1rem;
`

const IconTrash = styled(FiTrash)``
    





const Home = () => {
const API_URL = 'http://127.0.0.1:5174/api/v1/books/'
 

   const [data , setData] = useState([])


const fetchData = async () => {
    try {
        const resp = await axios.get(API_URL + 'all' , {
            method : "GET"
        })
        setData(resp.data.data)
    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{
    fetchData()
},[])

console.log(data);
  return (
    <Container>
        <BookContainer>
            <h2>Book</h2>
            <>
          {data.map(({_id,title,author,publishYear})=> {
            return (
                  <Book key={_id}>
                     <Title>title : {title}</Title>
                     <Author>Author : {author}</Author>
                     <PublishYear>Publish Year {publishYear}</PublishYear>
                     <Edit>
                         <Icons>
                            <IconI size='1rem' color='indigo' />
                            <IconEdit size='1rem' color='green' />
                            <IconTrash size='1rem' color='red'/>
                         </Icons>

                     </Edit>

                </Book>
            )
          })}
                
             
        </>

        </BookContainer>
    </Container>
  )
}

export default Home