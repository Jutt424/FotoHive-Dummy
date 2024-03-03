import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BottomBar from "@/components/shared/BottomBar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import TopBar from "@/components/shared/TopBar";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
    return (_jsxs("div", { className: "w-full md:flex", children: [_jsx(TopBar, {}), _jsx(LeftSideBar, {}), _jsx("section", { className: "flex flex-1 h-full", children: _jsx(Outlet, {}) }), _jsx(BottomBar, {})] }));
};
export default RootLayout;
