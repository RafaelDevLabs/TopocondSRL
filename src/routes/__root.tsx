import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { ScrollToTopLink } from "../components/common/ScrollToTopLink";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { company, defaultOgImageUrl } from "../data/site";
import appCss from "../styles.css?url";

const manropeStylesheetHref =
  "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina nu a fost găsită</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <div className="mt-6">
          <ScrollToTopLink
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Înapoi la acasă
          </ScrollToTopLink>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Pagina nu s-a putut încărca
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A apărut o problemă. Poți încerca din nou sau te poți întoarce la pagina principală.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Încearcă din nou
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Înapoi la acasă
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Topocond Cadastru — Cadastru, Intabulare și Topografie" },
      {
        name: "description",
        content:
          "Servicii de cadastru, intabulare și topografie în județul Botoșani și zonele limitrofe.",
      },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:site_name", content: "Topocond Cadastru" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: defaultOgImageUrl },
      { property: "og:image:alt", content: company.ogImageAlt },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: "Topocond Cadastru" },
      {
        name: "twitter:description",
        content:
          "Servicii de cadastru, intabulare și topografie în județul Botoșani și zonele limitrofe.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: defaultOgImageUrl },
      { name: "twitter:image:alt", content: company.ogImageAlt },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/site-icon-v3-32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/site-icon-v3-16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon-v3.png", sizes: "180x180" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='${manropeStylesheetHref}';document.head.appendChild(l);}())`,
          }}
        />
        <noscript>
          <link rel="stylesheet" href={manropeStylesheetHref} />
        </noscript>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Sari la conținut
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
