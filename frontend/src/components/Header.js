import React, { useContext, useState } from 'react';
import Logo from './Logo';
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser  } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';

const Header = () => {
    const user = useSelector(state => state?.user?.user);
    const dispatch = useDispatch();
    const [menuDisplay, setMenuDisplay] = useState(false);
    const context = useContext(Context);
    const navigate = useNavigate();
    const searchInput = useLocation();
    const URLSearch = new URLSearchParams(searchInput?.search);
    const searchQuery = URLSearch.getAll("q");
    const [search, setSearch] = useState(searchQuery);

    const handleLogout = async () => {
        const fetchData = await fetch(SummaryApi.logout_user.url, {
            method: SummaryApi.logout_user.method,
            credentials: 'include'
        });

        const data = await fetchData.json();

        if (data.success) {
            toast.success(data.message);
            dispatch(setUserDetails(null));
            navigate("/");
        }

        if (data.error) {
            toast.error(data.message);
        }
    };

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearch(value);

        if (value) {
            navigate(`/search?q=${value}`);
        } else {
            navigate("/search");
        }
    };

    return (
        <header className='h-16 shadow-md bg-white fixed w-full z-40'>
            <div className='h-full container mx-auto flex items-center px-4 justify-between'>
                <div>
                    <Link to={"/"}>
                        <img src="/72884415745123.562966332fc38.png" alt="Logo" width={90} height={50} />
                    </Link>
                </div>

                <div className='hidden lg:flex items-center w-full justify-between max-w-sm border border-gray-300 rounded-full focus-within:shadow-lg transition-shadow duration-300'>
                    <input
                        type='text'
                        placeholder='Search products...'
                        className='w-full outline-none px-4 py-2 rounded-l-full'
                        onChange={handleSearch}
                        value={search}
                    />
                    <div className='text-lg min-w-[50px] h-10 bg-green-600 flex items-center justify-center rounded-r-full text-white cursor-pointer hover:bg-green-700 transition-colors duration-300'>
                        <GrSearch />
                    </div>
                </div>

                <div className='flex items-center gap-7'>
                    <div className='relative flex justify-center'>
                        {user?._id && (
                            <div className='text-3xl cursor-pointer relative flex justify-center' onClick={() => setMenuDisplay(prev => !prev)}>
                                {user?.profilePic ? (
                                    <img src={user?.profilePic} className='w-10 h-10 rounded-full border-2 border-gray-300' alt={user?.name} />
                                ) : (
                                    <FaRegCircleUser  className='text-gray-600' />
                                )}
                            </div>
                        )}

                        {menuDisplay && (
                            <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded-md'>
                                <nav>
                                    {user?.role === ROLE.ADMIN && (
                                        <Link to={"/admin-panel/all-products"} className='whitespace-nowrap block hover:bg-slate-100 p-2 rounded-md transition-colors duration-200' onClick={() => setMenuDisplay(prev => !prev)}>
                                            Admin Panel
                                        </Link>
                                    )}
                                </nav>
                            </div>
                        )}
                    </div>

                    {user?._id && (
                        <Link to={"/cart"} className='text-2xl relative'>
                            <span><FaShoppingCart /></span>
                            <div className='bg-green-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                                <p className='text-sm'>{context?.cartProductCount}</p>
                            </div>
                        </Link>
                    )}

                    <div>
                        {user?._id ? (
                            <button onClick={handleLogout} className='px-4 py-2 rounded text-white bg-green-600 hover:bg-green-700 transition-colors duration-300'>Logout</button>
                        ) : (
                            <Link to={"/login"} className='px-4 py-2 rounded text-white bg-green-600 hover:bg-green-700 transition-colors duration-300'>Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;