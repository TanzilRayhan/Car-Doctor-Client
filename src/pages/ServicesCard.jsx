/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

const ServicesCard = ({ service }) => {

    const { title, img, price } = service;

    return (
        <div>
            <div className="card card-compact">
                <figure><img src={img} className="h-60 w-full rounded-t-xl" /></figure>
                <div className="my-4 space-y-3">
                    <h2 className="card-title font-extrabold">{title}</h2>
                    <p className="font-bold text-red-800">Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;