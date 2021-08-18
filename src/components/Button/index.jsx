const Button = ({ className, colorScheme = 'gray', onClick = () => {}, children }) => {
    return (
        <button
            className={`min-w-max px-6 py-3 rounded-lg bg-${colorScheme}-200 hover:bg-${colorScheme}-300 transform duration-300 hover:scale-105 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
