import Title from "../../components/title/Title";
import { BsCalendarCheckFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMale, FaFemale } from "react-icons/fa";
import { motion } from "framer-motion";
import registerImage from "../../assets/images/register.svg";
import logo from "../../assets/images/logo.png";
import "./register.scss";
const Register = () => {
  const handleBlur = (e: any) => {
    if (e.target.value === "") {
      e.target.parentElement.classList.remove("move");
    } else {
      e.target.parentElement.classList.add("move");
    }
    console.log(e.target.value);
  };
  const handleFocus = (e: any): void => {
    e.target.parentElement.classList.add("move");
  };
  return (
    <div className="register section relative">
      <div className="container">
        <Title title="تسجيل دور" icon={<BsCalendarCheckFill />} />
        <div className="register__content flex g-1 align-center">
          <div className="image w-50">
            <img src={registerImage} alt="Register Page" />
          </div>
          <div className="form  p-4 h-100 flex-1 box-shadow overflow-hidden flex flex-column g-1 relative align-center">
            <div className="form__logo">
              <img src={logo} alt="Logo" />
            </div>
            <form
              action=""
              className="flex flex-column g-2 justify-center relative w-100 "
            >
              <div className="input-container relative">
                <label
                  htmlFor="name"
                  className="bold fs-small absolute input_label cl-t smooth"
                >
                  الاسم الثلاثي
                </label>
                <input
                  className="input-filed w-100  box-shadow"
                  type="text"
                  id="name"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="input-container relative">
                <label
                  htmlFor="age"
                  className="bold fs-small absolute input_label cl-t smooth"
                >
                  العمر
                </label>
                <input
                  className="input-filed w-100  box-shadow"
                  type="text"
                  id="age"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="input-container relative">
                <label
                  htmlFor="job"
                  className="bold fs-small absolute input_label cl-t smooth"
                >
                  المهنة
                </label>
                <input
                  className="input-filed w-100  box-shadow"
                  type="text"
                  id="job"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="input-container relative">
                <label
                  htmlFor="phone_number"
                  className="bold fs-small absolute input_label cl-t smooth"
                >
                  الرقم
                </label>
                <input
                  className="input-filed w-100  box-shadow"
                  type="text"
                  id="phone_number"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="input-container relative">
                <label
                  htmlFor="address"
                  className="bold fs-small absolute input_label cl-t smooth"
                >
                  العنوان
                </label>
                <input
                  className="input-filed w-100  box-shadow"
                  type="text"
                  id="address"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="input-container flex justify-end g-2">
                <div className="content pointer flex g-1">
                  <label
                    htmlFor="female"
                    className="pointer bold cl-b flex align-center"
                  >
                    أنثى
                    <div className="icon flex cl-m fs-med">
                      <FaFemale />
                    </div>
                  </label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    className="pointer gender"
                  />
                </div>
                <div className="content pointer flex g-1">
                  <label
                    htmlFor="male"
                    className="pointer bold cl-b flex align-center"
                  >
                    ذكر
                    <div className="icon flex cl-m fs-med">
                      <FaMale />
                    </div>
                  </label>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    className="pointer gender"
                  />
                </div>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                type="submit"
                className="button blue-bg cl-w centering-content 
                 w-fit "
              >
                <div className="icon fs-med cl-m flex ">
                  <MdEmail />
                </div>
                تسجيل الدور
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
