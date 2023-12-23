interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps): JSX.Element => {
  return (
    <aside className="h-full w-[40%] bg-[#1e1e1e] border-[#393939] border-r py-4 px-2">
      {children}
    </aside>
  );
};

export { Sidebar };
