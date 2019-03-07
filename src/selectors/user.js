export const getAllUsers = state => { 
  return state.users.users;
};

export const getUserById = state => { 
  console.log('return', state.users);
  return state.users.userDetail;
};
