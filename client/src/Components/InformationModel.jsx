import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'



const Information = styled.div`
position: absolute;
top: 50%;
left: ${({$showModelInformation})=>$showModelInformation ? '50%' : '-100%'};
transition: all 0.5s ease-in-out;
transform: translate(-50%,-50%);
width: 800px;
height: auto;
background-color: #fff;
border-radius: 7px;
display: flex;
z-index: 3000;
`
const CloseIcon = styled(AiOutlineClose)`
position: absolute;
top: 10px;
right: 10px;
cursor: pointer;
`

const Image = styled.img`
flex: 1;
`
const InformationRight = styled.div`
flex :1 ;
`
const Title = styled.h3`
text-align: center;
margin-top: 3rem;
margin-bottom:1rem ;
`
const Desc = styled.p`
margin: 0 1rem;
`

const InformationModel = ({showModelInformation,setShowModelInformation,data,paramID}) => {
   const findBook = data.find((item)=>item._id === paramID )

  return (
    < >
        <Information $showModelInformation={showModelInformation}>
            <CloseIcon onClick={()=>setShowModelInformation(!showModelInformation)} />
          <Image src={findBook?.image} alt="" />
          <InformationRight>
            <Title>{findBook?.title}</Title>
             <Desc>{findBook?.desc}</Desc>

          </InformationRight>

        </Information>      
    </>
  )
}

export default InformationModel