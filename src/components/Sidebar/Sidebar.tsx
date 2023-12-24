interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps): JSX.Element => {
  return (
    <aside className="h-[calc(100vh-100px)] w-[60%] bg-[#1e1e1e] border-[#393939] border-r py-4 px-6 flex flex-col gap-3">
      {children}
    </aside>
  );
};

export { Sidebar };
