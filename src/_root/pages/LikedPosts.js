import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queries";
const LikedPosts = () => {
    const { data: currentUser } = useGetCurrentUser();
    if (!currentUser)
        return (_jsx("div", { className: "flex-center w-full h-full", children: _jsx(Loader, {}) }));
    return (_jsxs(_Fragment, { children: [currentUser.liked.length === 0 && (_jsx("p", { className: "text-light-4", children: "No liked posts" })), _jsx(GridPostList, { posts: currentUser.liked, showStats: false })] }));
};
export default LikedPosts;
