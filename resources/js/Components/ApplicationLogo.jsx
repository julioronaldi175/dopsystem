import Logo from "@/Images/logo_DOP.png";
import Logo2 from "@/Images/logo_DOP_no_text.png";
export default function ApplicationLogo({ width, className, noText = true }) {
    return (
        <img
            src={noText ? Logo2 : Logo}
            alt=""
            width={width ?? "64"}
            className={className}
        />
    );
}
