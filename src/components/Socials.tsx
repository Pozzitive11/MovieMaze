import { socials } from "@/config";
import Image from "next/image";
import React, { FC } from "react";

export const Socials: FC = () => {
  return (
    <ul className="flex space-x-4">
      {socials.map(({ src, link, social }) => (
        <li key={link}>
          <a href={link}>
            <Image
              src={src}
              alt={social}
              width={40}
              height={40}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
