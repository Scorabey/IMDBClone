import { AdminMain } from "@/widgets";
import { ListMain } from "@/widgets/admin/list/list-main";

export default function AdminPage() {
    return (
      <div className="w-full h-full flex flex-row justify-between items-start gap-8">
        <AdminMain />
        <ListMain />
      </div>
    );
}