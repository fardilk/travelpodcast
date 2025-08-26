import { cva } from "class-variance-authority"

export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      intent: {
        default: "bg-background text-foreground",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
)

// Tailwind classes for open-state can be used on the trigger element as utility classes
