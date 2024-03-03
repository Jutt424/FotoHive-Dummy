import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import { useToast } from "@/components/ui/use-toast";
import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queries";
import { SignupValidation } from "@/lib/validation";
import { useUserContext } from "@/context/AuthContext";
const SignupForm = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
    const form = useForm({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: "",
        },
    });
    // Queries
    const { mutateAsync: createUserAccount, isLoading: isCreatingAccount } = useCreateUserAccount();
    const { mutateAsync: signInAccount, isLoading: isSigningInUser } = useSignInAccount();
    // Handler
    const handleSignup = async (user) => {
        try {
            const newUser = await createUserAccount(user);
            if (!newUser) {
                toast({ title: "Sign up failed. Please try again.", });
                return;
            }
            const session = await signInAccount({
                email: user.email,
                password: user.password,
            });
            if (!session) {
                toast({ title: "Something went wrong. Please login your new account", });
                navigate("/sign-in");
                return;
            }
            const isLoggedIn = await checkAuthUser();
            if (isLoggedIn) {
                form.reset();
                navigate("/");
            }
            else {
                toast({ title: "Login failed. Please try again.", });
                return;
            }
        }
        catch (error) {
            console.log({ error });
        }
    };
    return (_jsx(Form, { ...form, children: _jsxs("div", { className: "sm:w-420 flex-center flex-col", children: [_jsx("img", { className: "sm:w-[250px] w-[200px]", src: "/assets/images/logo.png", alt: "logo" }), _jsx("h2", { className: "h3-bold md:h2-bold sm:mt-[-30px] mt-[-10px] pt-5 sm:pt-12", children: "Create a new account" }), _jsx("p", { className: "text-light-3 small-medium md:base-regular mt-2", children: "To use FotoHive, Please enter your details" }), _jsxs("form", { onSubmit: form.handleSubmit(handleSignup), className: "flex flex-col gap-5 w-full mt-4", children: [_jsx(FormField, { control: form.control, name: "name", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { className: "shad-form_label", children: "Name" }), _jsx(FormControl, { children: _jsx(Input, { type: "text", className: "shad-input", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "username", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { className: "shad-form_label", children: "Username" }), _jsx(FormControl, { children: _jsx(Input, { type: "text", className: "shad-input", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "email", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { className: "shad-form_label", children: "Email" }), _jsx(FormControl, { children: _jsx(Input, { type: "text", className: "shad-input", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "password", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { className: "shad-form_label", children: "Password" }), _jsx(FormControl, { children: _jsx(Input, { type: "password", className: "shad-input", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(Button, { type: "submit", className: "shad-button_primary", children: isCreatingAccount || isSigningInUser || isUserLoading ? (_jsxs("div", { className: "flex-center gap-2", children: [_jsx(Loader, {}), " Loading..."] })) : ("Sign Up") }), _jsxs("p", { className: "text-small-regular text-light-2 text-center mt-2", children: ["Already have an account?", _jsx(Link, { to: "/sign-in", className: "text-primary-500 text-small-semibold ml-1", children: "Log in" })] })] })] }) }));
};
export default SignupForm;
