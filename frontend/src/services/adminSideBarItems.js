import {
  LayoutDashboard,
  Package,
  FolderTree,
  BadgePercent,
  Images,
  Star,
  ShoppingCart,
  CreditCard,
  Receipt,
  RotateCcw,
  Users,
  Heart,
  MapPin,
  Boxes,
  Truck,
  ClipboardList,
  TicketPercent,
  Megaphone,
  Image,
  Mail,
  FileText,
  Newspaper,
  CircleHelp,
  BarChart3,
  TrendingUp,
  UserRound,
  ShieldCheck,
  ScrollText,
  Store,
  Globe,
  Coins,
  Bell,
  KeyRound,
  Settings,
  User,
  LogOut,
} from "lucide-react";
import { ROUTES } from "../router/routes";

export const NAV_SECTIONS = [
  {
    title: "Main",
    items: [
      {
        label: "Dashboard",
        icon: LayoutDashboard,
        path: ROUTES.ADMIN.DASHBOARD_ADMIN,
      },
    ],
  },

  {
    title: "Catalog",
    items: [
      { label: "Products", icon: Package, path: ROUTES.ADMIN.PRODUCTS_LIST_ADMIN },
      { label: "Categories", icon: FolderTree, path: ROUTES.ADMIN.CATEGORY_LIST_ADMIN },
      { label: "Brands", icon: BadgePercent },
      { label: "Product Images", icon: Images },
      { label: "Reviews", icon: Star },
    ],
  },

  {
    title: "Sales",
    items: [
      { label: "Orders", icon: ShoppingCart },
      { label: "Payments", icon: CreditCard },
      { label: "Invoices", icon: Receipt },
      { label: "Returns", icon: RotateCcw },
    ],
  },

  {
    title: "Customers",
    items: [
      { label: "Customers", icon: Users },
      { label: "Wishlists", icon: Heart },
      { label: "Addresses", icon: MapPin },
    ],
  },

  {
    title: "Inventory",
    items: [
      { label: "Stock", icon: Boxes },
      { label: "Suppliers", icon: Truck },
      { label: "Purchase Orders", icon: ClipboardList },
    ],
  },

  {
    title: "Marketing",
    items: [
      { label: "Coupons", icon: TicketPercent },
      { label: "Promotions", icon: Megaphone },
      { label: "Banners", icon: Image },
      { label: "Newsletter", icon: Mail },
    ],
  },

  {
    title: "Content",
    items: [
      { label: "Pages", icon: FileText },
      { label: "Blog", icon: Newspaper },
      { label: "FAQ", icon: CircleHelp },
    ],
  },

  {
    title: "Analytics",
    items: [
      { label: "Sales Analytics", icon: TrendingUp },
      { label: "Customer Analytics", icon: Users },
      { label: "Product Analytics", icon: BarChart3 },
    ],
  },

  {
    title: "Administration",
    items: [
      { label: "Users", icon: UserRound },
      { label: "Roles & Permissions", icon: ShieldCheck },
      { label: "Activity Logs", icon: ScrollText },
    ],
  },

  {
    title: "Settings",
    items: [
      { label: "Store Settings", icon: Store },
      { label: "Localization", icon: Globe },
      { label: "Currency", icon: Coins },
      { label: "Shipping", icon: Truck },
      { label: "Payment Methods", icon: CreditCard },
      { label: "Email Settings", icon: Mail },
      { label: "Notifications", icon: Bell },
      { label: "API Keys", icon: KeyRound },
    ],
  },

  {
    title: "Account",
    items: [
      { label: "Profile", icon: User },
      { label: "Preferences", icon: Settings },
      { label: "Logout", icon: LogOut },
    ],
  },
];
