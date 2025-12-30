import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LensSelectionModal from "./LensSelectionModal";

export default function ProductDescription() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [openLensModal, setOpenLensModal] = useState(false);
    const [showPackage, setShowPackage] = useState(null);
    const [loading, setLoading] = useState(false);

    const openPackageWithLoader = (type) => {
        setLoading(true);
        setShowPackage(type);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        fetch(`http://localhost:3000/lenskart/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });
    }, [id]);

    if (!product)
        return <div className="p-10 text-center text-lg">Loading...</div>;

    return (
        <>
            {/* MAIN WRAPPER */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 px-4 md:px-16 py-10">

                {/* LEFT IMAGES */}
                <div className="w-full md:w-3/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <img
                            src={product.images?.front}
                            alt=""
                            className="w-full bg-white p-4 border rounded-xl"
                        />
                        <img
                            src={product.images?.side}
                            alt=""
                            className="w-full bg-white p-4 border rounded-xl"
                        />
                    </div>
                </div>

                {/* RIGHT DETAILS */}
                <div className="w-full md:w-2/5 pr-0 md:pr-10">
                    <h3 className="text-gray-500 font-semibold text-sm mb-1">
                        {product.brand}
                    </h3>

                    <h1 className="text-xl font-semibold text-gray-800 mb-1">
                        {product.name}
                    </h1>

                    <p className="text-gray-600 font-bold text-base mb-2">
                        Size : <span>{product.size}</span>
                    </p>

                    <div className="mt-2">
                        <span className="line-through text-gray-500 mr-2">
                            ₹{product.originalPrice}
                        </span>
                        <span className="text-teal-500 font-semibold">
                            ({product.discount})
                        </span>
                    </div>

                    <p className="text-3xl font-extrabold text-[#000042] mt-2">
                        ₹{product.price}
                    </p>

                    <p className="text-sm text-gray-600 mt-1">Frame + Lens</p>

                    {/* SELECT LENSES BUTTON */}
                    <button
                        className="w-full bg-teal-300 text-black font-semibold py-4 rounded-lg text-lg mt-6 border border-teal-400"
                        onClick={() => setOpenLensModal(true)}
                    >
                        SELECT LENSES
                    </button>

                    {/* TRY ON BUTTON */}
                    <button className="w-full h-[55px] border border-gray-300 rounded-md flex items-center justify-between px-4 mt-4 font-semibold text-sm">
                        <span>Try On</span>
                        <img
                            src="https://static.lenskart.com/media/desktop/img/pdp/try_on_model.png"
                            alt=""
                            className="h-10"
                        />
                    </button>

                    {/* TECHNICAL INFO */}
                    <div className="bg-gray-50 p-5 mt-6 rounded-lg border">
                        <h3 className="text-lg font-semibold mb-3">Technical Information</h3>

                        <p>
                            <b>Product ID:</b> {product.id}
                        </p>
                        <p>
                            <b>Model No:</b> {product.sku}
                        </p>
                        <p>
                            <b>Frame Size:</b> {product.size}
                        </p>
                        <p>
                            <b>Frame Weight:</b> {product.features.frameWeight_g}g
                        </p>
                        <p>
                            <b>Color:</b> {product.color}
                        </p>
                    </div>
                </div>
            </div>

            <LensSelectionModal
                open={openLensModal}
                onClose={() => setOpenLensModal(false)}
                product={product}
                showPackage={showPackage}
                setShowPackage={openPackageWithLoader}
                loading={loading}
            />
        </>
    );
}
