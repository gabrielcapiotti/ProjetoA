import { AppRoutes } from './routes/AppRoutes';
import './App.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { LightTheme } from './config/theme/LightTheme';
import { DarkTheme } from './config/theme/DarkTheme';
import { useAppSelector } from './store/models/hooks';

function App() {
  const tema = useAppSelector((state) => state.theme.theme);

  const activeTheme = tema === 'dark' ? DarkTheme : LightTheme;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MuiThemeProvider theme={activeTheme}>
          <StyledThemeProvider theme={activeTheme}>
            <CssBaseline />
            <AppRoutes />
          </StyledThemeProvider>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
