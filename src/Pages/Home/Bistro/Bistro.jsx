
import image from '../../../assets/home/chef-service.jpg'
const Bistro = () => {
    return (
        <div
            className="hero bg-fixed mt-20 mb-20 lg:h-[572px]"
            style={{
                backgroundImage: `url(${image})`,
            }}>

            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <div className="hero bg-white p-10  lg:w-[1000px]  lg:h-[333px] ">
                        <div className="hero-content text-center ">
                            <div className="lg:p-10">
                                <h1 className="text-5xl text-black font-bold">Bistro Boss</h1>
                                <p className="py-6 text-black">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                                </p>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bistro;