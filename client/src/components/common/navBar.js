import * as React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import ListItemButton from '@mui/material/ListItemButton'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'

export default function NavBar() {
  const drawerWidth = 120
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      bg='dark'
      variant='grey'
    >
      <Toolbar />
      {localStorage.getItem('userP') == 'Panel Member' ? (
        <>
          <ListItemButton to='/dashBoard'>Home</ListItemButton>
          <ListItemButton to='/evaluate'>Evaluvate topics</ListItemButton>
          <ListItemButton eventKey=''>Evaluvate presentation</ListItemButton>
        </>
      ) : localStorage.getItem('userP') == 'Supervisor' ? (
        <>
          <ListItemButton to='/dashBoard'>Home</ListItemButton>
          <ListItemButton to='/acceptTopic'>Accept Topics</ListItemButton>
        </>
      ) : localStorage.getItem('userP') == 'co-supervisor' ? (
        <>
          <ListItemButton to='/dashBoard'>Home</ListItemButton>
          <ListItemButton to='/coSupAcceptTopic'>Accept Group</ListItemButton>
        </>
      ) : localStorage.getItem('userP') == 'Admin' ? (
        <>
          <ListItemButton to='/dashBoard'>Home</ListItemButton>
          <ListItemButton href=''>Create Panel</ListItemButton>
          <ListItemButton to='/schedule'>Schedule Viva</ListItemButton>
          <ListItemButton to='/sMarking'>Create MarkingScehme</ListItemButton>
          <ListItemButton to='/viewMark'>View Marks</ListItemButton>
          <ListItemButton to='/addfiles'>Add Reseach </ListItemButton>
          <ListItemButton to='/disfilesadmin'>Reseach </ListItemButton>
          <ListItemButton to='/userlist'>Manage Users</ListItemButton>
          <ListItemButton to='/grplist'>Manage Groups</ListItemButton>
        </>
      ) : localStorage.getItem('userP') == 'Student' ? (
        <>
          <ListItemButton to='/dashBoard'>Home</ListItemButton>
          <ListItemButton to='/topdet'>Research Topics</ListItemButton>
          <ListItemButton to='/regtop'>Register Topics</ListItemButton>
          <ListItemButton to='/reqCo'>Request Supervisor</ListItemButton>
          <ListItemButton to='/topic'>Research Details</ListItemButton>
          <ListItemButton to='/subdoc'>Documents</ListItemButton>
          <ListItemButton to='/addgrp'>Create Group</ListItemButton>
        </>
      ) : (
        <p>not found:{localStorage.getItem('userP')}</p>
      )}
    </Box>
  )

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='grey'
        position='fitted'
      >
        <Container>
          {[''].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                {anchor}
                <MenuIcon />
              </Button>
              {/* <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer> */}
            </React.Fragment>
          ))}
          <Navbar.Brand href='/dashBoard'>
            <h1>RPMT</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/contact'>
                <h5>Contact</h5>
              </Nav.Link>
            </Nav>
            <Nav>
              <div className='p-3 mb-2 bg-gradient-primary text-white'>
                <p>{localStorage.getItem('userI')}</p>
                <p>{localStorage.getItem('userN')}</p>
              </div>
            </Nav>

            <Nav>
              {localStorage.getItem('user') != null ? (
                <>
                  <a href='/logout' className='btn btn-danger'>
                    <i className='fa fa-sign-in me-1'></i> Logout
                  </a>
                </>
              ) : (
                <>
                  <p>no user</p>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
