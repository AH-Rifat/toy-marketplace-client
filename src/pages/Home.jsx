import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ToyCard from '../componants/ToyCard';

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
    return (
        <div>
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
            <img className="h-[35rem] w-full" src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="image description" />

            {/* Gallery section */}
            <h1 className="text-center text-violet-700 text-5xl my-16 underline uppercase">Toys Gallery</h1>
            <div className="grid w-4/5 mx-auto items-center grid-cols-1 md:gap-11 md:grid-cols-2 lg:grid-cols-4">
                {
                    galleryOfCar.map(data => {
                        return <img key={data.id} src={data.name} alt="galleryImage" className="rounded-xl border border-violet-400 shadow-xl shadow-violet-400" />
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
                        <div className='flex gap-8 my-6'>
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
        </div>
    );
};

export default Home;