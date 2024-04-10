/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogsCard = ({ singlePost }) => {
  const { title, image, published_date, id, description } = singlePost;
  return (
    <Link to={`/blogs/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
      <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={image} />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
        <span className="text-xs text-gray-600">{published_date}</span>
        <p>{description.slice(0, 100)}</p>
      </div>
    </Link>
  );
};

export default BlogsCard;
