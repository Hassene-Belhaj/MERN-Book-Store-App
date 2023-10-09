import React, { useEffect } from 'react'
import styled from 'styled-components'
import { AiFillCheckCircle } from 'react-icons/ai'


const ModalContainer = styled.div`
position: absolute;
bottom: 5px;
left: ${({$showModal})=>$showModal ? '1px' : '-150%'};
transition: all ease-in-out 0.5s;
width: 20rem ;
height : 3rem ;
/* border: 1px solid rgba(0,0,0,1); */
border-radius: 5px;
background-color: #0d9488;
color: #fff;
display: flex;
`
const Message = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
`
const Title = styled.h4`
`

const Modal = ({showModal,msg}) => {


  return (
        <ModalContainer $showModal={showModal}>
            <Message>
                <AiFillCheckCircle  style={{marginRight:'1rem'}} color='#fff' size={20}/>
                 <Title>{msg}</Title>             
            </Message>
        </ModalContainer>
  )
}

export default Modal