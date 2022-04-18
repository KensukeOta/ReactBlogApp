import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { axios } from "../../lib/axios";
import { postInfo } from "../../store/postInfo";

export const DeleteBtn = (props: any) => {
  const [posts, setPosts] = useRecoilState(postInfo);
  
  const navigate = useNavigate();
  
  const destroy = async () => {
    if (!window.confirm("この記事を削除しますか？")) {
      return;
    }
    await axios.delete(`http://localhost:8080/api/posts/${props.id}/destroy`);
    const newPosts = posts.filter((post: any) => post.id !== props.id);
    setPosts(newPosts);
    navigate('/', { replace: true });
  };
  
  return (
    <button onClick={destroy} className="text-red-500">削除する</button>
  );
};