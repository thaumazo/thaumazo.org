import styles from '../styles/Home.module.css'

import theme from "styles/theme"
import { ThemeProvider, styled } from '@mui/material/styles';

import Head from 'next/head'
import Link from "next/link"

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';

const pages = [
  ['/projects', 'Projects'],
 // ['/about', 'About'],
 // ['/contact', 'Contact'],
]

const ButtonLarge = styled(Button)(({ theme }) => ({
  color: "#eee",
  marginRight: 20,
  fontSize: 20,
}));

export default function Layout({ children, title, name, description }) {
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
            <Link key="siteName" href="/" passHref>
              <ButtonLarge color="inherit" classes={{ root: styles.siteName }}>Thaumazo</ButtonLarge>
            </Link>
            <ButtonGroup key="primary-nav" variant="text" sx={{ flexGrow: 1 }}>
              {pages.map(([path, title]) => {
                return (
                  <Link key={ path }href={ path } passHref>
                    <Button
                      color="inherit"
                      sx={{ color: name == path ? "#222" : null }}
                    >{ title }</Button>
                  </Link>
                )
              })}
            </ButtonGroup>
          {/*
            <Button color="inherit">Login</Button>
          */}
          </Toolbar>
        </AppBar>
  
        <>{children}</>
  
        <footer className={styles.footer}>
        </footer>
      </div>
    </ThemeProvider>
  )
}
