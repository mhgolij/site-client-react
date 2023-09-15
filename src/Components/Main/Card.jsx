import { Link } from "react-router-dom";

const Card = ({post})=>{
    return (
        <div
  className="block md:basis-[calc(33.3333%-2rem)] basis-[100%]">
  <div className="relative overflow-hidden bg-cover bg-no-repeat">
    <img
      src={post.image}
      alt={post.title} />
  </div>
  <div className="p-6">
    <h3 className="text-center underline mb-4">
        <Link to={`/post/${post.slug}`}>{post.title}</Link>
    </h3>
    <p className="text-center mb-3 text-lg font-extrabold">
        {post.mid_title}
    </p>
    <p className="text-center text-sm text-gray-500">
        {post.description}
    </p>
  </div>
</div>
    )
}
export default Card;