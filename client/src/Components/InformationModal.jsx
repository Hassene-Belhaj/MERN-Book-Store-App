import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'



const Information = styled.div`
position: absolute;
top: 50%;
left:50%;
transition: all 0.5s ease-in-out;
transform: translate(-50%,-50%);
width: 800px;
height: auto;
background-color: #fff;
border-radius: 7px;
display: ${({$showModalInformation})=>$showModalInformation ? 'flex' : 'none'};
z-index: 3000;
overflow: hidden;
`
const ContainerRGBA = styled.div`
position: fixed;
inset: 0;
display: ${({$showModalInformation})=>$showModalInformation? 'flex' : 'none'};
transition: all 0.3s ease-in-out;
background-color: rgba(0,0,0,0.7);
cursor: pointer;
`

const CloseIcon = styled(AiOutlineClose)`
position: absolute;
top: 10px;
right: 10px;
cursor: pointer;
`

const Image = styled.img`
flex: 1;
max-height : 500px;
`
const InformationRight = styled.div`
flex :1;
`
const Title = styled.h3`
font-size: 1.2rem;
text-align: center;
margin-top: 3rem;
margin-bottom:1rem ;
`
const Auth = styled.h4`
font-style: italic;
text-align: center;
margin-bottom: 1rem;
color: gray;
`
const Desc = styled.p`
margin: 0 1rem;
`

const InformationModal = ({showModalInformation,setShowModalInformation,data,paramID}) => {

   const findBook = data.find((item)=>item._id === paramID )

   

  return (
    < >
        <ContainerRGBA $showModalInformation={showModalInformation} onClick={()=>setShowModalInformation(false)} ></ContainerRGBA>
        <Information $showModalInformation={showModalInformation}>
            <CloseIcon size={20} onClick={()=>setShowModalInformation(!showModalInformation)} />
          <Image src={findBook?.image} alt="" />
          <InformationRight>
            <Title>{findBook?.title}</Title>
            <Auth>by {findBook?.author}</Auth> 
             <Desc>{findBook?.desc}</Desc>

          </InformationRight>

        </Information>      
    </>
  )
}

export default InformationModal