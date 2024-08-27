
import { Helmet } from 'react-helmet-async';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';

import OrderTab from '../OrderTab/OrderTab';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss || Order Food
                </title>
            </Helmet>
            <Cover img={orderImg} title={"Order Food"} details={"Would you like to try a dish?"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    {/* salad */}
                 <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    {/* salad */}
                 <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    {/* salad */}
                 <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    {/* salad */}
                 <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    {/* salad */}
                 <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;