import { Link } from "@tanstack/react-router";

interface CategoryItemProps {
    title: string;
    image: string;
    slug: string;
}

export const CategoryItem = ({ title, image, slug }: CategoryItemProps) => {
  return (
    <div
      className="relative h-full w-full text-white font-bold text-3xl rounded-lg overflow-hidden group"
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-125"
      />
      <Link
        to={`/a/organizer/$categoryId`}
        params={{
          categoryId: slug
        }}
        className="relative z-10 flex items-center justify-center h-full w-full bg-slate-700/40 hover:bg-transparent transition-all duration-200"
      >
        {title}
      </Link>
    </div>
  )
}
