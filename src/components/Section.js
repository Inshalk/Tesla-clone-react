import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,desc,leftbtn,rightbtn,bgImg}) {
  return (
    <Wrap bgImgP={bgImg}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>
        {desc}
        </p>
      </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
      <ButtonGroup>
        <LeftButton> {leftbtn} </LeftButton>
        {rightbtn && 
        <RightButton> {rightbtn} </RightButton>
        }
      </ButtonGroup>
      </Fade>
      <DownArrow src=".\images\arrow-down-line.svg"></DownArrow>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap= styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-position:center;
background-size:cover;
background-repeat:no-repeat;
background-image:${props=>`url('${props.bgImgP}')`};
`
const ItemText=styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:768px){
  flex-direction:column;
}

`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height: 40px;
width:256px;
color:white;
display:flex;
align-items:center;
justify-content:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`
const RightButton=styled(LeftButton)`
background-color:white;
color: black;
opacity:0.65;
`
const DownArrow=styled.img`
margin-top:20px;
height:40px;
animation:animateDown infinite 1.5s;
`
const Buttons=styled.div`

`