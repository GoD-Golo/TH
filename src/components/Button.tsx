import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Button({
  children,
  to,
  variant = "default",
  src,
  onClick,
}: {
  children: React.ReactNode;
  to: string;
  variant: string;
  src?: string;
  onClick?: () => void;
}) {
  if (variant === "default") return;

  if (variant === "image-lg")
    return (
      <div className="flex justify-center">
        <Link
          href={`/${to}`}
          className="w-[300px] rounded-xl text-slate-50 duration-500 hover:-translate-y-3"
        >
          <div className="h-[80px] w-[300px] overflow-hidden rounded-2xl border border-amber-300">
            {src ? (
              <Image
                src={src}
                alt="Not found"
                width={300}
                height={80}
                className="z-0"
              />
            ) : null}
            <span className="absolute z-10 w-20 -translate-y-[5.5rem] translate-x-4 text-xl font-bold uppercase">
              {children}
            </span>
          </div>
        </Link>
      </div>
    );

  if (variant === "image-thin")
    return (
      <Link
        href={`/${to}`}
        className="relative rounded-xl px-2 py-1 text-slate-50 duration-500 hover:-translate-y-1"
      >
        <div className="h-[60px] w-[312px] overflow-hidden rounded-2xl border border-amber-300">
          {src ? (
            <Image
              src={src}
              alt="Not found"
              width={312}
              height={60}
              className="z-0"
            />
          ) : null}
          <span className="absolute z-10 w-20 -translate-y-11 translate-x-6 text-xl font-bold uppercase">
            {children}
          </span>
        </div>
      </Link>
    );

  if (variant === "aside")
    return (
      <Link
        href={`/${to}`}
        className="h-10 border-b border-amber-500 p-2 text-center text-slate-50 duration-500 ease-in-out hover:bg-amber-400 hover:text-slate-900"
      >
        {children}
      </Link>
    );

  if (variant === "text") {
    return (
      <Link href={`/${to}`} className=" text-slate-50 hover:text-amber-500 ">
        {children}
      </Link>
    );
  }

  if (variant === "avatar")
    return (
      <div
        onClick={onClick}
        className="mt-1 h-10 w-10 cursor-pointer overflow-hidden rounded-full border-2 border-amber-500 bg-slate-950"
      >
        {src ? (
          <Image
            src={src}
            alt="Not found"
            width={40}
            height={40}
            className="z-0"
          />
        ) : null}
        {children}
      </div>
    );

  if (variant === "navlink")
    return (
      <Link
        href={`/${to}`}
        className="transiton-all rounded-xl px-2 py-1 text-slate-50 duration-500 ease-in-out hover:bg-violet-400 hover:text-slate-900 "
      >
        {children}
      </Link>
    );
}
