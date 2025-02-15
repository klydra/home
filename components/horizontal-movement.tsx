"use client";

import { ContentPages } from "@/content/pages";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function HorizontalMovementProvider() {
  const pathname = usePathname();
  const router = useRouter();
  const page = ContentPages.findIndex((page) =>
    pathname.startsWith(`/${page.id}`)
  );

  useEffect(() => {
    if (page === -1) return;

    function updateSelected(e: KeyboardEvent) {
      switch (e.key) {
        case "ArrowLeft":
          if (page === 0)
            router.push(`/${ContentPages[ContentPages.length - 1].id}`);
          else router.push(`/${ContentPages[page - 1].id}`);
          break;

        case "ArrowRight":
          if (page === ContentPages.length - 1)
            router.push(`/${ContentPages[0].id}`);
          else router.push(`/${ContentPages[page + 1].id}`);
          break;
      }
    }
    window.addEventListener("keydown", updateSelected), false;
    return () => window.removeEventListener("keydown", updateSelected);
  }, [page]);

  return null;
}
