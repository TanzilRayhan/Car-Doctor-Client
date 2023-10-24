import image1 from '../../public/assets/images/homeCarousel/1.jpg'
import image2 from '../../public/assets/images/homeCarousel/2.jpg'
import image3 from '../../public/assets/images/homeCarousel/3.jpg'
import image4 from '../../public/assets/images/homeCarousel/4.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full  h-[600px]">
                    <div className="hero-content text-neutral-content">
                        <img src={image1} className="w-full relative brightness-50" />
                        <div className="max-w-md absolute top-10 left-10 lg:top-40 lg:left-32">
                            <h1 className="mb-5 lg:text-6xl lg:leading-snug font-bold">Affordable <br /> Price For Car <br />Servicing</h1>
                            <p className="mb-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex lg:my-10 gap-5'>
                                <button className="btn btn-error">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full  h-[600px]">
                    <div className="hero-content text-neutral-content">
                        <img src={image2} className="w-full relative brightness-50" />
                        <div className="max-w-md absolute top-10 left-10 lg:top-40 lg:left-32">
                            <h1 className="mb-5 lg:text-6xl lg:leading-snug font-bold">Affordable <br /> Price For Car <br />Servicing</h1>
                            <p className="mb-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex lg:my-10 gap-5'>
                                <button className="btn btn-error">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full  h-[600px]">
                <div className="hero-content text-neutral-content">
                        <img src={image3} className="w-full relative brightness-50" />
                        <div className="max-w-md absolute top-10 left-10 lg:top-40 lg:left-32">
                            <h1 className="mb-5 lg:text-6xl lg:leading-snug font-bold">Affordable <br /> Price For Car <br />Servicing</h1>
                            <p className="mb-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex lg:my-10 gap-5'>
                                <button className="btn btn-error">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <div className="hero-content text-neutral-content">
                        <img src={image4} className="w-full relative brightness-50" />
                        <div className="max-w-md absolute top-10 left-10 lg:top-40 lg:left-32">
                            <h1 className="mb-5 lg:text-6xl lg:leading-snug font-bold">Affordable <br /> Price For Car <br />Servicing</h1>
                            <p className="mb-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex lg:my-10 gap-5'>
                                <button className="btn btn-error">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;