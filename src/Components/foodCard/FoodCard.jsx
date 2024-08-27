

const FoodCard = ({item}) => {
    const {name, image, price} = item;
    return (
        <div>
            <div className="card  rounded-none shadow-xl lg:w-96 ">
                <figure>
                    <img
                        src={image} />
                </figure>
                <p className="absolute right-0 mr-10 mt-3 bg-slate-900 text-white">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions w-full">
                    <button className="btn btn-outline w-full border-0 border-b-4 mt-5 items-center hover:text-yellow-600 hover:border-yellow-700 hover:bg-slate-200">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;