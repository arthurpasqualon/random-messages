const Types = {
  SET_READ: 'SET_READ',
};

const initialState = {
  readIds: [],
};

export const setRead = (id: string) => {
  return {
    type: Types.SET_READ,
    id,
  };
};

export default function list(state = initialState, action: any) {
  switch (action.type) {
    case Types.SET_READ:
      return {readIds: [...state.readIds, action.id]};
    default:
      return state;
  }
}
