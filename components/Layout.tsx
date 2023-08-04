import Header from "./Header";
import { ReactElement } from "react";
import NavigationMenu from "./NavigationMenu";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
        <div className="row gx-0">
          <div className="col-2">
              <NavigationMenu />
          </div>
          <div className="col bc-grey">
          {children}
          </div>
        </div>
    </>
  )
}

export default Layout;