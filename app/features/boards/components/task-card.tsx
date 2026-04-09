import {
  ArchiveIcon,
  Ellipsis,
  FilePlusIcon,
  Plus,
  SquarePenIcon,
} from "lucide-react";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Checkbox } from "~/common/components/ui/checkbox";

export type TaskCardItem = {
  id: string;
  label: string;
};

export type TaskCardProps = {
  title: string;
  tasks: TaskCardItem[];
  addCardLabel?: string;
  bgColor: string;
};

export function TaskCard({
  title,
  tasks,
  addCardLabel = "Add a card",
  bgColor,
}: TaskCardProps) {
  return (
    <Card
      className={`space-y-5 rounded-xl ${bgColor} h-fit max-h-full w-[284px]`}
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <Button variant="ghost" className="cursor-pointer">
            <Ellipsis />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 overflow-x-auto">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-lg flex items-center justify-between p-2"
          >
            <Checkbox />
            <p>{task.label}</p>
            <div className="flex">
              <ArchiveIcon size={16} />
              <SquarePenIcon size={16} />
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between">
          <Button variant="ghost" className="cursor-pointer">
            <Plus />
            {addCardLabel}
          </Button>
          <Button variant="ghost" className="cursor-pointer">
            <FilePlusIcon />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
