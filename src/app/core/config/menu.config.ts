import { MenuItem } from "./menu-item.interface";

export const MenuConfiguration: MenuItem[] = [
    { title: "Search", icon: "search" },
    { title: "My posts", icon: "description" },
    { title: "My comments", icon: "forum" },
    { title: "Contacts", icon: "groups" },
    { title: "Logout", icon: "logout", action: 'logout' },
    { title: "Account settings", icon: "settings" },
]