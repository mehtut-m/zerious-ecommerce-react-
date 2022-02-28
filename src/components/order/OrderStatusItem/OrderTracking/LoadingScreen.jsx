import ClipLoader from 'react-spinners/ClipLoader';

const LoadingScreen = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <ClipLoader />
      <h3 className="mt-4">This might take a while...</h3>
    </div>
  );
};

export default LoadingScreen;
