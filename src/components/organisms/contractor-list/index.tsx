import { Contractor } from "@/api/Contractor/types"
import { ContractorItem } from "@/components/molecules/contractor-item";

interface ContractorListProps {
    list: Contractor[];
}

export const ContractorList = ({ list }: ContractorListProps) => {
  return (
    <div className="flex flex-col items-center gap-y-3 mt-20">
      {list.map((contractor) => (
        <ContractorItem
          key={contractor.name}
          contractor={contractor}
        />
      ))}
    </div>
  )
}
