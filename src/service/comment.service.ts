import axios from "axios";

let cacheData: any = {};

export const getComments = async (id: string) => {
  if (cacheData[id]) return cacheData[id];
  const data = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );

  cacheData[id] = data.data;

  console.log(cacheData);

  return data.data;
};
