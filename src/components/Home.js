import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
      <Section title="Model S" desc="Lease starting at $399/mo" bgImg="https://images.pexels.com/photos/5180900/pexels-photo-5180900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" leftbtn="Custom Order" rightbtn="Existing Inventory "/>
      <Section title="Model 3" desc="Lease starting at $399/mo" bgImg="https://images.pexels.com/photos/8438897/pexels-photo-8438897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" leftbtn="Custom Order" rightbtn="Existing Inventory "/>
      <Section title="Model 7" desc="Lease starting at $399/mo" bgImg="https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" leftbtn="Custom Order" rightbtn="Existing Inventory "/>
      <Section title="Model 9" desc="Lease starting at $399/mo" bgImg="https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" leftbtn="Custom Order" rightbtn="Existing Inventory "/>
      <Section title="Model X" desc="Lease starting at $399/mo" bgImg="https://images.pexels.com/photos/12658199/pexels-photo-12658199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" leftbtn="Custom Order" rightbtn="Existing Inventory "/>
      <Section title="Solar Panels" desc="Schedule a Virtual Consultation" bgImg="https://images.pexels.com/photos/9875683/pexels-photo-9875683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" leftbtn="Order Now" rightbtn="Learn More "/>
      <Section title="Accesories" desc="" bgImg="https://media.istockphoto.com/id/1317564785/photo/paper-jewelry-pendant-gift-packaging-rigid-box.jpg?s=1024x1024&w=is&k=20&c=SVPW1gjBOnJWFZ5TnQutuD1q7uonowxnxfGO1z_tkq0=" leftbtn="Order Now" rightbtn=""/>
    </Container>
  )
}

export default Home
const Container = styled.div`
height:100vh;
`