import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const Container = ({
  children,
  className = "",
  size = "lg",
}: ContainerProps) => {
  const containerClass = `container container--${size} ${className}`.trim();

  return <div className={containerClass}>{children}</div>;
};

export default Container;
