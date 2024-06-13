import { isSuccessFormRegister } from "@/actions/actions-offers";
import { Message } from "@/components";
import Image from "next/image";
import { redirect } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function SuccessPage(props: Props) {
  const { params } = props;
  const isHaveRegister = await isSuccessFormRegister(params.id);
  if (!isHaveRegister.success) redirect("/");

  const messageSuccess = {
    title: "¡Gracias,",
    body: "Si creemos que encajas con nuestro equipo, te contactaremos. Agradecemos que te hayas tomado el tiempo para aplicar y ser parte de esta transformación digital.",
    name: isHaveRegister?.data?.name || "",
    image: <Image width={250} height={250} src="/welcome.svg" alt="success image" />,
  };

  return (
    <main className="flex min-h-screen max-w flex-col items-center justify-center p-2 md:p-22">
      <Message {...messageSuccess} />
    </main>
  );
}