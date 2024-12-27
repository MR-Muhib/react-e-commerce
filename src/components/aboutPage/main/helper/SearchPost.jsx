// import react icons
import { CiSearch } from "react-icons/ci";

const SearchPost = () => {
  return (
    <div className="relative mb-5">
      <input
        className="absolute top-0 right-0 border border-black rounded-md p-2 w-full "
        type="text"
        name="search"
      />
      <CiSearch className="relative font-bold text-xl float-end top-2 right-2" />
    </div>
  );
};

export default SearchPost;
