import React, { useContext } from 'react'
import { Store } from '../context/Store';
import Button from '@material-ui/core/Button';

interface RemoveNameButton {
  selectedIndex: number
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

export const RemoveNameButton: React.FC<RemoveNameButton> = ({selectedIndex, setSelectedIndex}) => {
  const { dispatch } = useContext(Store);

  const removeName = () => {
    setSelectedIndex(-1)
    dispatch({ type: "remove", index: selectedIndex })
  }

  return (
    <Button variant="contained" color="secondary" onClick={removeName}>
      Remove
    </Button>
  );
}