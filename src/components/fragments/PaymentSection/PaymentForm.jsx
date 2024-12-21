import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CreditCard, ChevronDown, ChevronUp, Plane } from 'lucide-react';
import { useGetBookingByBookCode, useCreatePaymentBooking } from '../../../hooks/useBooking';
import DetailPenerbanganPayment from '../OrderCards/DetailPenerbanganPayment';
import AlertCheckout from "../../elements/Alert/AlertCheckout";
import visa from "../../../assets/Images/visaLogo.png";
import mastercard from "../../../assets/Images/mastercardLogo.png";
import amex from "../../../assets/Images/amexLogo.png";
import paypal from "../../../assets/Images/paypalLogo.png";
import { use } from 'react';

const PaymentForm = () => {
  const { bookCode } = useParams();
  const navigate = useNavigate()
  const { dataBooking, loading, error } = useGetBookingByBookCode(bookCode);
  const { createPayment, loadingPayment, errorPayment, successPayment } = useCreatePaymentBooking();
  const [param, setParam] = useState({});
  const [alertSubmit, setAlertSubmit] = useState({
    status: "",
    message: ""
  });

  const paymentMethod = {
    GOPAY: 'Gopay',
    VIRTUAL_ACCOUNT: 'Virtual Account',
    CREDIT_CARD: 'Credit Card',
  };
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isMethodExpanded, setIsMethodExpanded] = useState({
    [paymentMethod.GOPAY]: false,
    [paymentMethod.VIRTUAL_ACCOUNT]: false,
    [paymentMethod.CREDIT_CARD]: false,
  });

  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    cvv: '',
    expiryDate: '',
    gopayNumber: '',
    virtualAccountNumber: '',
  });
  const [disabledFields, setDisabledFields] = useState({
    gopayNumber: false,
    virtualAccountNumber: false,
    cardNumber: false,
    cardHolder: false,
    cvv: false,
    expiryDate: false,
  });
  const [errors, setErrors] = useState({});

  const handlePaymentMethodClick = (method) => {
    if (selectedPaymentMethod != method) {
      setFormData({
        ardNumber: '',
        cardHolder: '',
        cvv: '',
        expiryDate: '',
        gopayNumber: '',
        virtualAccountNumber: ''
      })
      setDisabledFields({
        gopayNumber: false,
        virtualAccountNumber: false,
        cardNumber: false,
        cardHolder: false,
        cvv: false,
        expiryDate: false,
      })
    }
    setSelectedPaymentMethod(method);
    setIsMethodExpanded((prev) => ({
      ...prev,
      [method]: !prev[method],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, disableb } = e.target;

    if (name == "gopayNumber" && value != "") {
      setDisabledFields({
        gopayNumber: false,
        virtualAccountNumber: true,
        cardNumber: true,
        cardHolder: true,
        cvv: true,
        expiryDate: true,
      });
    }
    else if (name == "virtualAccountNumber" && value != "") {
      setDisabledFields({
        gopayNumber: true,
        virtualAccountNumber: false,
        cardNumber: true,
        cardHolder: true,
        cvv: true,
        expiryDate: true,
      });
    }
    else if (['cardNumber', 'cardHolder', 'cvv', 'expiryDate'].includes(name) && value !== '') {
      setDisabledFields((prev) => ({
        gopayNumber: true,
        virtualAccountNumber: true,
        cardNumber: name === 'cardNumber' ? false : prev.cardNumber,
        cardHolder: name === 'cardHolder' ? false : prev.cardHolder,
        cvv: name === 'cvv' ? false : prev.cvv,
        expiryDate: name === 'expiryDate' ? false : prev.expiryDate,
      }));
    }
    else {
      setDisabledFields({
        gopayNumber: false,
        virtualAccountNumber: false,
        cardNumber: false,
        cardHolder: false,
        cvv: false,
        expiryDate: false,
      });
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (selectedPaymentMethod === paymentMethod.CREDIT_CARD) {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.cardHolder) newErrors.cardHolder = 'Card holder name is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
    } else if (selectedPaymentMethod === paymentMethod.GOPAY) {
      if (!formData.gopayNumber) newErrors.gopayNumber = 'Gopay number is required';
    } else if (selectedPaymentMethod === paymentMethod.VIRTUAL_ACCOUNT) {
      if (!formData.virtualAccountNumber) newErrors.virtualAccountNumber = 'Virtual account number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;

      let paymentParam = {};

      if (selectedPaymentMethod === paymentMethod.GOPAY) {
        paymentParam = {
          method: paymentMethod.GOPAY,
          accountNumber: formData.gopayNumber,
        };
      } else if (selectedPaymentMethod === paymentMethod.VIRTUAL_ACCOUNT) {
        paymentParam = {
          method: paymentMethod.VIRTUAL_ACCOUNT,
          accountNumber: formData.virtualAccountNumber,
        };
      } else if (selectedPaymentMethod === paymentMethod.CREDIT_CARD) {
        paymentParam = {
          method: paymentMethod.CREDIT_CARD,
          accountNumber: formData.cardNumber,
          holderName: formData.cardHolder,
          CVV: formData.cvv,
          expiryDate: formData.expiryDate,
        };
      } else {
        setAlertSubmit({
          status: "error",
          message: "Metode pembayaran tidak valid.",
        });
        return;
      }

      console.log(paymentParam)
      const result = await createPayment(dataBooking.bookingId, paymentParam);

      if (result.success) {
        setAlertSubmit({
          status: "success",
          message: result.message
        })
        setTimeout(() => {
          navigate(`/payment-success/${bookCode}`);
        }, 2000);
      }
      else {
        setAlertSubmit({
          status: "error",
          message: result.message
        })
      }
    }
    catch (err) {
      setAlertSubmit({
        status: "error",
        message: err.message
      })
    }

    // alert('Payment processed successfully!');
  };

  const PaymentMethodButton = ({ method, label }) => (
    <button
      className={`w-full ${selectedPaymentMethod === method ? 'bg-purple-600' : 'bg-gray-700'
        } text-white p-3 rounded-t flex justify-between items-center transition-colors`}
      onClick={() => handlePaymentMethodClick(method)}
    >
      <span className="text-sm md:text-base">{label}</span>
      {isMethodExpanded[method] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-6 w-full flex-col md:flex-row">
          <div className="flex-1 space-y-6 md:w-7/12 w-full">
            <h2 className="text-xl font-bold text-gray-800">Payment Details</h2>
            <div className="space-y-4">

              <div className="bg-white rounded-lg shadow">
                <PaymentMethodButton method={paymentMethod.GOPAY} label="Gopay" />
                {isMethodExpanded[paymentMethod.GOPAY] && (
                  <div className="p-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Gopay Number</label>
                      <input
                        type="text"
                        name="gopayNumber"
                        value={formData.gopayNumber}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="0812xxxxxxx"
                        disabled={disabledFields.gopayNumber}
                      />
                      {errors.gopayNumber && (
                        <p className="text-red-500 text-sm">{errors.gopayNumber}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg shadow">
                <PaymentMethodButton
                  method={paymentMethod.VIRTUAL_ACCOUNT}
                  label="Virtual Account"
                />
                {isMethodExpanded[paymentMethod.VIRTUAL_ACCOUNT] && (
                  <div className="p-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Virtual Account Number
                      </label>
                      <input
                        type="text"
                        name="virtualAccountNumber"
                        value={formData.virtualAccountNumber}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="1234567890"
                        disabled={disabledFields.virtualAccountNumber}
                      />
                      {errors.virtualAccountNumber && (
                        <p className="text-red-500 text-sm">{errors.virtualAccountNumber}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg shadow">
                <PaymentMethodButton
                  method={paymentMethod.CREDIT_CARD}
                  label="Credit Card"
                />
                {isMethodExpanded[paymentMethod.CREDIT_CARD] && (
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex justify-center items-center gap-4 mb-4">
                        <img
                          src={visa}
                          alt="Visa"
                          className="h-8 w-auto object-contain"
                        />
                        <img
                          src={mastercard}
                          alt="Mastercard"
                          className="h-8 w-auto object-contain"
                        />
                        <img
                          src={amex}
                          alt="American Express"
                          className="h-8 w-auto object-contain"
                        />
                        <img
                          src={paypal}
                          alt="PayPal"
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="4480 0000 0000 0000"
                          disabled={disabledFields.cardNumber}
                        />
                        {errors.cardNumber && (
                          <p className="text-red-500 text-sm">{errors.cardNumber}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Card Holder Name
                        </label>
                        <input
                          type="text"
                          name="cardHolder"
                          value={formData.cardHolder}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="John Doe"
                          disabled={disabledFields.cardHolder}
                        />
                        {errors.cardHolder && (
                          <p className="text-red-500 text-sm">{errors.cardHolder}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="000"
                            maxLength="3"
                            disabled={disabledFields.cvv}
                          />
                          {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="MM/YY"
                            disabled={disabledFields.expiryDate}
                          />
                          {errors.expiryDate && (
                            <p className="text-red-500 text-sm">{errors.expiryDate}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-purple-600 text-white mt-3 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              {loadingPayment ? "Loading" : "Bayar"}
            </button>
            {
              alertSubmit.status == "success" && <AlertCheckout type={"success"} text={alertSubmit.message} />
            }
            {
              alertSubmit.status == "error" && <AlertCheckout type={"danger"} text={alertSubmit.message} />
            }
          </div>
          {!loading && Object.keys(dataBooking).length > 0 && (
            <DetailPenerbanganPayment
              bookingData={dataBooking.itinerary.outbound}
              arryPsg={[
                dataBooking.passenger.adult,
                dataBooking.passenger.child,
                dataBooking.passenger.baby
              ]}
              bookingCode={bookCode}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;