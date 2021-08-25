const Page2 = () => {
    return (
        <div className="w-full text-gray-900 break-word" id="page-2">
            <p className="text-4xl">Technical Skills 🔧</p>
            <div class="flex flex-col justify-between w-full">
                <div>
                    <p className="text-xl mt-8">Frontend Development</p>
                    <p className="text-lg ml-8">
                        <li>React.JS</li>
                        <li>Next.JS</li>
                        <li>Redux</li>
                        <li>TailwindCSS</li>
                    </p>
                </div>
                <div>
                    <p className="text-xl mt-8">Backend Development</p>
                    <p className="text-lg ml-8">
                        <li>Node.JS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                    </p>
                </div>
                <div>
                    <p className="text-xl mt-8">Blockchain Application Development</p>
                    <p className="text-lg ml-8">
                        <li>Solidity</li>
                        <li>Hardhat</li>
                    </p>
                </div>
                <div>
                    <p className="text-xl mt-8">Other</p>
                    <p className="text-lg ml-8">
                        <li>C/C++</li>
                        <li>Java</li>
                        <li>Python</li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page2;
