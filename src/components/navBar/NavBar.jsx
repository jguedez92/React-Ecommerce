import React from 'react'

import {AppBar, Toolbar,  Typography, Button, makeStyles} from '@material-ui/core'
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
  }))

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" color="default">
          <Toolbar>
            <Typography className={classes.title} variant="h4">
              GoRide
            </Typography>
            <Button size="large" variant="text" color="innherit">
              <GroupAddRoundedIcon style={{ fontSize: 30, marginRight: 8  }}/>
              Registrar
            </Button>
            <Button size="large" variant="text" color="innherit">
                <PersonRoundedIcon style={{ fontSize: 28 }}/>
              Ingresar
            </Button>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar
