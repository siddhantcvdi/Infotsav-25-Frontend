import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconTerminal2,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floating-dock";

const SideDock = ({setCurrentSection}: {setCurrentSection: (section: string) => void}) => {
  const links = [
    {
      title: "Technical",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Managerial",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Robotics",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Cultural",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
        orientation="vertical"
        onItemClick={(item: { title: string; icon: React.ReactNode; href: string }) => setCurrentSection(item.title.toLowerCase())}
      />
    </div>
  );
}

export default SideDock