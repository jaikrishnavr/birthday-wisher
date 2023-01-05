
import React from 'react'
import styled from 'styled-components'
import './Birthday.css'

const Message = styled.div`
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 4rem;
  margin-top: 2rem;
  @media screen and (max-width: 900px) {
    white-space: default;
    font-size: 2rem;
  }
`

const Container = styled.div`
  text-align: center;
  margin: 0;
  position: absolute;
  top: 7%;
  left: 50%;
  transform: translate(-50%, -50%);
`



class BirthdayMessage extends React.Component {
  render() {
    return (
      
      <Container className='col-4  cont_body'>
        <Message style={{ color: this.props.birthdayData.textColor }}>
          Happy Birthday, {this.props.birthdayData.wishee}!
        </Message>
        
      </Container>
    )
  }
}

export default BirthdayMessage