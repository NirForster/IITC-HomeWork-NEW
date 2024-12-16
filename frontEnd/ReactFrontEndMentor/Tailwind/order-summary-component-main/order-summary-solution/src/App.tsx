import heroMobile from "./assets/images/illustration-hero.svg";
import iconMusic from "./assets/images/icon-music.svg";

function App() {
  return (
    <div className="min-h-screen w-screen bg-primary-paleBlue flex items-center justify-center ">
      <main className="w-11/12 rounded-3xl bg-white font-redHat mobile:w-[375px] desktop:w-[450px]">
        <img
          className="rounded-t-3xl"
          src={heroMobile}
          alt="illustration-hero"
        />
        <section className="flex flex-col items-center justify-around text-paragraph font-bold text-neutral-desaturatedBlue m-6 mobile:mx-10 mobile:my-8">
          <h1 className="text-2xl text-neutral-darkBlue font-black mt-4">
            Order Summary
          </h1>
          <p className="text-center leading-relaxed p-2 my-4">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="w-full flex flex-row items-center justify-around bg-neutral-veryPaleBlue rounded-xl px-2 py-4">
            <img src={iconMusic} alt="Music icon" />
            <div className="flex flex-col text-[16]">
              <h3 className="text-neutral-darkBlue font-black">Annual Plan</h3>
              <div className="font-bold">$59.99/year</div>
            </div>
            <span className="text-primary-brightBlue text-sm underline font-black ml-8">
              Change
            </span>
          </div>
          <button className="w-full rounded-xl bg-primary-brightBlue text-neutral-veryPaleBlue font-black py-4 my-6">
            Proceed to Payment
          </button>
          <button className="w-full rounded-xl font-black">Cancel Order</button>
        </section>
      </main>
    </div>
  );
}

export default App;
