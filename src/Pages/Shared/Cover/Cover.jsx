

const Cover = ({ img, title, details }) => {
    return (
        <div
            className="hero bg-fixed  mb-20 lg:h-[572px]"
            style={{
                backgroundImage: `url(${img})`,
            }}>

            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <div className="hero bg-black opacity-50 p-10  lg:w-[1000px]  lg:h-[333px] ">
                        <div className="hero-content text-center ">
                            <div className="lg:p-10">
                                <h1 className="text-5xl text-white font-bold">{title}</h1>
                                <p className="py-6 text-white uppercase font-semibold">
                                    {details}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;