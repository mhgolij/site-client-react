import MainCarousel from "../Carousel/MainCarousel"
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
const MainPage = () => {
    register();
    return <div>
        <div>
        <MainCarousel />
        </div>
    </div>
}
export default MainPage