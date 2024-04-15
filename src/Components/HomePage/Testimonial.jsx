const Testimonial = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor="#testimonial-anchor"
      className="relative text-gray-800 mb-[100px]"
    >
      {/* Anchor for animation */}
      <div id="testimonial-anchor" className="absolute right-0 lg:top-[25%] top-[5%]"></div>
      <div className="container flex flex-col items-center mx-auto mt-[50px] lg:mt-[100px] mb-[20px]">
        <h1 className="lg:text-[36px] text-[22px] font-semibold leading-none text-center">What our customers are saying about us</h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="blue" className="w-8 h-8 text-primary">
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              As a seasoned investor, I&apos;ve used many real estate websites, but Elite States stands out. The attention to detail in
              property listings and the responsiveness of their support team truly sets them apart. A top-notch experience from start to
              finish!
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="blue" className="absolute right-0 w-8 h-8 text-primary">
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-primary text-gray-50">
            <img
              src="https://source.unsplash.com/50x50/?portrait?1"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">Sahar M</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="blue" className="w-8 h-8 text-primary">
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Elite States helped me find my dream home in record time. The intuitive search filters allowed me to narrow down my options
              quickly, and the comprehensive property details gave me confidence in my decision. Couldn&apos;t be happier with the outcome!
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="blue" className="absolute right-0 w-8 h-8 text-primary">
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-primary text-gray-50">
            <img
              src="https://source.unsplash.com/50x50/?portrait?2"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="blue" className="w-8 h-8 text-primary">
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Elite States exceeded my expectations! The user-friendly interface made browsing for my new home a breeze. The diverse range
              of properties ensured I found the perfect fit for my family. Highly recommend!
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="blue" className="absolute right-0 w-8 h-8 text-primary">
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-primary text-gray-50">
            <img
              src="https://source.unsplash.com/50x50/?portrait?3"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
            <p className="text-sm uppercase">Aliquam illum</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="blue" className="w-8 h-8 text-primary">
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              I was hesitant at first, but Elite States proved to be the ultimate solution for my real estate needs. The stunning visuals,
              and informative content made my property hunt enjoyable. Thank you for simplifying the process!
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="blue" className="absolute right-0 w-8 h-8 text-primary">
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-primary text-gray-50">
            <img
              src="https://source.unsplash.com/50x50/?portrait?4"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
            <p className="text-sm uppercase">Aliquam illum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
