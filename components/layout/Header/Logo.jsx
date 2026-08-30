import BrandIcon from "../../ui/icons/brand-icon";
import BrandName from "../../ui/icons/brand-name";
export default function Logo() {
    return (
        <>
            <BrandIcon className="lg:hidden block fill-primary min-[1140]:block!" />
            <BrandName className="fill-primary" />
        </>
    );
}
