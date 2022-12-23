import "./title.scss";
interface props {
  title: string;
  icon: any;
  color?: string;
}
const Title = ({ title, icon, color }: props) => {
  return (
    <h1
      className="fs-large cl-bl cool-title centering-content mb-3 title"
      style={{ color: color }}
    >
      {title}
      <div className="icon cl-m">{icon}</div>
    </h1>
  );
};

export default Title;
