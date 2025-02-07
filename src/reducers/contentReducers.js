import {
  UPDATE_ITEM,
  DELETE_ITEM,
  FETCH_DATA,
  ADD_ITEM,
} from "./../constant/Type";

const initialState = {
  skip: 30,
  limit: 10,
  totle: 30,
  products: [], // Initial state as an object with a contacts array
  loading: false,
  error: null,
};

const ListReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        listproducts: action.payload,
        loading: true,
        error: null,
      };
    case ADD_ITEM:
      return { ...state, listproducts: action.payload };

    case UPDATE_ITEM:
      return { ...state, listproducts: action.payload };
    case DELETE_ITEM:
      return {
        ...state,
        listproducts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default ListReducer;
