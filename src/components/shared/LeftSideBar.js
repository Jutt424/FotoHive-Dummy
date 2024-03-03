import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { sidebarLinks } from "@/constants";
import { Button } from "@/components/ui/button";
import { useSignOutAccount } from "@/lib/react-query/queries";
import { useUserContext, INITIAL_USER } from "@/context/AuthContext";
import Loader from "./Loader";
const LeftSidebar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { user, setUser, setIsAuthenticated, isLoading } = useUserContext();
    const { mutate: signOut } = useSignOutAccount();
    const handleSignOut = async (e) => {
        e.preventDefault();
        signOut();
        setIsAuthenticated(false);
        setUser(INITIAL_USER);
        navigate("/sign-in");
    };
    return (_jsxs("nav", { className: "leftsidebar", children: [_jsxs("div", { className: "flex flex-col gap-11", children: [_jsx(Link, { to: "/", className: "flex gap-3 items-center", children: _jsx("img", { src: "/assets/images/logo.png", alt: "logo", width: 170, height: 36 }) }), isLoading || !user.email ? (_jsx("div", { className: "h-14", children: _jsx(Loader, {}) })) : (_jsxs(Link, { to: `/profile/${user.id}`, className: "flex gap-3 items-center", children: [_jsx("img", { src: user.imageUrl || "/assets/icons/profile-placeholder.svg", alt: "profile", className: "h-14 w-14 rounded-full" }), _jsxs("div", { className: "flex flex-col", children: [_jsx("p", { className: "body-bold", children: user.name }), _jsxs("p", { className: "small-regular text-light-3", children: ["@", user.username] })] })] })), _jsx("ul", { className: "flex flex-col gap-6", children: sidebarLinks.map((link) => {
                            const isActive = pathname === link.route;
                            return (_jsx("li", { className: `leftsidebar-link group ${isActive && "bg-primary-500"}`, children: _jsxs(NavLink, { to: link.route, className: "flex gap-4 items-center p-4", children: [_jsx("img", { src: link.imgURL, alt: link.label, className: `group-hover:invert-white ${isActive && "invert-white"}` }), link.label] }) }, link.label));
                        }) })] }), _jsxs(Button, { variant: "ghost", className: "shad-button_ghost", onClick: (e) => handleSignOut(e), children: [_jsx("img", { src: "/assets/icons/logout.svg", alt: "logout" }), _jsx("p", { className: "small-medium lg:base-medium", children: "Logout" })] })] }));
};
export default LeftSidebar;
