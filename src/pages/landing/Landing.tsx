import { ReactElement } from "react";
import landingImage from "../../assets/images/landing.png";
import { motion } from "framer-motion";
import { GiDandelionFlower } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import "./landing.scss";
import Title from "../../components/title/Title";
const Landing = (): ReactElement => {
  return (
    <div className="landing flex align-center relative">
      <div className="container flex g-2 align-center justify-between g-3 ">
        <div className="landing__image ">
          <img src={landingImage} alt={"landing"} />
        </div>
        <div className="landing__content flex-1 txt-e flex flex-column g-2">
          <Title
            title="أمل لابتسامة أجمل"
            icon={<GiDandelionFlower />}
            color="#fff"
          />
          <p className=" description cl-light-w">
            لأن ابتسامتك حلوة ، و صحتك مهمة ، نحنا حريصين لتحافظ عليهن و تحميهن،
            من خلال تطبيقنا لح تكون قادر تحجز دور لفحص و معالجة أسنانك ، بالمجان
            تماماً ، أو بأسعار رمزية بحسب التشحيص و نوعية العلاج ، و حيتم هالشي
            عن طريق طلاب طب الأسنان و تحت إشراف أطباء مختصين بكل تأكيد ، شو
            منتظر ؟
          </p>
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
            className="button cl-w main-bg w-fit txt-e flex g-1 align-center"
          >
            <div className="icon">
              <ImProfile />
            </div>
            سجل معلوماتك
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
