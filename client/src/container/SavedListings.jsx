import ListingsSaved from "./ListingsSaved";
// import Return from "../Components/Navbar/Return";
import Navbar from "../Components/Navbar/Navbar";
const SavedListings = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center items-center pt-20">
        <ListingsSaved />
      </div>
    </>
  );
};

export default SavedListings;
