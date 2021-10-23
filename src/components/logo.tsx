import logoImg from "../resources/images/logo.png";

export const DefaultLogo: React.FC = () => {
  return (
    <>
      <img src={logoImg} className="w-32" />
    </>
  );
};
