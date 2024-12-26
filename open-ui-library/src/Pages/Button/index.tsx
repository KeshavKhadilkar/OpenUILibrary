import { Accordion } from "../../Components/Accordion";
import Button from "../../Components/Button";
import { IButtonType } from "../../Interface/IButton";

export const ButtonUsage: React.FC = () => {
  return (
    <>
    <Button name="Primary Button" type={IButtonType.primary} onClick={() => alert('Primary Button Clicked')} />
    <Button name="Secondary Button" type={IButtonType.secondary} onClick={() => alert('Secondary Button Clicked')} />
    <Button name="Danger Button" type={IButtonType.danger} onClick={() => alert('Danger Button Clicked')} />
    <Button name="Warning Button" type={IButtonType.warning} onClick={() => alert('Warning Button Clicked')} />
    <Button name="Info Button" type={IButtonType.info} onClick={() => alert('Info Button Clicked')} />
    <Button name="Success Button" type={IButtonType.success} onClick={() => alert('Success Button Clicked')} />
    <Button name="Light Button" type={IButtonType.light} onClick={() => alert('Light Button Clicked')} />
    <Button name="Dark Button" type={IButtonType.dark} onClick={() => alert('Dark Button Clicked')} />
    <Button name="Link Button" type={IButtonType.link} onClick={() => alert('Link Button Clicked')} />
    <Button name="Default Button" type={IButtonType.default} onClick={() => alert('Default Button Clicked')} />
    </>
  );
};
