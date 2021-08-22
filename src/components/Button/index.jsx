const Button = ({ colorScheme = 'gray', disable = false, onClick = () => {}, children }) => {
    return (
        <button
            className={`min-w-max px-6 py-3 rounded-lg transform duration-300 bg-${colorScheme}-200 ${!disable ? `hover:bg-${colorScheme}-300  hover:scale-105` : `hidden`} `}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
