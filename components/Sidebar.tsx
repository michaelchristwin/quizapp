interface SideBarProps {
  className?: string;
}

function SideBar({ className }: SideBarProps) {
  return (
    <div
      className={`${className} w-[300px] h-full fixed right-0 top-[66px] rounded-l-[20px] rounded-tl-[20px] rounded-bl-[20px] bg-black p-4 z-[15]`}
    >
      <p>999 shit</p>
    </div>
  );
}

export default SideBar;
