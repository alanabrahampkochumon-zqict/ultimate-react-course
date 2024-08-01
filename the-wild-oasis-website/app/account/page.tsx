import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Guest area",
};

const AccountPage = () => {
    return (
        <h2 className="font-semibold text-2xl text-accent-400 mb-7">
            Welcome, Jonas
        </h2>
    );
};

export default AccountPage;
