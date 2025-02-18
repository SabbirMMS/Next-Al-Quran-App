import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 text-center">
      <h2 className="text-4xl font-bold">404 - Page Not Found</h2>
      <p className="text-muted-foreground">
        The page you are looking for does not exist or has been moved.
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
