import React from 'react'
import ParticlesDiv from '../components/ParticlesDiv'
import Container from '../components/container'
import Button from '../components/button'
import { Link } from 'gatsby'
import index from './index'
import styles from './style.css'
import TextBox from '../components/textBox'

const SecondPage = () => (
  <>
    <ParticlesDiv >
      <Container style={{"margin":"0", "align-content": "flex-start"}}>
        <Link style={{}} to="/">
          home
        </Link>
        <TextBox style={{"align-self":"flex-start"}}>
          test
        </TextBox>
      </Container>
    </ParticlesDiv>
  </>
)

export default SecondPage
