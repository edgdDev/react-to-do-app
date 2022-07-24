export const initialState = {
  items: [],
  iterator: 0
};

export default function redurer(state, action) {
  switch (action.type) {
    case "SAVE_ITEM":
      return { ...state, items: [...state.items, action.value], iterator: state.iterator + 1 };

    case 'REMOVE_ITEM':
      return { ...state, items: action.value };

    case 'COMPLETE_ITEM':
      return { ...state, items: action.value };
      
    default: {
      return state;
    }
  }
}
