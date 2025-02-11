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

const updateUserApi = () => {}

const getAllUserApi = () => {
  const URL_BACKEND = "/user";
  return axios.get(URL_BACKEND);
}

export { 
  createUserApi, updateUserApi, getAllUserApi 
};