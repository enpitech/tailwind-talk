export default function Slide3() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white shadow-md">
      <h1 className="text-9xl font-bold mb-10">What is Tailwind</h1>
      <img
        src="https://tailwindcss.com/_next/static/media/intellisense.c22de782.png"
        alt="Editor Integration"
      />

      {/** black background code example */}
      <code className="bg-black text-white p-4 rounded shadow-md mt-10">
        npm install -D prettier prettier-plugin-tailwindcss
      </code>
    </div>
  );
}
