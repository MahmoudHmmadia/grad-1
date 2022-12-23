import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { GiClover } from "react-icons/gi";
import Title from "../../components/title/Title";
import servicesPicture from "../../assets/images/services.svg";
import "./services.scss";
import { services } from "../../data/data";
const Services = () => {
  return (
    <div className="services section">
      <div className="container">
        <Title title="خدمات" icon={<AiTwotoneSetting />} />
        <div className="services__content flex flex-column g-1">
          <div className="box flex g-2 align-center flex-wrap">
            <div className="description w-50 flex flex-column g-2">
              <Title
                title="شو حيقدمو طلبة و أطباء الأسنان للمرضى "
                icon={<GiClover />}
                color="#2dc1e4"
              />
              <p className="cl-t bold txt-c">
                حيقومو بالبداية بتشخيص حالة المريض و تحديد العلاج المناسب لوضعو
                ، و بناءاً على التشخيص حيتم فرز المريض للعيادة المتخصصة بعلاجو
                ضمن الجامعة ، و حيتم العلاج بشكل مجاني تماماً أو بمبقابل مادي
                بسيط على حسب حالة الأسنان و نوع العلاج يلي بتحتاجو ، و حنعرض
                مجموعة من العلاجات ال حيتم توفيرها من قبل طلاب و أطباء الأسنان
              </p>
            </div>
            <div className="image w-40">
              <img src={servicesPicture} alt="Services" />
            </div>
          </div>
          <div className="services__group">
            {services.map((service, index) => (
              <div
                className="service p-2 box-shadow radius flex flex-column g-1 align-center txt-c white-bg"
                key={index}
              >
                <div className="service__image">
                  <img src={service.image} alt="Service" />
                </div>
                <h3 className="service__title cl-m">{service.title}</h3>
                <p className="cl-t fs-x-small bold">{service.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
