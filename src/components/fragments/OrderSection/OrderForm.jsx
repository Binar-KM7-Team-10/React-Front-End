import React, { useState } from 'react';
import { CreditCard, ChevronDown, ChevronUp, Plane } from 'lucide-react';
// Note: In a real app, you would import actual images. Here we use placeholders
const CARD_IMAGES = {
  visa: "/api/placeholder/100/40",
  mastercard: "/api/placeholder/100/40",
  amex: "/api/placeholder/100/40",
  paypal: "/api/placeholder/100/40"
};

const PAYMENT_METHODS = {
  GOPAY: 'gopay',
  VIRTUAL_ACCOUNT: 'virtual_account',
  CREDIT_CARD: 'credit_card',
};

const FLIGHT_DATA = {
  bookingCode: '6723y2GHK',
  departure: {
    time: '07:00',
    date: '3 Maret 2023',
    location: 'Soekarno Hatta - Terminal 1A Domestik',
  },
  arrival: {
    time: '11:00',
    date: '3 Maret 2023',
    location: 'Melbourne International Airport',
  },
  flight: {
    airline: 'Jet Air',
    class: 'Economy',
    code: 'JT - 203',
    info: {
      baggage: '20 kg',
      cabinBaggage: '7 kg',
      entertainment: 'In Flight Entertainment',
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

const PaymentForm = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isMethodExpanded, setIsMethodExpanded] = useState({
    [PAYMENT_METHODS.GOPAY]: false,
    [PAYMENT_METHODS.VIRTUAL_ACCOUNT]: false,
    [PAYMENT_METHODS.CREDIT_CARD]: false,
  });
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    cvv: '',
    expiryDate: '',
    gopayNumber: '',
    virtualAccountNumber: '',
  });
  const [errors, setErrors] = useState({});

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
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (selectedPaymentMethod === PAYMENT_METHODS.CREDIT_CARD) {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.cardHolder) newErrors.cardHolder = 'Card holder name is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
    } else if (selectedPaymentMethod === PAYMENT_METHODS.GOPAY) {
      if (!formData.gopayNumber) newErrors.gopayNumber = 'Gopay number is required';
    } else if (selectedPaymentMethod === PAYMENT_METHODS.VIRTUAL_ACCOUNT) {
      if (!formData.virtualAccountNumber) newErrors.virtualAccountNumber = 'Virtual account number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    // Payment submission logic here
    alert('Payment processed successfully!');
  };

  const PaymentMethodButton = ({ method, label }) => (
    <button
      className={`w-full ${
        selectedPaymentMethod === method ? 'bg-purple-600' : 'bg-gray-700'
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
          {/* Payment Form Section */}
          <div className="flex-1 space-y-6 md:w-7/12 w-full">
            <h2 className="text-xl font-bold text-gray-800">Payment Details</h2>
            
            {/* Payment Methods */}
            <div className="space-y-4">
              {/* Gopay */}
              <div className="bg-white rounded-lg shadow">
                <PaymentMethodButton method={PAYMENT_METHODS.GOPAY} label="Gopay" />
                {isMethodExpanded[PAYMENT_METHODS.GOPAY] && (
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
                      />
                      {errors.gopayNumber && (
                        <p className="text-red-500 text-sm">{errors.gopayNumber}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Virtual Account */}
              <div className="bg-white rounded-lg shadow">
                <PaymentMethodButton
                  method={PAYMENT_METHODS.VIRTUAL_ACCOUNT}
                  label="Virtual Account"
                />
                {isMethodExpanded[PAYMENT_METHODS.VIRTUAL_ACCOUNT] && (
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
                      />
                      {errors.virtualAccountNumber && (
                        <p className="text-red-500 text-sm">{errors.virtualAccountNumber}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Credit Card */}
              <div className="bg-white rounded-lg shadow">
                <PaymentMethodButton
                  method={PAYMENT_METHODS.CREDIT_CARD}
                  label="Credit Card"
                />
                {isMethodExpanded[PAYMENT_METHODS.CREDIT_CARD] && (
                  <div className="p-4">
                    <div className="space-y-4">
                      {/* Credit Card Logos */}
                      <div className="flex justify-center items-center gap-4 mb-4">
                        <img 
                          src={CARD_IMAGES.visa}
                          alt="Visa"
                          className="h-8 w-auto object-contain"
                        />
                        <img 
                          src={CARD_IMAGES.mastercard}
                          alt="Mastercard"
                          className="h-8 w-auto object-contain"
                        />
                        <img 
                          src={CARD_IMAGES.amex}
                          alt="American Express"
                          className="h-8 w-auto object-contain"
                        />
                        <img 
                          src={CARD_IMAGES.paypal}
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
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Pay Now
            </button>
          </div>

          {/* Flight Details Section */}
          <div className="md:w-5/12 w-full">
            <div className="bg-white rounded-lg shadow p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold">
                  Booking Code:{' '}
                  <span className="text-purple-600">{FLIGHT_DATA.bookingCode}</span>
                </span>
              </div>

              {/* Departure Details */}
              <div className="border-b pb-4">
                <div className="flex justify-between text-sm">
                  <span className="font-bold">{FLIGHT_DATA.departure.time}</span>
                  <span className="text-purple-600">Departure</span>
                </div>
                <div className="text-sm text-gray-600">{FLIGHT_DATA.departure.date}</div>
                <div className="text-sm">{FLIGHT_DATA.departure.location}</div>
              </div>

              {/* Flight Info */}
              <div className="border-b pb-4">
                <div className="font-bold">
                  {FLIGHT_DATA.flight.airline} - {FLIGHT_DATA.flight.class}
                </div>
                <div className="text-sm">{FLIGHT_DATA.flight.code}</div>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2">
                    <Plane className="text-yellow-500" size={16} />
                    <span className="text-sm font-bold">Flight Info:</span>
                  </div>
                  <ul className="text-sm text-gray-600 ml-6 space-y-1">
                    <li>Baggage: {FLIGHT_DATA.flight.info.baggage}</li>
                    <li>Cabin Baggage: {FLIGHT_DATA.flight.info.cabinBaggage}</li>
                    <li>{FLIGHT_DATA.flight.info.entertainment}</li>
                  </ul>
                </div>
              </div>

              {/* Arrival Details */}
              <div className="border-b pb-4">
                <div className="flex justify-between text-sm">
                  <span className="font-bold">{FLIGHT_DATA.arrival.time}</span>
                  <span className="text-purple-600">Arrival</span>
                </div>
                <div className="text-sm text-gray-600">{FLIGHT_DATA.arrival.date}</div>
                <div className="text-sm">{FLIGHT_DATA.arrival.location}</div>
              </div>

              {/* Price Details */}
              <div className="space-y-2">
                <h3 className="font-bold">Price Details</h3>
                <div className="flex justify-between text-sm">
                  <span>{FLIGHT_DATA.price.adults.count} Adults</span>
                  <span>IDR {FLIGHT_DATA.price.adults.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{FLIGHT_DATA.price.baby.count} Baby</span>
                  <span>IDR {FLIGHT_DATA.price.baby.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>IDR {FLIGHT_DATA.price.tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total</span>
                  <span className="text-purple-600">
                    IDR {(FLIGHT_DATA.price.adults.price + FLIGHT_DATA.price.baby.price + FLIGHT_DATA.price.tax).toLocaleString()}
                  </span>
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