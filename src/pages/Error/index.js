import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export default function Error() {
  const { errorCode } = useParams();
  return (
    <div>
      <Navbar />
      <p>{`${errorCode}. Error occured while fetching the data`}</p>
      <Footer />
    </div>
  );
}
