"use client";

import { contentPages } from "@/content/pages";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function HorizontalMovementProvider() {
  const pathname = usePathname();
  const router = useRouter();
  const page = contentPages.findIndex((page) =>
    pathname.startsWith(`/${page.id}`)
  );

  useEffect(() => {
    if (page === -1) return;

    function updateSelected(e: KeyboardEvent) {
      switch (e.key) {
        case "ArrowLeft":
          if (page === 0)
            router.push(`/${contentPages[contentPages.length - 1].id}`);
          else router.push(`/${contentPages[page - 1].id}`);
          break;

        case "ArrowRight":
          if (page === contentPages.length - 1)
            router.push(`/${contentPages[0].id}`);
          else router.push(`/${contentPages[page + 1].id}`);
          break;
      }
    }
    window.addEventListener("keydown", updateSelected);
    return () => window.removeEventListener("keydown", updateSelected);
  }, [page]);

  return null;
}
