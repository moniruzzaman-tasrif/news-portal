import Link from "next/link";

export default function NotFound() {
  return (
<div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
  <h2 className="text-4xl font-bold text-gray-900">
    Not Found
  </h2>

  <p className="mt-2 text-gray-500">
    Could not find requested resource
  </p>

  <Link
    href="/"
    className="mt-6 rounded-lg bg-red-700 px-5 py-2.5 font-medium text-white transition hover:bg-red-500"
  >
    Return Home
  </Link>
</div>
  )
}
