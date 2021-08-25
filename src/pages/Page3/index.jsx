const Page3 = () => {
    return (
        <div className="w-full text-gray-900 break-word" id="page-3">
            <p className="text-4xl">My Projects 🔮</p>
            <div class="flex flex-col justify-between w-full">
                <div>
                    <p className="text-xl mt-8">Game Development</p>
                    <div className="text-lg ml-8">
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/Phukphoom/Monster_Adventure">
                                Monster Adventure (Desktop Game | C++ พัฒนาโดย Library - SFML)
                            </a>
                        </li>
                    </div>

                    <p className="text-xl mt-8">Web Development</p>
                    <div className="text-lg ml-8">
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/Phukphoom/PillPlus_Hospital-Frontend">
                                PillPlus+ Hospital (Web Development | React.js สำหรับใช้งานในระบบ Pillplus+ ฝั่งโรงพยาบาล)
                            </a>
                        </li>
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/Phukphoom/PillPlus_Pharmacy-Frontend">
                                PillPlus+ Pharmacy (Web Development | React.js สำหรับใช้งานในระบบ Pillplus+ ฝั่งร้านขายยา)
                            </a>
                        </li>
                    </div>
                    <p className="text-xl mt-8">Computer Communication</p>
                    <div className="text-lg ml-8">
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/Phukphoom/ComputerCommunication_FM">
                                ComputerCommunication_FM (Computer Communication via FM | การติดต่อสื่อสารข้อมูลผ่านคลื่นวิทยุ FM โดย เทคนิค FM Modulation, 4-FSK Modulation)
                            </a>
                        </li>
                    </div>
                    <p className="text-xl mt-8">Machine Learning</p>
                    <div className="text-lg ml-8">
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/Phukphoom/ImageClassification-Xception">
                                ImageClassification-Xception (Image Classification ด้วย Pre Trained Model - Keras.Xception)
                            </a>
                        </li>
                    </div>
                    <p className="text-xl mt-8">Blockchain Application Development</p>
                    <div className="text-lg ml-8">
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/Phukphoom/SaphaGotchi-ProposeValidator">
                                SaphaGotchi-ProposeValidator (Propose Validator Bot | Bot สำหรับ validate propose ของ Sapha Gotchi Contract)
                            </a>
                        </li>
                    </div>
                    <p className="text-xl mt-8">Other</p>
                    <div className="text-lg ml-8">
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/Phukphoom/RoboticArmController_FPGA">
                                RoboticArmController_FPGA (RoboticArm Controller using FPGA | ระบบควบคุมเเขนกลด้วย FPGA)
                            </a>
                        </li>
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/Phukphoom/uRobot-HardwareController">
                                uRobot-HardwareController (Robot Firmware | C++ สำหรับควบคุมส่วน Hardware ของหุ่นยนต์ uRobot MK-I)
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
