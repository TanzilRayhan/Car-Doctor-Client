import error from '../../public/assets/icons/404.png'
import Navbar from '../components/Navbar';
const Error = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='flex justify-center items-center my-20'>
                <img src={error} alt="error" />
            </div>
        </div>
    );
};

export default Error;