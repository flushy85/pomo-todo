import React, { useState } from 'react'
import { ListItem, ListItemText, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const ListHeader = ({ setTasks, tasks }) => {
  const headerStyle = {
    borderBottom: 'solid 3px white',
    width: '100%',
    maxWidth: '550px',
    height: '60px',
    marginBottom: '20px',
  }

  const iconStyle = {
    color: 'white',
    border: 'solid 1px white',
    borderRadius: '3px',
    padding: '5px',
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleDeleteAll = () => {
    setAnchorEl(null)
    setTasks([])
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <ListItem style={headerStyle}>
        <ListItemText>Tasks</ListItemText>
        <IconButton style={iconStyle} onClick={handleClick}>
          <MenuIcon />
        </IconButton>
      </ListItem>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleDeleteAll}
          disabled={!tasks.length ? true : false}
        >
          Delete All
        </MenuItem>
      </Menu>
    </div>
  )
}

export default ListHeader
