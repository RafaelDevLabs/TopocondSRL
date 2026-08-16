import type { ComponentType } from "react";

import { ServiceDialogContent } from "@/components/services/ServiceDialogContent";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Service } from "@/data/services";

type LazyServiceDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: Service;
  Icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

export default function LazyServiceDialog({
  open,
  onOpenChange,
  service,
  Icon,
}: LazyServiceDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-white p-7 sm:max-w-2xl sm:p-8">
        <DialogHeader className="pb-1">
          <div className="flex min-w-0 items-start gap-3 text-left">
            <span className="grid size-10 shrink-0 place-items-center rounded-md bg-brand-soft text-brand">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <DialogTitle className="text-lg text-brand-dark">{service.title}</DialogTitle>
              <DialogDescription className="mt-2 text-sm leading-relaxed">
                {service.shortDescription}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <ServiceDialogContent service={service} />
      </DialogContent>
    </Dialog>
  );
}
