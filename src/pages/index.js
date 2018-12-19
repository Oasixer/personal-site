import React from 'react'
import ParticlesDiv from '../components/ParticlesDiv'
import Container from '../components/container'
import { Link } from 'gatsby'
import styles from './style.css'

export default () => (
  <>
  <ParticlesDiv>
      <Container>
          <Link style={{"background-color":"lightgrey","text-overflow": "unset","white-space": "nowrap"}}to="/page-2">Kaelan 
          <br/>Moffett-Steinke</Link>
        
          <Link to="/page-2">contact</Link>

          <Link to="/page-2">github</Link>

          <Link to="/page-2">test</Link>
      </Container>
  </ParticlesDiv>
  </>
)
