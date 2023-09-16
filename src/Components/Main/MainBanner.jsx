import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import Loading from "./Loading";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
const MainBanner = () => {
  const { response: sliders, Loading: loader } = useAxios({
    url: "/sliders/main",
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const sendReq = async (v) => {
    try {
      const sendReq = await axios.post(
        "http://127.0.0.1:8000/api/requestToJoin",
        { email: v }
      );
      let data = sendReq.data;
      if (data.status === "success") {
        toast.success("درخواست شما ثبت شد");
      } else {
        toast.error("داده ثبت نشد");
      }
    } catch (error) {
      toast.error("اتصال به سرور موفق نبود");
    }
  };
  const submitReq = (e) => {
    sendReq(e.email);
  };
  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        sliders.map((slider) => (
          <div
            key={`main-${slider.id}`}
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
                <form onSubmit={handleSubmit(submitReq)} className="mt-8">
                  <input
                    {...register("email", {
                      required: "ایمیل اجباری است",
                      validate: {
                        maxLength: (v) =>
                          v.length <= 50 ||
                          "ایمیال باید حداکثر  کاراکتر باشد",
                        matchPattern: (v) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            v
                          ) || "ایمیل معتبر نیست",
                      },
                    })}
                    dir="ltr"
                    className="border bg-gray-100 mb-3 p-2 text-sm w-8/12"
                    type="text"
                    placeholder="email"
                  />
                  {errors.email && (
                    <p className="text-red-600" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                  <button
                    type="submit"
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
      <ToastContainer rtl={true} />
    </>
  );
};
export default MainBanner;
