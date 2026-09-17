import { Card, CardContent } from "@/components/ui/card";

export default function ProjectCard({ title, status }) {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
      <CardContent className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="mt-2 text-gray-500">{status}</p>
      </CardContent>
    </Card>
  );
}