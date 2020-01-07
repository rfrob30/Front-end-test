import React, { useState, useContext, useCallback } from "react";
import { Store } from '../context/Store';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export const TextInput: React.FC<any> = () => {
  const { dispatch } = useContext(Store);
  const [value, setValue] = useState<string>('');

  const handleChange = useCallback((newValue) => setValue(newValue.target.value), []);

  const addName = () => {
    if (value) dispatch({ type: "add", name: value })
  }
  
  return (
    <Grid container justify="center" alignItems="flex-end" spacing={3} style={{ width: '100%'}}>
      <Grid item>
        <TextField id="standard-basic" label="Name" value={value} onChange={handleChange}/>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={addName}>
          Add
        </Button>
      </Grid>
    </Grid>
  )
}
