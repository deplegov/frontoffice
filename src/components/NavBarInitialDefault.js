import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import headerDropdown from "headerDropdown";

function NavBarInitialDefault() {
  const isLogged = !(sessionStorage.getItem("user") === null);

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
        isLogged={isLogged}
        sticky
      />
    </>
  );
}
export default NavBarInitialDefault;
