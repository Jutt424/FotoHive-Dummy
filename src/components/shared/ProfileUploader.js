import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { convertFileToUrl } from "@/lib/utils";
const ProfileUploader = ({ fieldChange, mediaUrl }) => {
    const [file, setFile] = useState([]);
    const [fileUrl, setFileUrl] = useState(mediaUrl);
    const onDrop = useCallback((acceptedFiles) => {
        setFile(acceptedFiles);
        fieldChange(acceptedFiles);
        setFileUrl(convertFileToUrl(acceptedFiles[0]));
    }, [file]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".png", ".jpeg", ".jpg"],
        },
    });
    return (_jsxs("div", { ...getRootProps(), children: [_jsx("input", { ...getInputProps(), className: "cursor-pointer" }), _jsxs("div", { className: "cursor-pointer flex-center gap-4", children: [_jsx("img", { src: fileUrl || "/assets/icons/profile-placeholder.svg", alt: "image", className: "h-24 w-24 rounded-full object-cover object-top" }), _jsx("p", { className: "text-primary-500 small-regular md:bbase-semibold", children: "Change profile photo" })] })] }));
};
export default ProfileUploader;
