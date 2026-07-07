import { cn } from "../../lib/utils";

const variants = {
  default: "border-transparent bg-violet-500 text-white hover:bg-violet-500/80",
  secondary: "border-transparent bg-gray-100 text-gray-700 hover:bg-gray-100/80",
  destructive: "border-transparent bg-red-100 text-red-500 hover:bg-red-100/80",
  outline: "text-gray-700 border-gray-200",
  success: "border-transparent bg-green-100 text-green-600 hover:bg-green-100/80",
  warning: "border-transparent bg-amber-100 text-amber-600 hover:bg-amber-100/80",
};

export function Badge({ className, variant = "default", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export function StatusBadge({ status }) {
  const config = {
    Publish: "success",
    Inactive: "destructive",
    Scheduled: "warning",
    Active: "success",
    active: "success",
    inactive: "destructive",
  };

  const label =
    status === "active"
      ? "Publish"
      : status === "inactive"
        ? "Inactive"
        : status;

  return <Badge variant={config[status] ?? "secondary"}>{label}</Badge>;
}
