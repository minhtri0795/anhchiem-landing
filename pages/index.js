import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Anh Chi Em | Comming soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="container">
          <div className="content">
            <img src="/logo_anhchiem-removebg-preview.png" alt="Anh Chi Em Logo" class="logo" />
            <h1 class="title">Anh Chi Em</h1>
            <h2 class="subtitle">Brothers and Sisters</h2>
            <p class="message">
              We are working hard to bring you the best Vietnamese cuisine. <br/> Our
              website is coming soon. Stay tuned!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
