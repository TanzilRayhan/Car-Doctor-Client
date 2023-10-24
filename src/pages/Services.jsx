/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }
        , [])

    return (
        <div>
            <div className=" text-center space-y-3 my-10">
                <h1 className=" text-5xl font-bold">Our Services: {services.length}</h1>
                <p className="">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;