import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (values) => {
    const sendData = async (values)=>{
      try {
        const data = await axios.post("http://127.0.0.1:8000/api/sendReq",values)
        if (data.status === 200) {
            toast.success("داده ثبت شد")
        }else{
            toast.warn("سرور داده را قبول نکرد")
        }
      } catch (error) {
        toast.error("ارتباط با سرور موفق نبود")
      }
    }
    sendData(values)
  };
  return (
    <div className="my-8 max-w-screen-xl px-8 ">
      <div className="flex justify-center flex-wrap">
        <div className="basis-full lg:basis-1/2">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="border flex flex-wrap p-12 gap-2 border-orange-500">
              <div className="basis-full md:basis-[calc(50%-0.25rem)]">
                <input
                  {...register("name", {
                    required: "نام اجباری است",
                  })}
                  type="text"
                  className="border w-full p-2 block"
                  placeholder="نام"
                  dir="rtl"
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>
              <div className="basis-full md:basis-[calc(50%-0.25rem)]">
                <input
                  {...register("lname", {
                    required: "نام خانوادگی اجباری است",
                  })}
                  type="text"
                  className="border w-full p-2 block"
                  placeholder="نام خانوادگی"
                  dir="rtl"
                />
                {errors.lname && (
                  <span className="text-red-600">{errors.lname.message}</span>
                )}
              </div>
              <div className="basis-full md:basis-[calc(50%-0.25rem)]">
                <input
                  {...register("email", {
                    required: "ایمیل اجباری است",
                    validate: {
                      maxLength: (v) =>
                        v.length <= 50 || "ایمیل باید حداکثر  کاراکتر باشد",
                      matchPattern: (v) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "ایمیل معتبر نیست",
                    },
                  })}
                  type="text"
                  className="border w-full p-2 block"
                  placeholder="email"
                  dir="ltr"
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
              <div className="basis-full ">
                <textarea
                  {...register("text", {
                    required: "متن درخواست اجباری است",
                  })}
                  type="text"
                  className="border w-full p-2 block"
                  placeholder="متن درخواست"
                  dir="rtl"
                ></textarea>
                {errors.text && (
                  <span className="text-red-600">{errors.text.message}</span>
                )}
              </div>
              <button
                type="submit"
                className="bg-green-400 mt-5 py-2 px-8 rounded-md hover:bg-green-600 hover:text-white transition"
              >
                ثبت
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
