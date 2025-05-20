"use client";

import { cn } from "@/lib/utils";
import {FileJson2} from "lucide-react";

export default function AppLogoIcon({
  className,
  ...props
}: {
  className?: string;
}) {
  return <FileJson2 className={cn(className)} {...props} />;
}
