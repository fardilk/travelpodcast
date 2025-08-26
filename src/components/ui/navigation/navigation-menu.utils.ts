import { cva } from "class-variance-authority"

export const navigationMenuTriggerStyle = cva(
  // base trigger styling; header hover drives color (inherits); active/open -> gold text
  [
    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
    // inherit color so header hover can set white globally
    "text-inherit",
    // subtle individual hover (only text tint) if header itself not hovered yet
    "hover:text-white/90",
    // open state -> gold
    "data-[state=open]:text-gold",
    // transitions & focus ring
    "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40",
    "disabled:pointer-events-none disabled:opacity-50"
  ].join(' '),
  {
    variants: {
      intent: {
        default: "bg-transparent text-inherit",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
)

// Tailwind classes for open-state can be used on the trigger element as utility classes
