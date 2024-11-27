import React, { useState } from "react";
import { CreditCard, ChevronDown, ChevronUp, Plane } from "lucide-react";
import ButtonPayment from "../Button/ButtonPayment";

const FLIGHT_DATA = {
  bookingCode: "6723y2GHK",
  departure: {
    time: "07:00",
    date: "3 Maret 2023",
    location: "Soekarno Hatta - Terminal 1A Domestik",
  },
  arrival: {
    time: "11:00",
    date: "3 Maret 2023",
    location: "Melbourne International Airport",
  },
  flight: {
    airline: "Jet Air",
    class: "Economy",
    code: "JT - 203",
    info: {
      baggage: "20 kg",
      cabinBaggage: "7 kg",
      entertainment: "In Flight Entertainment",
    },
  },
  price: {
    adults: {
      count: 2,
      price: 9550000,
    },
    baby: {
      count: 1,
      price: 0,
    },
    tax: 300000,
  },
};

const PAYMENT_METHODS = {
  GOPAY: "gopay",
  VIRTUAL_ACCOUNT: "virtual_account",
  CREDIT_CARD: "credit_card",
};

const PaymentForm = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isMethodExpanded, setIsMethodExpanded] = useState({
    [PAYMENT_METHODS.GOPAY]: false,
    [PAYMENT_METHODS.VIRTUAL_ACCOUNT]: false,
    [PAYMENT_METHODS.CREDIT_CARD]: false,
  });
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    cvv: "",
    expiryDate: "",
    gopayNumber: "",
    virtualAccountNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePaymentMethodClick = (method) => {
    setSelectedPaymentMethod(method);
    setIsMethodExpanded((prev) => ({
      ...prev,
      [method]: !prev[method],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (selectedPaymentMethod === PAYMENT_METHODS.CREDIT_CARD) {
      if (!formData.cardNumber)
        newErrors.cardNumber = "Card number is required";
      if (!formData.cardHolder)
        newErrors.cardHolder = "Card holder name is required";
      if (!formData.cvv) newErrors.cvv = "CVV is required";
      if (!formData.expiryDate)
        newErrors.expiryDate = "Expiry date is required";
    } else if (selectedPaymentMethod === PAYMENT_METHODS.GOPAY) {
      if (!formData.gopayNumber)
        newErrors.gopayNumber = "Gopay number is required";
    } else if (selectedPaymentMethod === PAYMENT_METHODS.VIRTUAL_ACCOUNT) {
      if (!formData.virtualAccountNumber)
        newErrors.virtualAccountNumber = "Virtual account number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 200));

      const paymentData = {
        method: selectedPaymentMethod,
        bookingCode: FLIGHT_DATA.bookingCode,
        amount: "",
        ...formData,
      };

      console.log("Payment submitted:", paymentData);
      setFormData({
        cardNumber: "",
        cardHolder: "",
        cvv: "",
        expiryDate: "",
        gopayNumber: "",
        virtualAccountNumber: "",
      });
      setSelectedPaymentMethod(null);

      alert("Payment successful!");
    } catch (error) {
      console.error("Payment failed:", error);
      setErrors({ submit: "Payment failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-2 md:p-4 font-sans md:px-40 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex-1">
            <h2 className="font-bold mb-4 text-[20px]">Isi Data Pembayaran</h2>
            <div className="space-y-3">
              <div className="border rounded">
                <button
                  className={`w-full ${selectedPaymentMethod === PAYMENT_METHODS.GOPAY ? "bg-[#7126B5]" : "bg-[#3C3C3C]"} 
                    text-white p-3 rounded flex justify-between items-center transition-colors`}
                  onClick={() =>
                    handlePaymentMethodClick(PAYMENT_METHODS.GOPAY)
                  }
                >
                  <span className="text-md">Gopay</span>
                  {isMethodExpanded[PAYMENT_METHODS.GOPAY] ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {isMethodExpanded[PAYMENT_METHODS.GOPAY] && (
                  <div className="p-4">
                    <div>
                      <label className="block text-sm mb-1">Gopay Number</label>
                      <input
                        type="text"
                        name="gopayNumber"
                        value={formData.gopayNumber}
                        onChange={handleInputChange}
                        className={`w-full p-2 border rounded ${errors.gopayNumber ? "border-red-500" : ""}`}
                        placeholder="0812xxxxxxx"
                      />
                      {errors.gopayNumber && (
                        <span className="text-red-500 text-sm">
                          {errors.gopayNumber}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="border rounded">
                <button
                  className={`w-full ${selectedPaymentMethod === PAYMENT_METHODS.VIRTUAL_ACCOUNT ? "bg-[#7126B5]" : "bg-[#3C3C3C]"} 
                    text-white p-3 rounded flex justify-between items-center transition-colors`}
                  onClick={() =>
                    handlePaymentMethodClick(PAYMENT_METHODS.VIRTUAL_ACCOUNT)
                  }
                >
                  <span className="text-md">Virtual Account</span>
                  {isMethodExpanded[PAYMENT_METHODS.VIRTUAL_ACCOUNT] ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {isMethodExpanded[PAYMENT_METHODS.VIRTUAL_ACCOUNT] && (
                  <div className="p-4">
                    <div>
                      <label className="block text-sm mb-1">
                        Virtual Account Number
                      </label>
                      <input
                        type="text"
                        name="virtualAccountNumber"
                        value={formData.virtualAccountNumber}
                        onChange={handleInputChange}
                        className={`w-full p-2 border rounded ${errors.virtualAccountNumber ? "border-red-500" : ""}`}
                        placeholder="1234567890"
                      />
                      {errors.virtualAccountNumber && (
                        <span className="text-red-500 text-sm">
                          {errors.virtualAccountNumber}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="border rounded">
                <button
                  className={`w-full ${selectedPaymentMethod === PAYMENT_METHODS.CREDIT_CARD ? "bg-[#7126B5]" : "bg-[#3C3C3C]"} 
                    text-white p-3 rounded flex justify-between items-center transition-colors`}
                  onClick={() =>
                    handlePaymentMethodClick(PAYMENT_METHODS.CREDIT_CARD)
                  }
                >
                  <span className="text-md">Credit Card</span>
                  {isMethodExpanded[PAYMENT_METHODS.CREDIT_CARD] ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                {isMethodExpanded[PAYMENT_METHODS.CREDIT_CARD] && (
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm mb-1">
                          Card number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded ${errors.cardNumber ? "border-red-500" : ""}`}
                          placeholder="4480 0000 0000 0000"
                        />
                        {errors.cardNumber && (
                          <span className="text-red-500 text-sm">
                            {errors.cardNumber}
                          </span>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm mb-1">
                          Card holder name
                        </label>
                        <input
                          type="text"
                          name="cardHolder"
                          value={formData.cardHolder}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded ${errors.cardHolder ? "border-red-500" : ""}`}
                          placeholder="John Doe"
                        />
                        {errors.cardHolder && (
                          <span className="text-red-500 text-sm">
                            {errors.cardHolder}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-1/3">
                          <label className="block text-sm mb-1">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className={`w-full p-2 border rounded ${errors.cvv ? "border-red-500" : ""}`}
                            placeholder="000"
                            maxLength="3"
                          />
                          {errors.cvv && (
                            <span className="text-red-500 text-sm">
                              {errors.cvv}
                            </span>
                          )}
                        </div>
                        <div className="w-full sm:w-1/3">
                          <label className="block text-sm mb-1">
                            Expiry date
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            className={`w-full p-2 border rounded ${errors.expiryDate ? "border-red-500" : ""}`}
                            placeholder="07/24"
                          />
                          {errors.expiryDate && (
                            <span className="text-red-500 text-sm">
                              {errors.expiryDate}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div onClick={handleSubmit}>
                <ButtonPayment/>  
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-96">
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Booking Code:</span>
                <span className="text-purple-600 font-semibold">
                  {FLIGHT_DATA.bookingCode}
                </span>
              </div>
              <div className="mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {FLIGHT_DATA.departure.time}
                  </span>
                  <span className="text-purple-600">Keberangkatan</span>
                </div>
                <div className="text-sm">{FLIGHT_DATA.departure.date}</div>
                <div className="font-medium">
                  {FLIGHT_DATA.departure.location}
                </div>
              </div>
              <div className="mb-6">
                <div className="font-medium">
                  {FLIGHT_DATA.flight.airline} - {FLIGHT_DATA.flight.class}
                </div>
                <div className="text-gray-600">{FLIGHT_DATA.flight.code}</div>
                <div className="mt-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Plane size={16} className="text-yellow-500" />
                    <span>Informasi:</span>
                  </div>
                  <ul className="text-sm text-gray-600 ml-6">
                    <li>Baggage {FLIGHT_DATA.flight.info.baggage}</li>
                    <li>
                      Cabin baggage {FLIGHT_DATA.flight.info.cabinBaggage}
                    </li>
                    <li>{FLIGHT_DATA.flight.info.entertainment}</li>
                  </ul>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {FLIGHT_DATA.arrival.time}
                  </span>
                  <span className="text-purple-600">Kedatangan</span>
                </div>
                <div className="text-sm">{FLIGHT_DATA.arrival.date}</div>
                <div className="font-medium">
                  {FLIGHT_DATA.arrival.location}
                </div>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">Rincian Harga</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{FLIGHT_DATA.price.adults.count} Adults</span>
                    <span>
                      IDR {FLIGHT_DATA.price.adults.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{FLIGHT_DATA.price.baby.count} Baby</span>
                    <span>IDR {FLIGHT_DATA.price.baby.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>IDR {FLIGHT_DATA.price.tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-purple-600 pt-2 border-t">
                    <span>Total</span>
                    {/* <span>IDR {calculateTotal().toLocaleString()}</span> */}
                    <span>IDR 9.850.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
