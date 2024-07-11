import PieChart from "@/components/piechart";

export default function Home() {
  return (
    <div className="flex gap-3">
      <div className="flex-1">
        <PieChart />
      </div>
      <div className="flex-1">
        <PieChart />
      </div>
      <div className="flex-1">
        <PieChart />
      </div>
    </div>
  );
}
