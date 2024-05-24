export const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader">Loading...</div>
      <style jsx>{`
        .loader,
        .loader:before,
        .loader:after {
          border-radius: 50%;
          width: 2.5em;
          height: 2.5em;
          animation: load7 1.8s infinite ease-in-out;
        }
        .loader {
          color: #000;
          font-size: 10px;
          position: relative;
          text-indent: -9999em;
          margin: 88px auto;
          transform: translateZ(0);
          animation-delay: -0.16s;
        }
        .loader:before {
          left: -3.5em;
          animation-delay: -0.32s;
        }
        .loader:after {
          left: 3.5em;
        }
        @keyframes load7 {
          0%,
          80%,
          100% {
            box-shadow: 0 2.5em 0 -1.3em;
          }
          40% {
            box-shadow: 0 2.5em 0 0;
          }
        }
      `}</style>
    </div>
  );
};