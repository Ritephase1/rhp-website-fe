export default function SignupCard() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center bg-cover bg-center p-12"
      style={{
        backgroundImage: "url('/images/signup.jpeg')",
        transform: "scaleX(-1)", // Reverses only the background image
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-red-600 opacity-70 z-[-1]"></div>
      <div style={{ transform: "scaleX(-1)" }}>
        <h2 className="text-2xl text-white font-bold text-center mb-8">
          Make the Smart Move
          <span> Today!</span>
        </h2>

        {/* Sign Up Button */}
        <button className="bg-white text-red-500 px-8 py-3 rounded-full font-bold">
          Sign Up Now
        </button>
      </div>
    </section>
  );
}
