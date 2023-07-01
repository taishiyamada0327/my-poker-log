import './index.css';
import './App.css';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import ResultCreate from "./components/ResultCreate";
import ResultList from "./components/ResultList";
import Header from "./components/Header";
import SideMenu from './components/SideMenu';
import { AppBar, Divider, Grid, Toolbar } from '@mui/material';

export type Results = {
  id: number;
  title: string
}

const App = () => {
  const [results, setResults] = useState<Results[]>([]);

  const createResult = (title: string) => {
    const updateResults = [
      ...results,
      {
        id: Math.round(Math.random() * 9999),
        title
      }
    ];
    setResults(updateResults);
  };

  return(
    <div className='App'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='absolute' >
          <Header />
        </AppBar>
        <SideMenu />
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
        </Toolbar>
        <Divider sx={{ my: 10 }} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt:4, mb:4 }} >
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={3}>
              <ResultCreate onCreate={createResult} />
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <ResultList results={results} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default App;
