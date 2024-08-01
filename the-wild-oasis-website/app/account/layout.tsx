import { ReactNode } from "react";
import SideNavigation from "../_components/SideNavigation";

const AccountLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
            <SideNavigation />
            <div>{children}</div>
        </div>
    );
};

export default AccountLayout;
