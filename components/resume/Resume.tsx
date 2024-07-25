import { useEffect } from "react";
import { unstable_noStore as noStore } from 'next/cache'

declare global {
  interface Window {
    AdobeDC: any;
  }
}

export default function Resume() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://acrobatservices.adobe.com/view-sdk/viewer.js";
    script.async = true;
    script.onload = () => initAdobeViewSDK();
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initAdobeViewSDK = () => {
    document.addEventListener("adobe_dc_view_sdk.ready", function() {
      var adobeDCView = new window.AdobeDC.View({clientId: process.env.ADOBE_KEY, divId: "adobe-dc-view"});
      adobeDCView.previewFile({
        content: {location: {url: "/Peter Bidoshi Resume.pdf"}},
        metaData: {fileName: "Peter Bidoshi's Resume June 2024.pdf"},
      }, { embedMode: "FULL_WINDOW", defaultViewMode: "FIT_PAGE", showDownloadPDF: true });
    });
  };

  return (
    <div id="adobe-dc-view" className="h-screen" />
  );
}