import axios, { isCancel, AxiosError } from 'axios';
async function getPosts(params) {
  const { data } = await axios.get('http://localhost:3000/posts', { params });
  return data;
}
getPosts({ _limit: 1 })
console.log(getPosts())
