import Title from "../../components/title/Title";
import { BsFillInfoCircleFill } from "react-icons/bs";
import "./info.scss";
import image1 from "../../assets/images/info2.svg";
import { FcIdea } from "react-icons/fc";
import { FaProjectDiagram } from "react-icons/fa";
import { skillsInfo } from "../../data/data";
import { nanoid } from "@reduxjs/toolkit";
const Info = () => {
  return (
    <div className="info section">
      <div className="container">
        <Title title="معلومات" icon={<BsFillInfoCircleFill />} />
        <div className="info__content flex flex-column g-2">
          <div className="box flex g-2 align-center">
            <div className="information flex-1 flex align-center flex-column g-1 p-4">
              <Title title="مين نحنا" icon={<FcIdea />} color="#fff" />
              <p className="cl-light-w txt-c">
                نحنا مهندسين بالمقام الأول ، و كون أول صفة بالمهندس هيي القدرة
                على حل المشاكل ، حاولنا حل المشكلة يلي بيواجهها طلاب طب الأسنان
                ليلاقوا مرضى لعيادات الجامعة ، بالمهارات ال بين ايدينا
              </p>
            </div>
            <div className="image">
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="box flex g-2 align-center">
            <div className="skills flex w-35 flex-wrap g-2 centering-content">
              {skillsInfo.map((skill) => (
                <div
                  key={nanoid()}
                  className="circle fs-med cl-w skill centering-content"
                  style={{ backgroundColor: skill.color }}
                >
                  <skill.icon />
                </div>
              ))}
            </div>
            <div className="information flex-1 flex align-center flex-column g-1 p-5 skills-info">
              <Title
                title="شو هي المهارات"
                icon={<FaProjectDiagram />}
                color="#fff"
              />
              <p className="cl-light-w txt-c ">
                مهاراتنا بتتلخص بالقدرة على بناء ويب أبلكيشنز بأحدث أطر العمل
                الموجودة بالعالم و يلي بتساعدنا لعمل بنية احترافية و تفاعلية
                بتصاميم جميلة و مخرجات عمل ممتازة بتأدي المطلوب لحل مشكلة معينة
                أو تقديم خدمة مطلوبة بشكل تقني ، بالإضافة لتقديم نموذج شبكي كامل
                لتنفيذ أي أبلكيشن حسب المعطيات و الريسورسيز المتوفر ببيئة العمل
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
