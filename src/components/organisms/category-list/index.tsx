import { Catergory } from "@/api/Catergory/types"
import { CategoryItem } from "@/components/molecules/category-item";

interface CategoryListProps {
    list: Catergory[];
}

export const CategoryList = ({ list }: CategoryListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
      {list.map((category) => (
        <div
          key={category._id}
          className="w-full aspect-video flex items-center justify-center bg-cover bg-center rounded-lg"
        >
          <CategoryItem 
            title={category.name} 
            image={category.image} 
            slug={category.slug}
          />
        </div>
                
      ))}
    </div>
  )
}
