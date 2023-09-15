import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import Loading from "../Main/Loading";
import Card from '../Main/Card';

const Category = () => {
  const params = useParams();
  const { response: posts, loading: loader } = useAxios({
    url: `/category/${params.categoryId}`,
  });
  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <div>
          <div className="my-8 text-2xl text-center font-extrabold">
            {posts.length > 0 && "دسته بندی : " + posts[0].cat_title}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {
                posts.map(post =>(
                    <Card key={`cat_post_${post.post_id}`} post={post} />
                ))
            }
          </div>
        </div>
      )}
    </>
  );
};
export default Category;
