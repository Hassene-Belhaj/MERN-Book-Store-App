import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'



const ContainerRGBA = styled.div`
position: fixed;
inset: 0;
display: ${({$showModelImage})=>$showModelImage? 'flex' : 'none'};
transition: all 0.3s ease-in-out;
background-color: rgba(0,0,0,0.7);
cursor: pointer;
`


const ImageModelDiv = styled.div`
position: fixed;
top: 50%;
left:50%;
transition: all 0.5s ease-in-out;
transform: translate(-50%,-50%);
width: auto;
height: auto;
padding: 5rem;
background-color: #fff;
border-radius: 7px;
display: ${({$showModelImage})=>$showModelImage? 'flex' : 'none'};
justify-content: center;
align-items: center;
z-index: 3000;
overflow: hidden;
`
const Image = styled.img``

const IconClose = styled(AiOutlineClose)`
position: absolute;
right: 1rem;
top: 1rem;
cursor: pointer;
`

const ImageModel = ({data,paramID,showModelImage,setShowModelImage}) => {
    const findBook = data.find((item)=>item._id === paramID)
  return (
    <>
     <ContainerRGBA $showModelImage={showModelImage} onClick={()=>setShowModelImage(false)}></ContainerRGBA>
     <ImageModelDiv $showModelImage={showModelImage}>
     <IconClose  onClick={()=>setShowModelImage(!showModelImage)} size='20'  />
        <Image src={findBook?.image} alt="" />
     </ImageModelDiv>
    </>
  )
}

export default ImageModel