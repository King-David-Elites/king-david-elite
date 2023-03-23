import axios from "axios";
import { LocationMarker, Trash } from "heroicons-react";
import React, { Fragment, useCallback, useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TimeAgo from "timeago-react";
import globalApi from "../../../api";
import { useGetUserDetails } from "../../../application/hooks/queryhooks";
import { setConfig } from "../../../infrastructure/api/user/userRequest";
import services from "../../../ioc/services";
import Banner from "../../Banner/Banner";
import MainButton from "../../buttons/MainButton";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import { EachContainer } from "../RealEstate/RealEstate.Style";

const EachCollectible = ({ active }) => {
    const top = useRef(null);
    const data = JSON.parse(localStorage.getItem('collectible'));
    const navigate = useNavigate();

    return (
        <Fragment>
            <Navbar active={4} />
            <EachContainer ref={top}>
                <div className="titles">
                    <h3>{data.name}</h3>
                    <h4>US ${data.price}</h4>
                </div>

                <div className="images">
                    <div className="image1">
                        <img src={data?.img} alt="" />
                    </div>
                    <div className="grid">
                        <img src={data?.img} alt="" />
                        <img src={data?.img} alt="" />
                        <img
                            src={data?.img}
                            alt=""
                            loading="loading..."
                        />
                    </div>
                    <p>
                        Listed <p>just Now</p>
                    </p>

                </div>

                <div className="flex">
                    <div className="details">
                        <h3>Description</h3>
                        <p className="py-[20px] px-0 text-[#696969]">Lorem ipsum dolor sit amet consectetur. Sagittis eget etiam proin ut molestie mi in diam venenatis. Sollicitudin neque id montes orci et tellus. Fames convallis eget et consectetur. Erat ornare ullamcorper nisl condimentum donec congue arcu fermentum semper. Commodo in sagittis nunc risus. Sollicitudin tellus amet neque et enim enim.</p>
                    </div>
                </div>

                <div className="flex md:mt-9 mt-4">
                    <div className="details">
                        <h3>Specification</h3>
                        <div className="flex md:gap-16 gap-10">
                            <div className="flex flex-col gap-2 mt-2">
                                <p className=" text-[#696969]">Model Number</p>
                                <p className=" text-[#696969]">Material</p>
                                <p className=" text-[#696969]">Writing Point</p>
                                <p className=" text-[#696969]">Special Application</p>
                                <p className=" text-[#696969]">Nib Type</p>
                                <p className=" text-[#696969]">Nib Material</p>
                                <p className=" text-[#696969]">Fountain pen’s tip material</p>
                                <p className=" text-[#696969]">Packaging</p>
                                <p className=" text-[#696969]">Origin</p>
                                <p className=" text-[#696969]">Size</p>
                            </div>

                            <div className="flex flex-col gap-2 mt-2">
                                <p className=" text-[#696969]">1234</p>
                                <p className=" text-[#696969]">Metal</p>
                                <p className=" text-[#696969]">0.5mm</p>
                                <p className=" text-[#696969]">Office</p>
                                <p className=" text-[#696969]">Standard Type</p>
                                <p className=" text-[#696969]">Gold</p>
                                <p className=" text-[#696969]">Gold</p>
                                <p className=" text-[#696969]">Loose</p>
                                <p className=" text-[#696969]">you Ping</p>
                                <p className=" text-[#696969]">13.5 cm</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b-2 mt-10 md:mt-20"></div>

                <div className="flex gap-12 mt-10 md:mt-20">
                    <MainButton background='#737373' border='#737373' width='50%' padding='20px' onClick={() => services.toast.success('Added')}>Add to Cart</MainButton>
                    <MainButton width='50%' padding='20px' color="black">Buy Now</MainButton>
                </div>

            </EachContainer>
            <Banner category="Collectibles" />
            <Footer />
        </Fragment>
    );
};

export default EachCollectible;
