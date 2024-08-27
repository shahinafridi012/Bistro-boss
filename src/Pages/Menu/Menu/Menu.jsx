
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'

import img1 from '../../../assets/menu/dessert-bg.jpeg'
import img2 from '../../../assets/menu/pizza-bg.jpg'
import img3 from '../../../assets/menu/salad-bg.jpg'
import img4 from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../../../Routes/MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"OUR MENU"} details={"Would you like to try a dish?"}></Cover>
            <SectionTitle subHeading={"Don't Miss "} heading={"today offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <Cover img={img1} title={"DESSERTS"} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <MenuCategory items={dessert}></MenuCategory>

            <Cover img={img4} title={"SOUPS"} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <MenuCategory items={soup}></MenuCategory>

            <Cover img={img2} title={"PIZZA"} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <MenuCategory items={pizza}></MenuCategory>

            <Cover img={img3} title={"SALADS"} details={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
            <MenuCategory items={salad}></MenuCategory>



        </div>
    );
};

export default Menu;