// app/blog/page.tsx
import Link from "next/link";

const categories = [
  { id: "plumbing", name: "Plumbing" },
  { id: "carpentry", name: "Carpentry" },
  { id: "painting", name: "Painting" },
  { id: "electrical", name: "Electrical" },
  { id: "cleaning", name: "Cleaning" },
  { id: "general", name: "General" },
];

export default function BlogPage() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories?.map((category) => (
          <Link
            key={category.id}
            href={`/blog/${category.id}`}
            className="group flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-50 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-blue-100 transition-all"
          >
            <div className="w-14 h-14 bg-[#F1F5F9] dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors"></div>
            <span className="text-[13px] font-semibold text-gray-700 dark:text-gray-300">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
