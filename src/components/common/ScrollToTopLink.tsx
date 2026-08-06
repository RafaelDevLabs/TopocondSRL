import { Link, useRouterState } from "@tanstack/react-router";
import type { ComponentProps, MouseEvent } from "react";

type ScrollToTopLinkProps = Omit<ComponentProps<typeof Link>, "to"> & {
  to: string;
};

export function ScrollToTopLink({
  to,
  onClick,
  resetScroll = true,
  ...props
}: ScrollToTopLinkProps) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (typeof to === "string" && pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return <Link to={to} onClick={handleClick} resetScroll={resetScroll} {...props} />;
}
