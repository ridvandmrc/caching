import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Comments } from "./Comments";
import axios from "axios";
import { useState } from "react";

const Input = () => {
  const queryClient = useQueryClient();
  const [queryId, setQueryId] = useState<string>("1");

  const getFromCache = (key: string) => {
    return queryClient.getQueryData([key]);
  };

  const { data, isLoading } = useQuery({
    queryKey: [`getComments/${queryId}`],
    queryFn: async (arg) => {
      const cache = getFromCache(`getComments/${queryId}`);
      if (cache) return cache;

      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${
          arg.queryKey[0].split("/")[1]
        }`
      );

      return data.data;
    },
  });

  const handleChangesQuery = (id: string) => {
    setQueryId(id || "1");
  };

  return (
    <>
      <input onChange={(e) => handleChangesQuery(e.target.value)} />

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          {data?.map(({ body, email }: any, index: number) => (
            <Comments body={body} email={email} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Input;
