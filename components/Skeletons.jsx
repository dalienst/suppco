import { Skeleton } from "./ui/skeleton";

export function TableSkeleton() {    
      const columns = Array.from({ length: 3 }, (_, i) => {
        return (
          <th key={i}>
            <Skeleton className="h-[40px] md:h-[50px] lg:h-[60px] rounded-md"/>
          </th>
        );
      });
    
      const rowColumns = Array.from({ length: 3 }, (_, i) => {
        return (
          <td key={i}>
            <Skeleton className="h-[20px] md:[25px] lg:h-[30px] rounded-md"/>
          </td>
        );
      });
      const rows = Array.from({ length: 4 }, (_, i) => {
        return <tr key={i}>{rowColumns}</tr>;
      });
    
  return (
    <table width="100%">
      <thead>
        <tr>{columns}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export function CardSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 " />
        <Skeleton className="h-4 " />
      </div>
    </div>
  )
}

export function WidgetSkeleton() {
  return (
    <div>
      <Skeleton className="h-[60px] md:h-[125px] w-auto rounded-xl" />
    </div>
  )
}

export function UserSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  )
}

