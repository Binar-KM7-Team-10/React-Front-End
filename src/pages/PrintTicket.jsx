import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import Navbar from "../components/fragments/Navbar/Navbar";
import html2canvas from "html2canvas";
import PrintTicket from "../components/fragments/PaymentSection/PrintTicket";
import images from "../assets/Images/logo_new.png";
import { Link } from "react-router-dom";

const PrintTicketPage = () => {
  const ticketRef = useRef();
  const handleDownloadPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a6");
    const canvas = await html2canvas(ticketRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth - 10; 
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const xOffset = (pageWidth - imgWidth) / 2;
    const yOffset = (pageHeight - imgHeight) / 2;

    pdf.addImage(imgData, "PNG", xOffset, yOffset, imgWidth, imgHeight);
    pdf.save("ticket.pdf");
  };

  return (
    <div>
      <Navbar search={true} type={"auth"} />
      <div className="flex flex-col lg:flex-row bg-white shadow-lg overflow-hidden">
        <div className="lg:w-1/2 p-6 bg-gradient-to-r space-y-5 from-purple-600 to-purple-400 text-white flex flex-col justify-center items-center">
          <div className="w-64">
            <img src={images} alt="" />
          </div>
          <p className="text-center mb-6">
            Terima kasih telah menggunakan layanan kami. Pastikan semua informasi di tiket
            sudah benar sebelum dicetak.
          </p>
          <div className="flex gap-5">
            <Link to="/payment-success" className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-purple-100 transition-all">
              KEMBALI
            </Link>
            <button
              onClick={handleDownloadPDF}
              className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-purple-100 transition-all"
            >
              CETAK TIKET
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 bg-gray-50 flex justify-center items-center p-4">
          <div ref={ticketRef} className="w-full max-w-sm">
            <PrintTicket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintTicketPage;
