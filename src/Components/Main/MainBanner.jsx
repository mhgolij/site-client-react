import useAxios from "../../Hooks/useAxios";
import Loading from "./Loading";
const MainBanner = () => {
  const { response: sliders, Loading: loader } = useAxios({
    url: "/sliders/main",
  });
  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        sliders.map((slider) => (
          <div key={`main-${slider.id}`}
            className="bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${slider.url})`,
              height: "100vh",
            }}
          >
            <div className="mx-auto relative text-center top-1/4 max-w-screen-xl">
              <div className="bg-white relative max-w-lg py-11 mx-auto">
                <span className="absolute text-sm p-2 border-b border-r border-orange-400 left-0 top-0">
                  +1000 شعبه
                </span>
                <h2 className="w-fit text-red-400 mx-auto p-2">
                  رستوران های زنجیره ای وب فود
                </h2>
                <strong className="text-2xl relative mt-3 block">
                  به خانواده بزرگ وب فود بپیوندید
                </strong>
                <form className="mt-8">
                  <input dir="ltr" className="border bg-gray-100 mb-3 p-2 text-sm w-8/12" type="text" placeholder="email" />
                  <button
                    type="button"
                    className="block text-orange-600 mx-auto border border-orange-400 px-11 py-3  font-medium transition duration-150 ease-in-out hover:border-orange-300 hover:bg-orange-400 hover:bg-opacity-10 hover:text-black"
                  >
                    ثبت درخواست
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};
export default MainBanner;
