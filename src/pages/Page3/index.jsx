const Page3 = () => {
    return (
        <div className="w-full text-gray-900 break-word" id="page-3">
            <p className="text-4xl">My Projects 🔮</p>
            <div class="flex flex-col justify-between w-full">
                <div>
                    <p className="text-xl mt-8">Game Development</p>
                    <div className="text-lg ml-8">
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/phukphoom/monster-adventure">
                                monster-adventure (Desktop Game | C++ พัฒนาโดย Library - SFML)
                            </a>
                        </li>
                    </div>

                    <p className="text-xl mt-8">Web Development</p>
                    <div className="text-lg ml-8">
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/phukphoom/pillplus-hospital-frontend">
                                pillplus-hospital-frontend (Web Development | React.js สำหรับใช้งานในระบบ Pillplus+ ฝั่งโรงพยาบาล)
                            </a>
                        </li>
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/phukphoom/pillplus-pharmacy-frontend">
                                pillplus-pharmacy-frontend (Web Development | React.js สำหรับใช้งานในระบบ Pillplus+ ฝั่งร้านขายยา)
                            </a>
                        </li>
                    </div>
                    <p className="text-xl mt-8">Computer Communication</p>
                    <div className="text-lg ml-8">
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/phukphoom/computer-communication-fm">
                                computer-communication-fm (Computer Communication via FM | การติดต่อสื่อสารข้อมูลผ่านคลื่นวิทยุ FM โดย เทคนิค FM Modulation, 4-FSK Modulation)
                            </a>
                        </li>
                    </div>
                    <p className="text-xl mt-8">Machine Learning</p>
                    <div className="text-lg ml-8">
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/phukphoom/image-classification-xception">
                                image-classification-xception (Image Classification ด้วย Pre Trained Model - Keras.Xception)
                            </a>
                        </li>
                    </div>
                    <p className="text-xl mt-8">Blockchain Application Development</p>
                    <div className="text-lg ml-8">
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/phukphoom/sapha-gotchi-propose-validator">
                                sapha-gotchi-propose-validator (Propose Validator Bot | Bot สำหรับ validate propose ของ Sapha Gotchi Contract)
                            </a>
                        </li>
                    </div>
                    <p className="text-xl mt-8">Other</p>
                    <div className="text-lg ml-8">
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/phukphoom/robotic-arm-controller-fpga">
                                robotic-arm-controller-fpga (RoboticArm Controller using FPGA | ระบบควบคุมเเขนกลด้วย FPGA)
                            </a>
                        </li>
                        <li>
                            <a className="underline hover:text-blue-700" href="https://github.com/phukphoom/micro-robot-hardware-controller">
                                micro-robot-hardware-controller (Robot Firmware | C++ สำหรับควบคุมส่วน Hardware ของหุ่นยนต์ uRobot MK-I)
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
