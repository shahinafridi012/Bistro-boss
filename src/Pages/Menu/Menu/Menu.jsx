
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import img1 from '../../../assets/menu/dessert-bg.jpeg'
import img2 from '../../../assets/menu/pizza-bg.jpg'
import img3 from '../../../assets/menu/salad-bg.jpg'
import img4 from '../../../assets/menu/soup-bg.jpg'
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"OUR MENU"} details={"Would you like to try a dish?"}></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={img1} title={"DESSERTS"} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={img2} title={"PIZZA"} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={img3} title={"SALADS"} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={img4} title={"SOUPS"} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <PopularMenu></PopularMenu>

       
        </div>
    );
};

export default Menu;