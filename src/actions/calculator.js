export const setContainer = (l, b, h, containers = 1) => ({
  type : 'SET_CONTAINER',
  container_details : {
    containers : containers > 1 ? containers : 1,
    container_dim : {
      length : l,
      bredth : b,
      height : h
    }
  }
});

export const addCase = (id) => ({
  type : 'ADD_CASE',
  id
});

export const removeCase = (id) => ({
  type : 'REMOVE_CASE',
  id
});

export const editCase = (l, b, h, cases, id) => ({
  type : 'EDIT_CASE',
  length : l,
  bredth : b,
  height : h,
  cases : cases > 0 ? cases : 0,
  id
});
/*
export const addValueCase = (l, b, h, cases, id) => ({
  type : 'ADD_VALUE_CASE',
  length : l,
  bredth : b,
  height : h,
  cases : cases > 0 ? cases : 0,
  id
});
*/
