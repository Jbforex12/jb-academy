import logo from "../../assets/jb-academy-logo.png";

export function Logo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "small" | "default" | "large";
}) {
  const height = {
    small: "h-8",
    default: "h-10",
    large: "h-14",
  };

  return (
    <img
      src={logo}
      alt="JB Academy"
      className={`${height[size]} w-auto object-contain select-none ${className}`}
    />
  );
}
