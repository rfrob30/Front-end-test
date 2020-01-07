import React, { useContext, useState } from 'react';
import { Store } from '../context/Store';
import { RandomNameButton } from './RandomNameButton';
import { RemoveNameButton } from './RemoveNameButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

export const NameList: React.FC<any> = () => {
  const { state } = useContext(Store);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleListItemClick = (event: any, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div style={{minWidth: '290px'}}>
      <List component="nav" aria-label="secondary mailbox folder">
        {state.nameList.map((e,i) => 
          <ListItem
            key={i}
            button
            selected={selectedIndex === i}
            onClick={event => handleListItemClick(event, i)}
          >
            <ListItemText primary={e} />
          </ListItem>
        )}
      </List>
      <Grid container spacing={3}>
        <Grid item>
          <RandomNameButton />
        </Grid>
        <Grid item>
          <RemoveNameButton selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </Grid>
      </Grid>
      {state.currentName ? <p>Randomly Picked Name: <b>{state.currentName}</b></p> : null}
    </div>
  );
}