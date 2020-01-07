import React from 'react';
import { StoreProvider } from './context/Store'
import { TextInput } from './component/TextInput';
import { NameList } from './component/NameList';
import Grid from '@material-ui/core/Grid';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Grid
        container
        justify="center"
        style={{height: '95vh'}}
      >
        <TextInput />
        <NameList />
      </Grid>
    </StoreProvider>
  );
}

export default App;
