import React, { useState } from "react";
import "./BuyNowModal.css"; // Custom CSS file

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    // Toggle modal open/close
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* Main Buy Now Button */}
            <button type="button" className="buy-button" onClick={handleOpen}>
                Buy now
            </button>

            {/* Modal */}
            {open && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        {/* Close Button */}
                        <span className="close-button" onClick={handleOpen}>&times;</span>

                        {/* Input: Name */}
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                value={addressInfo.name}
                                onChange={(e) =>
                                    setAddressInfo({
                                        ...addressInfo,
                                        name: e.target.value
                                    })
                                }
                                placeholder="Enter your name"
                                className="input-field"
                            />
                        </div>

                        {/* Input: Address */}
                        <div className="input-group">
                            <input
                                type="text"
                                name="address"
                                value={addressInfo.address}
                                onChange={(e) =>
                                    setAddressInfo({
                                        ...addressInfo,
                                        address: e.target.value
                                    })
                                }
                                placeholder="Enter your address"
                                className="input-field"
                            />
                        </div>

                        {/* Input: Pincode */}
                        <div className="input-group">
                            <input
                                type="number"
                                name="pincode"
                                value={addressInfo.pincode}
                                onChange={(e) =>
                                    setAddressInfo({
                                        ...addressInfo,
                                        pincode: e.target.value
                                    })
                                }
                                placeholder="Enter your pincode"
                                className="input-field"
                            />
                        </div>

                        {/* Input: Mobile Number */}
                        <div className="input-group">
                            <input
                                type="text"
                                name="mobileNumber"
                                value={addressInfo.mobileNumber}
                                onChange={(e) =>
                                    setAddressInfo({
                                        ...addressInfo,
                                        mobileNumber: e.target.value
                                    })
                                }
                                placeholder="Enter your mobile number"
                                className="input-field"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="button"
                            className="submit-button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction(); // Call passed function
                            }}
                        >
                            Buy now
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default BuyNowModal;
