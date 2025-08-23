import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/pocket-party-logo-wide.png"
        alt="Pocket Party Logo"
        width={400}
        height={80}
        className="h-8 w-auto md:h-10"
        priority
      />
    </div>
  );
}

export default Logo;
