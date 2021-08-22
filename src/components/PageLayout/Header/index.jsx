import { useState } from 'react';
import nightwind from 'nightwind/helper';

import { FaSun, FaMoon } from 'react-icons/fa';

import Button from '../../Button';

const Header = ({ title }) => {
    const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full space-y-4 sm:space-y-0 ">
            <p className="min-w-max text-3xl text-gray-900 ">{title}</p>
            <Button
                colorScheme="gray"
                onClick={() => {
                    nightwind.toggle();
                    setIsDark(document.documentElement.classList.contains('dark'));
                }}
            >
                {isDark ? <FaMoon className="text-xl text-yellow-400" /> : <FaSun className="text-xl text-yellow-500" />}
            </Button>
        </div>
    );
};

export default Header;
