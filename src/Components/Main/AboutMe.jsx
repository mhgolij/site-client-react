import useAxios from "../../Hooks/useAxios";
import Loading from "./Loading";
const AboutMe = () => {
  const { response: aboutme, Loading: loader } = useAxios({
    url: "/posts?limit=1&code=aboutme",
  });
  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        aboutme.map((post) => (<div className="flex gap-2 px-3 lg:px-0 flex-wrap" key={`about-${post.id}`}>
          <div className="basis-full text-2xl font-bold">{post.title}</div>
          <p className="text-orange-500 basis-full text-justify indent-4 mt-3">{post.description}</p>
          <div className="basis-[calc(75%-0.5rem)]">
            <h4 className="font-bold my-4">{post.mid_title}</h4>
            <h4 className="text-justify text-gray-400">{post.full_text}</h4>
          </div>
          <div className="basis-1/4">
            <img src={post.image} className="rounded-full" alt="" />
          </div>
        </div>))
      )}
    </>
  );
};
export default AboutMe;
