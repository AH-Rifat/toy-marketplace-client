import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ToyCard from '../componants/ToyCard';
import GoogleMapReact from 'google-map-react';
import { Helmet } from "react-helmet";

const AnyReactComponent = () => <div></div>;

const galleryOfCar = [
    { id: 1, name: "https://media.istockphoto.com/id/1189575449/photo/side-view-of-silver-classic-model-car-with-white-background.jpg?s=612x612&w=is&k=20&c=2I6jLy_C_zHpbMJj3CaJUiOVNWGcCB0Ui9PE2ZGzN2A=" },
    { id: 2, name: "https://media.istockphoto.com/id/493243963/photo/vintage-stamped-metal-toy-automobile.jpg?s=612x612&w=is&k=20&c=d0pEHuVbEpFirlmFCHbgZq09ND-MMMreW2G-HPQAxNc=" },
    { id: 3, name: "https://media.istockphoto.com/id/120758576/photo/color-toy-car.jpg?s=612x612&w=is&k=20&c=TAPz1Sb2sgo7TEDRsDL4bSj4hv84VdxjntFbb7f__JM=" },
    { id: 4, name: "https://media.istockphoto.com/id/505237838/photo/toy-car-truck-in-hand.jpg?s=612x612&w=is&k=20&c=qvmQTEl42ZEb1zykGDpvU3-uzO1SfKRwnIsRxFNqxck=" },
    { id: 5, name: "https://media.istockphoto.com/id/1388831185/photo/police-car-toy.jpg?s=612x612&w=is&k=20&c=WpzLgZrqOmpILQdjjLbC11eP325QG9HQX93-fx_59ik=" },
    { id: 6, name: "https://media.istockphoto.com/id/1218816023/photo/a-police-car-toy-on-a-white-background.jpg?s=612x612&w=is&k=20&c=BMPe1Qih95GgTzbtNLDp-DOiHiflpGNSqgF1naBSZpE=" },
    { id: 7, name: "https://media.istockphoto.com/id/1289176883/photo/toy-typewriter-on-beige-background-red-fire-truck-made-of-plastic-for-the-toy-store-a-gift.jpg?s=612x612&w=is&k=20&c=kJ8FbYTnAFrLBmhNYB3NWQOGhd5Xg5mAr20oa2KUW7U=" },
    { id: 8, name: "https://media.istockphoto.com/id/1341284975/photo/toy-fire-truck.jpg?s=612x612&w=is&k=20&c=RJIqLrNjioj3K5Byitwy2r58TxpFcY_mLoZW6S1EGLI=" },
]

const Home = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502027
        },
        zoom: 15
    };


    return (
        <div>
            <Helmet>
                <title>Home | Toy Marketplace</title>
            </Helmet>
            {/* 
            sports car
            https://media.istockphoto.com/id/1189575449/photo/side-view-of-silver-classic-model-car-with-white-background.jpg?s=612x612&w=is&k=20&c=2I6jLy_C_zHpbMJj3CaJUiOVNWGcCB0Ui9PE2ZGzN2A=
            https://media.istockphoto.com/id/493243963/photo/vintage-stamped-metal-toy-automobile.jpg?s=612x612&w=is&k=20&c=d0pEHuVbEpFirlmFCHbgZq09ND-MMMreW2G-HPQAxNc=
            -------------------
            https://media.istockphoto.com/id/1196722428/photo/classic-red-and-white-convertible-collection-car-1-43-scale.jpg?s=612x612&w=is&k=20&c=dig2ZcVetRGdGNVTKpQCyg_6nJn8-2OeSujO-YVs-mY=
            https://media.istockphoto.com/id/1092757482/photo/orange-muscle-car.jpg?s=612x612&w=is&k=20&c=PMQlI6iX1lREI7SP35pi9vKsvDxme_ZelQqVLz9iNgw=
            
            truck
            https://media.istockphoto.com/id/120758576/photo/color-toy-car.jpg?s=612x612&w=is&k=20&c=TAPz1Sb2sgo7TEDRsDL4bSj4hv84VdxjntFbb7f__JM=
            https://media.istockphoto.com/id/505237838/photo/toy-car-truck-in-hand.jpg?s=612x612&w=is&k=20&c=qvmQTEl42ZEb1zykGDpvU3-uzO1SfKRwnIsRxFNqxck=
            ---------------
            https://media.istockphoto.com/id/1466718101/photo/childrens-toy-car.jpg?s=612x612&w=is&k=20&c=_W_VkNvycEzbrVG_FoD-IrZWMHzXpVfU6Ip-2tjTMKQ=
            https://media.istockphoto.com/id/1482257726/photo/close-up-model-truck-vehicle-toy-blue-color-car-delivery-service-transport-logistics-space.jpg?s=612x612&w=is&k=20&c=qdvEZeEUcRL6PQxNLuHNDu3wgRp6EdAaRgKhn2vZdLM=

            police car
            https://media.istockphoto.com/id/1388831185/photo/police-car-toy.jpg?s=612x612&w=is&k=20&c=WpzLgZrqOmpILQdjjLbC11eP325QG9HQX93-fx_59ik=
            https://media.istockphoto.com/id/1218816023/photo/a-police-car-toy-on-a-white-background.jpg?s=612x612&w=is&k=20&c=BMPe1Qih95GgTzbtNLDp-DOiHiflpGNSqgF1naBSZpE=
            -----------------------
            https://media.istockphoto.com/id/516427497/photo/toy-school-buses-souvenirs-for-sale-brooklyn-bridge-new-york.jpg?s=612x612&w=is&k=20&c=v8o0NbgCQvvmpOAk39QeAQWvv73kvUi9Asi50-zqWOc=
            https://media.istockphoto.com/id/1126460118/photo/metal-toy-car-police.jpg?s=612x612&w=is&k=20&c=1_lLiljiBNU7jzcRsMVVJp0acqpqn7ee9w5G8qz8M2I=

            fire truck
            https://media.istockphoto.com/id/1341284975/photo/toy-fire-truck.jpg?s=612x612&w=is&k=20&c=RJIqLrNjioj3K5Byitwy2r58TxpFcY_mLoZW6S1EGLI=
            https://media.istockphoto.com/id/1289176883/photo/toy-typewriter-on-beige-background-red-fire-truck-made-of-plastic-for-the-toy-store-a-gift.jpg?s=612x612&w=is&k=20&c=kJ8FbYTnAFrLBmhNYB3NWQOGhd5Xg5mAr20oa2KUW7U=
            --------
            https://media.istockphoto.com/id/175542966/photo/toy-fire-engine-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=gOucFITab8YgzyOiA73b2JevBvqpSohP3rpwl6oiBcI=
            https://media.istockphoto.com/id/1340432929/photo/red-shiny-fire-truck-toy.jpg?s=612x612&w=is&k=20&c=4vgLivl0d8kj7VQJQcR8BLPesGCxFj2Cv2JgDpTW2jc=



            
            
            
            
            
            */}
            {/* banner section */}
            <div className='relative'>
                <img className="w-full  h-[35rem] brightness-50" src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="image description" />
                <h1 className='absolute text-center top-20 left-6 md:top-32 md:left-24 text-white font-bold text-4xl md:text-5xl'>Explore a World of Toys at our Toy Marketplace</h1>
                <p className='absolute md:p-20 top-56 left-8 md:top-32 md:left-24 text-white font-bold text-xl md:text-xl'>Discover an enchanting collection of toys for all ages at our Toy Marketplace. From classic favorites to the latest trends, our platform offers a wide range of toys to spark imagination, promote learning, and provide endless hours of fun.</p>
            </div>

            {/* Gallery section */}
            <h1 className="text-center text-violet-700 text-5xl my-16 underline uppercase">Toys Gallery</h1>
            <div className="grid w-4/5 gap-6 mx-auto items-center grid-cols-1 md:gap-11 md:grid-cols-2 lg:grid-cols-4">
                {
                    galleryOfCar.map(data => {
                        return <img data-aos="zoom-in" key={data.id} src={data.name} alt="galleryImage" className="rounded-xl border border-violet-400 shadow-xl shadow-violet-400" />
                    })
                }
            </div>

            {/* Shop by category section */}
            <h1 className="text-center text-violet-700 text-5xl my-16 underline uppercase">Shop By Category</h1>
            <div className='w-[80%] mx-auto my-4 bg-white p-4 rounded-xl shadow-xl shadow-violet-300'>
                <Tabs>
                    <TabList>
                        <Tab>Sports Cars</Tab>
                        <Tab>Police Mini Cars</Tab>
                        <Tab>Fire Trucks</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='md:flex gap-8 my-6'>
                            <ToyCard />
                            <ToyCard />
                            <ToyCard />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>

            {/* about us section */}
            <div className='my-20 flex-col md:flex md:flex-row justify-around w-10/12 mx-auto bg-white p-4 py-10 rounded-xl shadow-lg shadow-violet-400'>
                <img data-aos="fade-up-right" src="https://media.istockphoto.com/id/876439184/photo/vintage-toy-cars.jpg?s=612x612&w=is&k=20&c=bW8BZGRY6FNYyhN0QqRr1ereVcYSalMWQlb4iz0Z-FQ=" alt="image" className="w-96 rounded-xl shadow-lg shadow-violet-500 border border-violet-500" />
                <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="1000">
                    <h1 className='text-violet-600 text-4xl underline my-6 md:mb-6 text-center'>About Us</h1>
                    <p className='md:w-96'>
                        At <span className='text-red-500'>AH Toys Hub</span> , we are passionate about creating a world where children`s dreams come to life through the power of play. Our mission is to provide a trusted and exciting platform where toy enthusiasts can connect, explore, and find the perfect toys for their little ones. With a carefully curated selection of toys from renowned brands and independent sellers, we strive to bring joy, imagination, and learning into every child`s life. Whether you`re looking for educational toys, interactive games, or timeless classics, we have something for everyone. Join our vibrant community, discover endless possibilities, and embark on a delightful toy journey with us
                    </p>
                </div>
            </div>

            {/* our google map section */}
            <h1 className="text-center text-violet-700 text-5xl my-16 underline uppercase">Find Us</h1>
            <div style={{ height: '60vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                    />
                </GoogleMapReact>
            </div>

        </div>
    );
};

export default Home;