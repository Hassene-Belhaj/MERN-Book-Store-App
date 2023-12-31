import React from 'react'
import styled from 'styled-components'
import { AiOutlineEdit , AiOutlineHome, AiOutlinePlusSquare } from 'react-icons/ai'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #f3f5f9;
text-transform: capitalize;
`


const BookContainer = styled.div`
text-align: center;
padding-bottom: 4rem ;
`

const Plus = styled.div`
width: 90%;
display: flex;
justify-content: end;
margin: .5rem auto;
`

const IconPlus = styled(AiOutlinePlusSquare)`
cursor: pointer;
`


const Title = styled.h2`
text-align: center;
padding: 3rem auto;
color:#0f766e;
font-size: 1.5rem;
font-weight: 800;
margin: 1rem 0;
`

const AddBookTop = styled.div`
display: flex;
margin: 1rem 0;
`
const AddBookTitle = styled.h3`
 margin-right:1rem; 
`

const Edit = styled.div`
border-radius:5px;
`

const Icons = styled.div`

`
const IconI = styled(HiOutlineInformationCircle)`
margin-right: .5rem;
cursor: pointer;
`

const IconEdit = styled(AiOutlineEdit)`
margin-right: .5rem;
cursor: pointer;
`

const IconTrash = styled(FiTrash)`
cursor: pointer;
`

const Table = styled.table`
width: 90%;
margin: auto;
background-color: #fff;
border-radius: 5px;
`

const Thead = styled.thead`
`

const Tbody = styled.tbody`
`

const Tr = styled.tr`
height: 3rem;
`
const Image = styled.img``

const Th = styled.th`
text-transform: capitalize;
font-size: 1rem;
font-weight: 800;
`

const Td = styled.td`
font-size: 1rem;
font-weight: 500;
`


const Home = ({setParamID, data , showModalInformation , setShowModalInformation , setShowModalImage ,showModalImage}) => {

  const handleModal =(id) => {
    setShowModalInformation(!showModalInformation)
    setParamID(id)
  }
  
  const handleModalImage =(id) => {
    setShowModalImage(!showModalImage)
    setParamID(id)
  }
  

  return (
    <Container>
           {/* <AiOutlineHome style={{marginLeft : '3rem' , marginTop:'2rem' , cursor:'pointer'}} size={25} /> */}
        <BookContainer>
            <Title>Book List</Title>
             <Plus>
              <Link to={'/addbook'} style={{textDecoration:'none',color:'#0d9488'}}>
                 <AddBookTop>
                    <AddBookTitle>add a new book</AddBookTitle>  
                    <IconPlus size={25} color='#0d9488'/>
                 </AddBookTop>
              </Link>
            
             </Plus>
            <Table> 
              <Thead>
                <Tr>
                  <Th>no</Th>
                  <Th>book</Th>
                  <Th>title</Th>
                  <Th>author</Th>
                  <Th>published Year</Th>
                  <Th>Operations</Th>
                </Tr>
              </Thead>
            {data.map(({_id,title,author,publishYear,image},index)=> {
              return (
                <Tbody key={_id}>
                  <Tr >
                      <Td>{index+1}</Td>
                      <Td>
                        <Image onClick={()=>handleModalImage(_id)} src={image} style={{width:'60px'}} />

                      </Td>
                      <Td>{title}</Td>
                      <Td>{author}</Td>
                      <Td>{publishYear}</Td>
                        <Td>
                        <Edit>
                          <Icons>
                            <IconI onClick={()=>handleModal(_id)} size='20' color='#0ea5e9' />
                          <Link to={`/editbook/${_id}`}>
                            <IconEdit size='20' color='green'  />
                         </Link>
                          <Link to={`/deletebook/${_id}`}>
                            <IconTrash size='20' color='red' />                         
                          </Link>
                          </Icons>
                        </Edit>
                        </Td>
                  </Tr>
                </Tbody>
            )
            })}
            </Table>        
        </BookContainer>
    </Container>
  )
}

export default Home