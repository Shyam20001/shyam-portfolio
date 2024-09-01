import { Head } from "aleph/react";

export default function Index() {
  return (
    <div
      className="w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-red-500"
      style={{
        height: "calc(100vh - 160px)", // Reduced inline styles to just what's necessary
      }}
    >
      <Head>
        <title>Shyam. M</title>
        <meta
          name="description"
          content="Welcome to my portal, Shyam here, an enthusiastic Node.js Developer from India."
        />
      </Head>
      <h1 className="text-4xl font-bold text-white mt-4">
        Welcome to My Portal
      </h1>
      <p className="text-lg text-white text-center mt-2">
        Hi, I'm Shyam, a passionate Node.js Developer from India.
      </p>
    </div>
  );
}
