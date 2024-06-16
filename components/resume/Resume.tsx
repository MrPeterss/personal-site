import { useEffect } from "react";
import { unstable_noStore as noStore } from 'next/cache'

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

  // REAL = 7f53355dfd7e4c0c967c2e9914bfe4c0
  // LOCAL_HOST = e4a2c7b3dcdc446d9e479b9ea1e33f76

  const initAdobeViewSDK = () => {
    document.addEventListener("adobe_dc_view_sdk.ready", function() {
      var adobeDCView = new AdobeDC.View({clientId: process.env.ADOBE_KEY, divId: "adobe-dc-view"});
      adobeDCView.previewFile({
        content: {location: {url: "/Peter Bidoshi Resume.pdf"}},
        metaData: {fileName: "Peter Bidoshi's Resume June 2024.pdf"},
      }, { embedMode: "FULL_WINDOW", defaultViewMode: "FIT_PAGE", showDownloadPDF: true });
    });
  };

  return (
    <div id="adobe-dc-view" className="h-screen"></div>
  );
}