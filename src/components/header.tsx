import {
  AreaChart,
  Bell,
  GitBranch,
  History,
  LayoutDashboard,
  Map,
  Package2,
  PanelLeft,
  Settings,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PageLocation from "@/components/pagelocation";
import ProfileDropDown from "@/components/profiledropdown";
import SearchBar from "@/components/searchbar";

export default function Header() {
  const navigationItems = [
    {
      title: "Dashboard",
      link: "/",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Branch",
      link: "/branch",
      icon: <GitBranch className="h-5 w-5" />,
    },
    {
      title: "Notification",
      link: "/notification",
      icon: <Bell className="h-5 w-5" />,
    },
    {
      title: "History",
      link: "/history",
      icon: <History className="h-5 w-5" />,
    },
    {
      title: "Analytics",
      link: "/analytics",
      icon: <AreaChart className="h-5 w-5" />,
    },
    {
      title: "Map",
      link: "/map",
      icon: <Map className="h-5 w-5" />,
    },
    {
      title: "Settings",
      link: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Proxy Lines</span>
            </Link>
            {navigationItems.map((item, index) => (
              <Link
                href={item.link}
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                key={index}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <PageLocation />
      <SearchBar />
      <ProfileDropDown />
    </header>
  );
}
