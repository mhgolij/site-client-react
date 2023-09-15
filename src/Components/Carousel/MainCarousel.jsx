
import useAxios from '../../Hooks/useAxios';
import Loading from '../Main/Loading';
const MainCarousel = () => {
  const {response:sliders,Loading:loader} = useAxios({
    url:"/sliders/main"
  })
  return (
    <>
      <swiper-container navigation="true" rtl="true" autoplay="true" loop="true" pagination="true">
        {
          loader ? <Loading /> :
          sliders.map(slider =>(
            <swiper-slide key={`slider-${slider.id}`}>
            {
              <img 
              className="block"
              style={{
                width:"100%",
                maxHeight:"400px"
              }}
              src={slider.url}
              alt={slider.code}
            />
            }
          </swiper-slide>
          ))
        }
      </swiper-container>
    </>
  );
};
export default MainCarousel;
