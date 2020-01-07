import React, { useContext } from 'react'
import { Store } from '../context/Store';
import Button from '@material-ui/core/Button';

export const RandomNameButton: React.FC<any> = () => {
  const { state, dispatch } = useContext(Store);

  const getRandomName = () => {
    // if there are no unique names, choose the first item since it would be the only name
    if (!((new Set(state.nameList)).size > 1)) {
      dispatch({ type: "setRandom", name: state.nameList[0] })
      return
    }
    // loop until we get a different name, if user hasn't picked a random name, dispatch straightaway
    let num;
    while(true) {
      num = Math.floor(Math.random() * state.nameList.length);
      if (!state.currentName || state.nameList[num] !== state.currentName) {
        dispatch({ type: "setRandom", name: state.nameList[num] })
        return
      }
    }
  }

  return (
    <Button variant="contained" onClick={getRandomName}>
      Random
    </Button>
  );
}