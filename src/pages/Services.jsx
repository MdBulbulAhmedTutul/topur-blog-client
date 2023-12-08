import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    // console.log(services)
    return (
        <div className="max-w-7xl mx-auto px-4 mb-24 mt-24">
            <div className='text-center mb-16'>
                <h2 className=' text-3xl font-bold mb-2'>Services</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et provident iusto, <br /> omnis hic possimus, blanditiis quo ut laborum nostrum natus aspernatur officiis voluptates cupiditate nulla nobis.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <Card key={service.id} service={service}></Card>)
                }
            </div>
        </div>
    );
};

export default Services;