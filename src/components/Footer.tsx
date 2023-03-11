import { FC } from "react";
import { Socials } from "./Socials";

export const Footer: FC = () => (
  <footer className="pt-10 pb-10 flex justify-between">
    <p className="text-slate-300">
      Created by Vladyslav Palahin
    </p>
    <Socials />
  </footer>
);
