import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constants/Config"

const API = axios.create({
  baseURL: BASE_URL, // 기본 서버 주소 입력
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5ajEyMzRAZ21haWwuY29tIiwicm9sZXMiOiJVU0VSIiwiaWF0IjoxNjU5NjQwNzI3LCJleHAiOjE2NTk2NDc5Mjd9.tkuPWwD10Ep6U7jxuK3Xx_AsuYI7CknmR-r505LfruQ`
  },
  withCredentials: false, // 이거 반드시 false 로 설정해야 서버에서 wildcard (*) 썼을때 오류 안나도록 할 수 있음
  crossDomain: true,
});
/*
The value of the 'Access-Control-Allow-Origin' header 
in the response must not be the wildcard '*'
 when the request's credentials mode is 'include'.
  The credentials mode of requests initiated by the XMLHttpRequest 
  is controlled by the withCredentials attribute.
*/
export default API;