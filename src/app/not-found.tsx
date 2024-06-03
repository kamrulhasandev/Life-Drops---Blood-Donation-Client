'use client'


const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-5">
      <h1 className="text-6xl text-[#EB2C29] font-bold">404!!! Page Not Found!!!</h1>
      <p className="text-xl text-gray-700 mt-5">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        className="mt-10 px-6 py-3 bg-[#EB2C29] text-white text-lg rounded hover:bg-red-700 transition-colors duration-300"
        onClick={() => window.location.href = '/'}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
