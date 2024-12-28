import homeBanner from "../../assets/home-page-banner.png";

export default function HomeBanner() {
  return (
    <div
      className="relative  bg-center w-full h-[300px]"
      style={{
        backgroundImage: `url(${homeBanner})`,
      }}
    >
      <div className="relative flex items-center float-right sm:mx-auto sm:top-5 w-40 h-auto md:w-96 md:top-10 right-10 sm:w-full sm:m-5 ">
        <div className="right-side bg-[#fff3e3] rounded-md p-5">
          <div>
            <p className="text-sm text-gray-500">New Arrival</p>
            <h1 className="lg:text-3xl sm:text-xl font-bold text-[#b88e2f]">
              Discover Our New Collection
            </h1>

            <p className="mb-2 mt-2 text-gray-700 text-sm">
              Lore of the new collection will be available in the following
              formats and will be.
            </p>

            <button className="bg-[#b88e2f] hover:bg-[#ddaf42] text-white font-bold py-2 px-4 uppercase text-sm mt-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
