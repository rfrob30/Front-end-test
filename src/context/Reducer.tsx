export type Actions =
  | { type: "add"; name: string }
  | { type: "remove"; index: number; }
  | { type: "setRandom"; name: string; }

export type State = {
  nameList: string[];
  currentName: string;
};

export const initState: State = { nameList: [], currentName: '' }

export function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "add":
      return {
        ...state,
        nameList : [...state.nameList, action.name]
      };
    case "remove":
      return {
        ...state,
        nameList: state.nameList.filter((_, i) => action.index !== i)
      };
    case "setRandom":
      return { ...state, currentName: action.name }
    default:
      return state;
  }
};

