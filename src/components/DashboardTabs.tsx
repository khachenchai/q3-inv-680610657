import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";
import { Summary, LayoutGrid } from "lucide-react";

export function DashboardTabs() {
  const [dashType, setDashType] = useState<"overview" | "category">("overview");

  return (
    <div className="">
      <div className="flex rounded-lg bg-[#f5f5f5] w-fit mb-2">
        <Button onClick={() => setDashType("overview")}  className={`text-lg text-[#686868] hover:text-black bg-[#f5f5f5] ${dashType === "overview" ? "bg-white" : "bg-[#f5f5f5]"}`}>
          <Summary />
          Overview
        </Button>
        <Button onClick={() => setDashType("category")}  className={`text-lg text-[#686868] hover:text-black bg-[#f5f5f5] ${dashType === "category" ? "bg-white" : "bg-[#f5f5f5]"}`}>
          <LayoutGrid />
          By Category
        </Button>
      </div>

      {dashType === "overview" ? (
        <OverviewCards />
      ) : <CategoryCards />}

    </div>
  );
}
