import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import Link from "next/link";

export const CallNotStartedOrEnded = ({ timeReaming }: { timeReaming?: string }) => {
  return (
    <section className="bg-red flex w-full">
      <div className="container flex items-center  px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <ReportGmailerrorredIcon color="primary" fontSize="large" />
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Lo sentimos</h1>
          {timeReaming ? (
            <>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                {" "}
                Aun la reunion no comienza. Tiempo aproximado para empezar:
              </p>
              <span className="font-bold"> {timeReaming} </span>
            </>
          ) : (
            <p className="mt-4 text-gray-500 dark:text-gray-400"> La reunion ha sido finalizada por el creador</p>
          )}
          <div className="flex justify-center items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
              <Link href={"/"}>Inicio</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
