import React, { useEffect, useState } from "react";

import Head from "next/head";
import { IntlProvider } from "react-intl";
import TopBarProgress from "react-topbar-progress-indicator";
import { useRouter } from "next/dist/client/router";
import AOS from "aos";
import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";


import "../styles/main.scss";

import Loading from "../src/components/Shared/Loading";
const languages = {
  ar: require("../src/content/languages/ar.json"),
  en: require("../src/content/languages/en.json"),
};

function MyApp({ Component, pageProps }) {
  const [Progress, setProgress] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  TopBarProgress.config({
    barThickness: 3,
    barColors: {
      0: "#38003C",
      0.5: "#E90052",
      1.0: "#00f",
    },
  });

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", () => {
      handleStart();
      setProgress(true);
    });
    router.events.on("routeChangeComplete", () => {
      handleComplete();
      setProgress(false);
    });
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  const { locale, defaultLocale } = useRouter();
  const messages = languages[locale];
  const dir = locale === "ar" ? "rtl" : "ltr";

  // Direction & AnimationOnScroll
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
    });
    document.documentElement.dir = dir;
    document.body.style.direction = dir;
    document.body.setAttribute("dir", dir);
  }, [dir]);

  return (
    <>
      <Head>
        <title>Glasses | Online Store</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {Progress && <TopBarProgress />}
      <Loading loading={loading} />
      <IntlProvider
        messages={messages}
        defaultLocale={defaultLocale}
        locale={locale}
      >
        <SSRProvider>
          <div className="wrap">
            <Component {...pageProps} />
          </div>
        </SSRProvider>
      </IntlProvider>
    </>
  );
}

export default MyApp;
