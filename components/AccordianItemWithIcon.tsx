import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/motion-primitives/accordion";
import { ChevronRight } from "lucide-react";

export type AccordianItemWithIconProps = {
  value: React.Key;
  title: string;
  children: React.ReactNode;
};

export function AccordianItemWithIcon({
  value,
  title,
  children
}: AccordianItemWithIconProps) {
  return (
    <AccordionItem value={value} className="py-2">
      <AccordionTrigger
        className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50"
      >
        <div className="flex items-center">
          <ChevronRight
            className="h-4 w-4 text-zinc-950 transition-transform duration-200
              group-data-expanded:rotate-90 dark:text-zinc-50"
          />
          <div className="ml-2 text-zinc-950 dark:text-zinc-50 font-semibold">
            {title}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="origin-left">{children}</AccordionContent>
    </AccordionItem>
  );
}
