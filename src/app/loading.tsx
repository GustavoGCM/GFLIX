import LoadingCard from "../components/loadingComponents/loadingCard";
import LoadingTitles from "../components/loadingComponents/loadingTitles";
import LoadingSpinner from "../components/loadingComponents/loadingSpinner";

const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="mt-[22vh] flex flex-col w-full gap-11">
      <div
        role="status"
        className="space-y-8 mx-auto w-fit animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
      >
        
        <div className="relative flex items-center justify-center w-full h-[400px] bg-gray-700 rounded sm:w-[600px] dark:bg-gray-700">
        <LoadingSpinner />
          
        </div>

        <span className="sr-only">Loading...</span>
      </div>
      <LoadingTitles />

      <div className="ml-11 flex gap-3">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        
      </div>
      <div className="ml-11 flex gap-3">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        
      </div>
      <div className="ml-11 flex gap-3">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        
      </div>
    </div>
  );
};

export default Loading;
