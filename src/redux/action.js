import {
  UPDATE_ITEM,
  DELETE_ITEM,
  FETCH_DATA,
  ADD_ITEM,
} from "../constant/Type";

export const listItem = () => {
  return async (dispatch, getState) => {
    let data = await fetch("https://dummyjson.com/products").then((response) =>
      response.json()
    );
    console.log(data);

    dispatch({
      type: FETCH_DATA,
      payload: data,
    });
  };
};
export const addItem = (product) => {
  return async (dispatch, getState) => {
    let data = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        } else {
          alert("added sucessfully");
        }
        return res.json();
      })
      .catch((e) => {
        if (e) {
          console.log("error: ", e);
          return;
        } else {
          alert("update issue");
        }
      });
    dispatch({
      type: ADD_ITEM,
      payload: data,
    });
  };
};

export const updateItem = (id) => {
  return async (dispatch) => {
    let data = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Simran",
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        } else {
          alert("update sucessfully");
        }
        return res.json();
      })
      .catch((e) => {
        if (e) {
          console.log("error: ", e);
          return;
        } else {
          alert("update issue");
        }
      });
    dispatch({
      type: UPDATE_ITEM,
      payload: data,
    });
  };
  //   let UpdateItem = fetch(`https://dummyjson.com/products/${id}`, {
  //     method: "PUT" /* or PATCH */,
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       title: "Simran",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then(console.log);
  //   return {
  //     type: UPDATE_ITEM,
  //     payload: UpdateItem,
  //   };
};

export const deleteItem = (id) => {
  return async (dispatch) => {
    let data = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE" /* or DELETE */,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        } else {
          alert("delete sucessfully");
        }
        return res.json();
      })
      .catch((e) => {
        if (e) {
          console.log("error: ", e);
          return;
        } else {
          alert("delete issue");
        }
      });
    dispatch({
      type: DELETE_ITEM,
      payload: data,
    });
  };
};
//List ITEM delete
// const deleteItem = (id) => {
//   let deletItems = fetch(`https://dummyjson.com/products/${id}`, {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then(console.log);
//   return {
//     type: DELETE_ITEM,
//     payload: deletItems,
//   };
// };
