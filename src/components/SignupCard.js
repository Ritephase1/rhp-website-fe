export default function SignupCard() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center bg-cover  bg-center"
      style={{ backgroundImage: "url('/images/signup.jpeg')" }}
    >
      <h2 className="text-2xl text-b text-[#8B0000] text-center mb-8">
        Make the Smart Move
        <span>Today!</span>
      </h2>

      <p className="text-[#8B0000]">Sign Up Now </p>
    </section>
  );
}
