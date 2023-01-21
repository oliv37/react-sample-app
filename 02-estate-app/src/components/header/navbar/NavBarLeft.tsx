import NavBarLeftDesktop from "./desktop/NavBarLeftDesktop";
import NavBarLeftMobile from "./mobile/NavBarLeftMobile";

export default function NavBarLeft() {
  return (
    <>
      <NavBarLeftMobile />
      <NavBarLeftDesktop />
    </>
  );
}
