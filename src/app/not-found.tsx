import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex">
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div className="container  px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium text-[#3781ff]">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Lo sentimos, la página que estás buscando no existe. Aquí hay algunos enlaces útiles:
            </p>

            <div className="flex items-center mt-6 gap-x-3 text-center">
              <Link
                href="/"
                className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#006AFF] rounded-lg shrink-0 sm:w-auto hover:bg-[rgb(0, 74, 178)] ">
                {" "}
                <span>Inicio</span>
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img
              className="w-full max-w-lg lg:mx-auto"
              src="https://merakiui.com/images/components/illustration.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
