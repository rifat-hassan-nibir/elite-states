import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { Helmet } from "react-helmet-async";

const EstateDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);

  const estatesData = useLoaderData();

  const estate = estatesData.find((estate) => estate.id === idInt);

  const { estate_title, image, segment_name, description, price, status, area, location, facilities } = estate;

  return (
    <div className="bg-[#F3F7FD] lg:pb-[50px] pb-[30px]">
      <Helmet>
        <title>Elite States | Estate Details</title>
      </Helmet>

      <div className="lg:w-[700px]  mx-auto px-[12px] lg:px-0">
        <div className="lg:py-[50px] py-[30px]">
          <img src={image} className="w-full" />
        </div>
        <div className="bg-white lg:p-8 p-5 rounded space-y-3">
          <div className="flex justify-between items-center">
            <p className="bg-primary inline-block px-4 py-1 rounded-full text-white capitalize text-[14px]">{status}</p>
            <p className="bg-primary inline-block px-4 py-1 rounded-full text-white capitalize text-[14px]">{segment_name}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-3">
              <h3 className="text-[24px] font-bold">{estate_title}</h3>
              <div className="flex items-center gap-2">
                <CiLocationOn />
                <p className="text-[14px]">{location}</p>
              </div>
            </div>
            <h3 className="text-[24px] font-bold text-primary">{price}</h3>
          </div>
        </div>
        <div className="bg-white p-8 rounded  mt-4">
          <div className="grid grid-cols-2">
            <div className="space-y-3">
              <p className="text-[16px] font-bold">Facilites</p>
              {facilities.map((facility, index) => (
                <p className="capitalize ml-5 text-[14px]" key={index}>
                  {index + 1}. {facility}
                </p>
              ))}
            </div>
            <div>
              <div className="space-y-3">
                <p className="text-[16px] font-bold">Area</p>
                <p className="text-[14px] ml-5">{area}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded space-y-3 mt-4">
          <p className="text-[16px] font-bold">Description</p>

          <p className="text-[14px] ml-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
