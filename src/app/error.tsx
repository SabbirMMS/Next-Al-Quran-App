"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 text-center p-4">
      <h2 className="text-4xl font-bold text-destructive">
        Something went wrong!
      </h2>
      <p className="text-muted-foreground">
        {error.message || "An unexpected error occurred"}
      </p>
      <Link
        href="/"
        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Return Home
      </Link>
    </div>
  );
}
