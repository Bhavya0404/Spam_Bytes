import React, { useEffect, useState } from "react";


const loadScript = (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;
    script.setAttribute("data-payment_button_id", "pl_K7wea8eFkuJENS"); // = "pl_K7wea8eFkuJENS"
    script.async = true;
    script.id = 'script';

    document.getElementById("frm").appendChild(script);
    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };
  });
};
const DonateButton = () => {
  const [btnLoaded, setBtnLoaded] = useState(false);
  const displayBtn = async () => {
    const btn = await loadScript(
      "https://checkout.razorpay.com/v1/payment-button.js"
    );
    if (!btn) {
      alert("Error Occurred!!");
      return;
    }
  };

  useEffect(() => {
    (async () => {
      if (btnLoaded) return;
      else {
        await displayBtn();
        setBtnLoaded(true);
      }
    })();
    return () => document.getElementById('frm').removeChild(document.getElementById('script'))
  }, [btnLoaded]);
  return (
    <div>
      <form id="frm"></form>
    </div>
  );
};

export default DonateButton;
