import { useUserContext } from "../../provider/userProvider";

const Hero = () => {
  const { user } = useUserContext();
  return <div>Hello, {user.name}</div>;
};

export default Hero;
