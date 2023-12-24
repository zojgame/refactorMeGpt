interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const IconWrapper = ({ children, className }: IconWrapperProps) => {
  return <div className={`flex gap-3 ${className}`}>{children}</div>;
};

export { IconWrapper };
