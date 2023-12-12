interface IconWrapperProps {
  children: React.ReactNode;
}

const IconWrapper = ({ children }: IconWrapperProps) => {
  return <div className="flex gap-3">{children}</div>;
};

export { IconWrapper };
