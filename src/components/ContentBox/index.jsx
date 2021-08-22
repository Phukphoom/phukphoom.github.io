import { useEffect, useState } from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Button from '../Button';

const ContentBox = ({ children }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let element = document.getElementById(`content-${index}`);
        element.classList.add('animate-fade-in');
    }, [index]);

    return (
        <div className={`flex flex-col justify-between w-full h-full`}>
            <div className="flex w-full h-full p-8 bg-gray-300 rounded-lg animate-wiggle-move">
                <div className="w-full h-full" id={`content-${index}`}>
                    {children[index]}
                </div>
            </div>
            <div className="flex flex-row justify-center xl:justify-end space-x-2 my-4">
                <Button
                    colorScheme="gray"
                    disable={index === 0}
                    onClick={() => {
                        if (index > 0) {
                            let element = document.getElementById(`content-${index}`);
                            element.classList.remove('animate-fade-in');
                            setIndex(index - 1);
                        }
                    }}
                >
                    <FaArrowLeft className="text-xl text-gray-700" />
                </Button>
                <Button
                    colorScheme="gray"
                    disable={index === children.length - 1}
                    onClick={() => {
                        if (index < children.length - 1) {
                            let element = document.getElementById(`content-${index}`);
                            element.classList.remove('animate-fade-in');
                            setIndex(index + 1);
                        }
                    }}
                >
                    <FaArrowRight className="text-xl text-gray-700" />
                </Button>
            </div>
        </div>
    );
};
export default ContentBox;
