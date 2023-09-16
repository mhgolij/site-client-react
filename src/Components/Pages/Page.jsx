import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import Loading from "../Main/Loading";

const Page = () => {
  const params = useParams();
  const { response: post, loading: loader } = useAxios({
    url: `/${params.page}`,
  });
  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <div className="text-center my-20 mx-auto max-w-screen-xl">
          <img width={350} className="mx-auto rounded-full" src={post.image} alt="" />
          <h1 className="mt-6 font-bold text-3xl">{post.title}</h1>
          <div className="mt-8 text-gray-600">{post.mid_title}</div>
          <div className="my-5 border-2 border-dashed border-orange-500 bg-orange-200 py-8 mx-6">{post.description}</div>
          <div className="mt-8 text-justify px-5 indent-4" style={{
            lineHeight:1.9
          }}>{post.full_text}</div>
        </div>
      )}
    </>
  );
};
export default Page;
