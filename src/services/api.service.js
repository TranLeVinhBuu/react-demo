import axios from './axios.customize'

const createUserApi = (fullName, email, password, phone) => {
    const URL_BACKEND = "/user/create";
    const data = {
      fullName: fullName,
      email: email,
      password: password,
      phone: phone,
    };
    return axios.post(URL_BACKEND, data);
}

const updateUserApi = (id, fullName, phone) => {
  const URL_BACKEND = `/user/update/${id}`;
    const data = {
      id: id,
      fullName: fullName,
      phone: phone,
    };
    return axios.put(URL_BACKEND, data);
}

const getAllUserApi = () => {
  const URL_BACKEND = "/user";
  return axios.get(URL_BACKEND);
}

const deleteUserApi = (id) => {
  const URL_BACKEND = `/user/delete/${id}`;
  return axios.delete(URL_BACKEND);
}

export { 
  createUserApi, updateUserApi, getAllUserApi, deleteUserApi
};