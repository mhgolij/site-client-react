import useAxios from "../../Hooks/useAxios";
import AboutMe from "./AboutMe";
import BestResturant from "./BestResturant";
import Card from "./Card";
import Loading from "./Loading";
import MainBanner from "./MainBanner";
// register Swiper custom elements
const MainPage = () => {
  const { response: trustSlider, Loading: loader } = useAxios({
    url: "/sliders/trust",
  });
  const { response: latesPost } = useAxios({
    url: "/posts?limit=3",
  });
  const { response: bestResturant } = useAxios({
    url: "/posts?limit=3&code=best_rest",
  });
  return (
    <div>
      <div>
        <MainBanner />
      </div>
      {/* trusted banner */}
      <div className="my-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-bold mb-8 text-2xl text-center">
            کسانی که به ما اعتماد کردند
          </h2>
          <div
            className="p-4"
            style={{
              boxShadow: "0 20px 30px 0 rgba(0,0,0,.06)",
            }}
          >
            <swiper-container
              slides-per-view="5"
              autoplay="true"
              space-between={3}
              loop={true}
            >
              {loader ? (
                <Loading />
              ) : (
                trustSlider.map((slider) => (
                  <swiper-slide key={`trust-${slider.id}`}>
                    <img src={slider.url} alt={slider.code} />
                  </swiper-slide>
                ))
              )}
            </swiper-container>
          </div>
        </div>
      </div>
      {/* end trusted banner */}

      {/* last posts */}
      <div className="my-20">
        <div className="max-w-screen-xl sm:px-3 md:px-0 mx-auto">
          <h2 className="font-bold mb-8 text-2xl text-center">آخرین پست ها</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {latesPost.map((post) => (
              <Card post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
      {/* end last post */}

      {/* best resturant */}
      <div className="my-20">
        <div className="max-w-screen-xl sm:px-3 md:px-0 mx-auto">
          <h2 className="font-bold mb-8 text-2xl text-center">
            بهترین رستوران های ما
          </h2>
          <div className="flex justify-center flex-wrap gap-2">
            {bestResturant.map((best) => (
              <BestResturant post={best} />
            ))}
          </div>
        </div>
      </div>
      {/* end of best */}

      <div className="my-20">
        <div className="max-w-screen-xl mx-auto">
          <AboutMe />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
