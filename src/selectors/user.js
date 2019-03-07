export const getAllUsers = state => { 
  return state.users.users;
};

export const getUserById = (state, id) => { 
  
  console.log('return', state, id);
};
