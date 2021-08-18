import Header from './Header';

const PageLayout = ({ children }) => {
    return (
        <div className="flex flex-col w-full h-screen px-4 sm:px-32 py-8 ">
            <div className="flex z-50">
                <Header title="📚 Phukphoom - Github.io " />
            </div>
            <div className="flex mt-8 px-8">{children}</div>
        </div>
    );
};

export default PageLayout;
