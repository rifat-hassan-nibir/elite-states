import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const blogsData = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const post = blogsData.find((blog) => blog.id === idInt);
  const { image, title, published_date, author_name, description } = post;

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="bg-[#F3F7FD] lg:pb-[50px] pb-[30px]">
      <Helmet>
        <title>Elite States | {title}</title>
      </Helmet>

      <div className="lg:w-[700px] mx-auto px-[12px] lg:px-0">
        <div className="lg:py-[50px] py-[30px]">
          <img src={image} className="w-full rounded-lg" />
        </div>
        <div className="bg-white lg:p-8 p-5 rounded-lg space-y-3">
          <div className="flex justify-between items-center">
            <p className="bg-primary inline-block px-4 py-1 rounded-full text-white capitalize text-[14px]">{author_name}</p>
            <p className="bg-primary inline-block px-4 py-1 rounded-full text-white capitalize text-[14px]">{published_date}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-3">
              <h3 className="text-[24px] font-bold">{title}</h3>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg space-y-3 mt-4">
          <p className="text-[16px] font-bold">Post</p>
          <p className="text-[14px] ml-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
