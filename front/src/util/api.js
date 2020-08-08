import axios from 'axios';



const instance = axios.create({
    baseURL: 'base',
    //withCredentials: true, cors 오류시.
  });

  export const getData = (restUrl = '') => {
    return instance.get(restUrl);
  };
  
  export const postData = (restUrl = '', data = {}) => {
    return instance.post(restUrl, data);
  };
  
  export const putData = (restUrl = '', data = {}) => {
    return instance.put(restUrl, data);
  };
  
  export const deleteData = (restUrl = '', data = {}) => {
    return instance.delete(restUrl, data);
  };