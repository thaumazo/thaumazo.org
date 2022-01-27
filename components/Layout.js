import styles from '../styles/Home.module.css'
import theme from "styles/theme"
import { ThemeProvider } from '@mui/material/styles';

import Head from 'next/head'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Layout({ children, title, description }) {
  return (
    <ThemeProvider theme={ theme }>
      <div className={styles.container}>
        <Head>
          <title>{ title }</title>
          {description && <meta name="description" content={ description } />}
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <AppBar position="static">
          <Toolbar>
          {/*
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          */}
            <Typography 
              variant="h5" 
              component="div" 
              sx={{
                color: "#eee",
                marginRight: "20px", 
              }}
            >
              Thaumazo
            </Typography>
            <ButtonGroup variant="text" sx={{ flexGrow: 1 }}>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
            </ButtonGroup>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
  
        <main>{children}</main>
  
        <footer className={styles.footer}>
        </footer>
      </div>
    </ThemeProvider>
  )
}
