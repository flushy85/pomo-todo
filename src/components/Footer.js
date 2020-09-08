import React from 'react'
import { MailOutline, GitHub } from '@material-ui/icons'
const Footer = () => {
  const footer = {
    position: 'relative',
    width: '100%',
    bottom: '0',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: '1rem',
    height: 'auto',
    flex: '1',
    margin: '15px 0px',
  }

  const linkContainer = {
    display: 'flex',
  }

  return (
    <footer style={footer}>
      <p>Designed and Created by Greg Burdick 2020</p>
      <div style={linkContainer}>
        <a href='placeholder.com'>
          <GitHub style={{ color: 'white', padding: '2px' }} />
        </a>
        <a href='placeholder.com'>
          <MailOutline style={{ color: 'white', padding: '2px' }} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
