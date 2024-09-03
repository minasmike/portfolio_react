import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center  gap-y-6 gap-x-12   py-4 px-12 text-center justify-center  bg-[#0a192f]">
      <Typography color="blue-gray" className="font-extrabold text-gray-300 ">
        &copy; 2024  Menelik Michael
      </Typography>

      <Typography color="blue-gray" className="font-normal text-gray-300 ">
        All Rights Reserved.
      </Typography>
    </footer>
  );
}