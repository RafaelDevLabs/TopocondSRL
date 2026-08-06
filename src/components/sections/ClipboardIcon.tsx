import { ClipboardList } from "lucide-react";

import { cn } from "@/lib/utils";

export function ClipboardIcon({ className }: { className?: string }) {
  return <ClipboardList className={cn("size-6", className)} aria-hidden="true" />;
}
