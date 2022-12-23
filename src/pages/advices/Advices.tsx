import { GiHealthNormal } from "react-icons/gi";
import Title from "../../components/title/Title";
import { advices } from "../../data/data";
import "./advices.scss";
const Advices = () => {
  return (
    <div className="advices section">
      <div className="container">
        <Title title="نصائح" icon={<GiHealthNormal />} />
        <div className="advices__content flex flex-column g-1">
          {advices.map((advice, index) => (
            <div
              className="advice radius p-2 box-shadow flex g-1 align-center justify-center txt-c white-bg radius "
              key={index}
            >
              <div className="image">
                <img src={advice.image} alt="Advice" />
              </div>
              <div className="information flex flex-column g-1 flex-1">
                <h2 className="cl-bl">{advice.title}</h2>
                <p className="cl-t">{advice.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Advices;
