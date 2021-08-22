const Page4 = () => {
    return (
        <div className="w-full text-gray-900 break-word" id="page-3">
            <p className="text-4xl">ติดต่อ 📞</p>
            <div class="flex flex-col justify-between w-full">
                <div>
                    <p className="text-xl mt-8">📧 Email </p>
                    <p className="text-lg ml-8">phoom0529@gmail.com</p>
                </div>
                <div>
                    <p className="text-xl mt-8">📱 Mobile </p>
                    <p className="text-lg ml-8">09X-XXX-XXXX</p>
                </div>
                <div>
                    <p className="text-xl mt-8">🌐 Github </p>
                    <p className="text-lg ml-8">
                        <a className="underline hover:text-blue-700" href="https://github.com/Phukphoom">
                            Phukphoom
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page4;
