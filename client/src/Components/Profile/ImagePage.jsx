import { HiCamera } from "react-icons/hi";
import { useGetUserDetails } from "../../application/hooks/queryhooks";
import FileBase64 from "react-file-base64";
import { useState } from "react";
import services from "../../ioc/services";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ImagePage = () => {
    const data = useGetUserDetails()
    const [image, setImage] = useState(data.cover);
    const navigate = useNavigate();

    useEffect(() => {
        data.cover = image;
        const userDetails = {
            firstName: data.firstName,
            lastName: data.lastName,
            cover: data.cover,
            about: data.about,
            websiteURL: data.websiteURL,
            facebookURL: data.facebookURL,
            instagramURL: data.instagramURL,
            address: data.address,
            country: data.country,
            city: data.city,
            postalCode: data.postalCode
        };
        services.api.userRequests
            .updateUserProfile(userDetails)
            .then((res) => {
                console.log("res", res)
                setImage(image)
                services.toast.success("Uploaded Successfully")
                navigate("/profile");
            })
            .catch((error) => {
                console.log(error);
                services.toast.error(error)
            });

    });

    return (
        <div className="relative w-[100vw] h-[100vh] flex ">
            <div className="absolute bg-slate-200 text-black right-1 top-1 w-8 h-8 rounded-full flex items-center justify-center">
                <HiCamera className="cursor-pointer" />
                <div className="absolute opacity-0 text-[1px]">
                    <FileBase64 name="cover"
                        defaultValue={image}
                        multiple={false}
                        onDone={(base64) => {
                            setImage(base64)
                        }
                        } />
                </div>
            </div>

            <img
                src={image}
                alt=""
                className="object-cover w-[100%] h-[100%]"
            />
        </div>
    );
}

export default ImagePage;