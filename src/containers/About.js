import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const About = () => {
    return (
        <div>
            <Header />
            <div className=" container col-md-5">
            <h3>สวัสดีท่านผู้เจริญ</h3>
            <p className="title text-justify mt-4 mb-4">“เราจะมาเรียนธรรมะกระตุกจิตกระชากใจไปด้วยกัน”</p>
            <h4 className="text-sucess">จาก อาจารย์แดง ผู้ตั้งศาสนากระจุกจิตกระชากใจ</h4>
            </div>
            <Footer  company= " Ku " email="Sirawasit.j@ku.th"/>

        </div>
    )
}
export default About;