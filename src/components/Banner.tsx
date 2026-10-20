
import HeroImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section id="home" className="scroll-mt-20 w-full bg-white py-12 md:py-[54px]">
      <div className="container mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex min-h-[238px] flex-col items-center justify-between gap-8 md:flex-row md:gap-12">

          {/* Left Content */}
          <div className="w-full flex-1">
            <h1
              className="text-3xl font-extrabold leading-[1.05] tracking-tight text-[#111827] sm:text-4xl md:text-[60px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Build Your Ideal
              <span className="brand-gradient block bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p
              className="mt-4 max-w-[520px] text-lg leading-[26px] font-normal text-[#475569]"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Explore frontend, backend, database, and tooling options.
              Compare them side by side, and put together the stack that fits
              your next project.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <a
                href="#technologies"
                className="brand-gradient rounded-md px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-md border border-[#E2E8F0] px-4 py-3 text-sm font-normal text-[#475569] transition-colors hover:bg-gray-50"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex w-full flex-1 justify-center md:w-auto">
            <img
              src={HeroImage}
              alt="Development technology stack"
              className="block h-auto w-full max-w-[350px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
