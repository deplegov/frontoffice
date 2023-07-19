import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import headerDropdown from "headerDropdown";

function NavBarInitialDefault() {
  return (
    <>
      <DefaultNavbar
        routes={headerDropdown}
        action={{
          type: "internal",
          route: "/pages/Account/Profile",
          label: "Mon compte",
          color: "info",
        }}
        sticky
      />
    </>
  );
}
export default NavBarInitialDefault;
