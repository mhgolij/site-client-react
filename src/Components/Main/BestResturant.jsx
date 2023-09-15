import { Link } from "react-router-dom";

const BestResturant = ({ post }) => {
  return (
    <div className="block group md:basis-[calc(33.3333%-2rem)] basis-[100%]">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <Link className="block" to={`post/${post.slug}`}>
          <img
            className="block transition ease-in-out delay-300 group-hover:scale-105 scale-100 mx-auto h-[30rem]"
            src={post.image}
            alt={post.title}
          />
          <div className="text-center bg-slate-500/[0.8] text-white py-8 absolute bottom-0 left-0 right-0">
            <h3 className="text-lg mb-2 font-bold">{post.title}</h3>
            <p>{post.description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default BestResturant;
