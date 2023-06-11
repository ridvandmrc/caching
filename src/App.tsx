import { useState } from "react";
import { Comments } from "./comments/Comments";
import { getComments } from "./service/comment.service";

const App = () => {
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const handleChanges = async (id: string) => {
    if (!id) setComments([]);
    else {
      setLoading(true);
      const data = await getComments(id);

      setComments(data);
      setLoading(false);
    }
  };
  return (
    <>
      <input onChange={(e) => handleChanges(e.target.value)} />

      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {comments.map(({ body, email }, index) => (
            <Comments body={body} email={email} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default App;
