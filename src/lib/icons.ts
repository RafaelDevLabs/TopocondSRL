import {
  Award,
  BadgeCheck,
  Clock,
  FileCheck2,
  Gauge,
  Handshake,
  Headset,
  Landmark,
  LayoutPanelTop,
  MapPin,
  Ruler,
  Scale,
  ScrollText,
  ShieldCheck,
  Split,
  Star,
  Target,
  Timer,
  Users,
  type LucideIcon,
} from "lucide-react";

import type { ServiceIconName } from "@/data/services";

export const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  cadastru: ScrollText,
  ridicari: Ruler,
  consultanta: Landmark,
  dezmembrari: Split,
  trasari: MapPin,
  planuri: LayoutPanelTop,
};

export const uiIcons: Record<string, LucideIcon> = {
  award: Award,
  badgeCheck: BadgeCheck,
  clock: Clock,
  fileCheck: FileCheck2,
  gauge: Gauge,
  handshake: Handshake,
  headset: Headset,
  mapPin: MapPin,
  scale: Scale,
  shieldCheck: ShieldCheck,
  star: Star,
  target: Target,
  timer: Timer,
  users: Users,
};

export const getUiIcon = (name: string): LucideIcon => uiIcons[name] ?? BadgeCheck;
