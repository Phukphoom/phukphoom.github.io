const Page1 = () => {
    return (
        <div className="w-full text-gray-900" id="page-1">
            <p className="text-4xl">ยินดีต้อนรับเข้าสู่ Github.io 👀</p>
            <div class="flex flex-col-reverse xl:flex-row justify-between w-full">
                <div>
                    <p className="text-xl my-8">ก่อนอื่นขออนุญาต แนะนำตัวกันก่อนครับ </p>
                    <p className="text-lg ml-8">
                        ชื่อ : นายพักตร์ภูมิ ตาแพร่ (ภูมิ)
                        <br />
                        กำลังศึกษา : คณะวิศวะกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ @KMITL
                    </p>
                    <div className="flex flex-col justify-center items-center mt-8 text-lg">
                        <p>✨ ความสนใจ ✨</p>
                        <p>💻 Web Development </p>
                        <p>📦 Blockchain Technology</p>
                    </div>
                </div>
                <div className="flex justify-center min-w-max mt-8">
                    <img className="h-64 w-64 object-cover rounded-full" src="./images/phukphoom.jpg" alt="phukphoom" />
                </div>
            </div>
        </div>
    );
};

export default Page1;
