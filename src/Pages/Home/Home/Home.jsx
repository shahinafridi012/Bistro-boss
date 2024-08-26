import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Bistro from "../Bistro/Bistro";
import Call from "../Call/Call";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import RecommendsItem from "../RecommendsItem/RecommendsItem";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
              <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <Bistro></Bistro>
           <PopularMenu></PopularMenu>
           <Call></Call>
           <RecommendsItem></RecommendsItem>
           <Featured></Featured>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;    