import { AppBar } from "@mui/material";
import Image from "next/image";
import { ButtonUser } from "@/components";

export const Navbar = () => {
  return (
    <AppBar
      position="relative"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2.1rem",
        height: "3.5rem",
        backgroundColor: "white",
      }}>
      <div className="relative w-20 h-12">
        <Image priority src="https://linktic.com/media/2024/03/logo-footer.svg" alt="Linktic logo" fill />
      </div>
      <ButtonUser />
    </AppBar>
  );
};
