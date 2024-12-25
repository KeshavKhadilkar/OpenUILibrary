import { Slider } from "../../Components/Slider";

export const SLiderUsage: React.FC = () => {
  return (
    <>
      <Slider min={0} max={100} currentSelected={80}></Slider>
      <Slider min={0} max={100} currentSelected={50} vertical={true}></Slider>
    </>
  );
};
