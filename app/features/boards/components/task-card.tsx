import { ArchiveIcon, FilePlusIcon, Plus, SquarePenIcon } from "lucide-react";
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
  menuButtonLabel?: string;
  addCardLabel?: string;
};

export function TaskCard({
  title,
  tasks,
  menuButtonLabel = "menu icon",
  addCardLabel = "Add a card",
}: TaskCardProps) {
  return (
    <Card className="space-y-5 rounded-xl bg-[#EED7FD] h-fit">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <Button variant="ghost">{menuButtonLabel}</Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
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
