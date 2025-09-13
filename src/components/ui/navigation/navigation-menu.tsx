import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { navigationMenuTriggerStyle } from "./navigation-menu.utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
  // ensure at least 2em spacing between top-level menu items
  "group flex flex-1 list-none items-center justify-center space-x-[2em]",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
  className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
  className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180 stroke-black"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, style, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    // hide content when closed to avoid initial small box; show when open
    className={cn(
  "data-[state=closed]:hidden data-[state=open]:block left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out md:fixed md:left-0 md:top-0 md:w-full md:h-[80vh] md:rounded-none md:shadow-lg md:overflow-auto md:nav-bg-dusty-black",
      className
    )}
    // preserve incoming style
    style={style}
    {...props}
  >
    <div className="mx-auto max-w-7xl px-6 md:grid md:grid-cols-12 md:gap-6 md:items-start">
      {/* left sidebar nav */}
      <div className="md:col-span-3 pt-24">
        <nav className="space-y-4 text-sm font-medium text-muted-foreground">
          {/* level 2 list will be injected in App via NavigationMenuContent children */}
        </nav>
      </div>
      {/* center list */}
      <div className="md:col-span-5 pt-24">
        <div className="space-y-4 text-base text-foreground">
          {/* center list content */}
        </div>
      </div>
      {/* right images */}
      <div className="md:col-span-4 pt-24 flex gap-6">
        {/* placeholder for images/cards */}
      </div>
    </div>
  </NavigationMenuPrimitive.Content>
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, style, ...props }, ref) => (
  <div className={cn("absolute left-0 top-0 flex justify-center w-full z-40")}>
    <NavigationMenuPrimitive.Viewport
      // hide when closed to prevent the small animated box; show when open
      className={cn(
  "data-[state=closed]:hidden data-[state=open]:block origin-top-center relative mt-0 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-none border-0 bg-transparent text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out md:mt-0 md:origin-top-left md:h-[80vh] md:w-full md:rounded-none md:shadow-lg md:nav-bg-dusty-black",
        className
      )}
      // preserve incoming style
      style={style}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(() => {
  // Intentionally render nothing to avoid the small rotated indicator box that flashes
  return null
})
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
