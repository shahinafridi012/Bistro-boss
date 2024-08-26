import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import image from '../../../assets/home/featured.jpg'
  import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 bg-fixed">
            <SectionTitle subHeading={"Check it out"} heading={"Featured Item"}></SectionTitle>
            <div className="md:flex justify-center p items-center pt-12 pb-20 lg:px-36">

                <div className="">
                    <img  src={image} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2025</p>
                    <p className="uppercase">Where Can i get some</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quasi odio architecto eligendi quisquam, nulla quis temporibus sunt! Possimus fuga officiis optio aliquid molestias eos perspiciatis asperiores facilis odio provident!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-5 items-center">Order Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;