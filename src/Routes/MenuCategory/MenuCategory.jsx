import { Link } from "react-router-dom";
import MenuItem from "../../Pages/Shared/MenuItem/MenuItem";


const MenuCategory = ({ items }) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}>
                    </MenuItem>)
                }
            </div>
            <Link to='/order'>  <button className="btn btn-outline border-0 border-b-4 mt-5 items-center">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;