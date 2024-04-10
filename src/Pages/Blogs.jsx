import { useLoaderData } from "react-router-dom";
import BlogsCard from "../Components/HomePage/BlogsCard";

const Blogs = () => {
  const blogsData = useLoaderData();
  return (
    <section className="text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogsData.map((singlePost, index) => (
            <BlogsCard singlePost={singlePost} key={index}></BlogsCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
