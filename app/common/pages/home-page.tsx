import { TaskCard } from "~/features/boards/components/task-card";
import {
  DragDropContext,
  Draggable,
  Droppable,
  type DropResult,
} from "@hello-pangea/dnd";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Ellipsis, ReceiptTurkishLiraIcon } from "lucide-react";
import { create } from "zustand";

const TASK_LABEL = "기본 레이아웃 만들기";

const singleTask = Array.from({ length: 1 }, (_, idx) => ({
  id: String(idx),
  label: TASK_LABEL,
}));

const tasks = Array.from({ length: 3 }, (_, idx) => ({
  id: String(idx),
  label: TASK_LABEL + idx,
}));

export default function homePage() {
  const useCardItems = create((set) => {
    cardItems: tasks;
  });
  const onDragEnd = () => {};
  return (
    <div className="flex flex-col bg-[url('https://d2k1ftgv7pobq7.cloudfront.net/images/backgrounds/gradients/rainbow.svg')] w-full h-full rounded-4xl">
      <nav className="bg-[#684B95] p-6 rounded-t-4xl">
        <h1 className="text-white font-bold text-xl">My Trello board</h1>
      </nav>
      {/* 카드 칼럼 */}
      {/* <section className="flex gap-2 p-6 overflow-x-auto">
        <TaskCard title="To Do :)" tasks={singleTask} bgColor="bg-[#EED7FD]" />
        <TaskCard title="Doing :)" tasks={tasks} bgColor="bg-[#F5E989]" />
        <TaskCard title="Done :)" tasks={tasks} bgColor="bg-[#BAF3DB]" />
        <TaskCard title="Archive :)" tasks={tasks} bgColor="bg-[#F1F2F4]" />
      </section> */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Card
          className={`space-y-5 rounded-xl bg-[#EED7FD] h-fit max-h-full w-[284px]`}
        >
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>To do</CardTitle>
              <Button variant="ghost" className="cursor-pointer">
                <Ellipsis />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 overflow-x-auto">
            <Droppable droppableId="one">
              {(magic) => (
                <div ref={magic.innerRef} {...magic.droppableProps}>
                  {tasks.map((task, index) => (
                    <Draggable
                      draggableId={task.id}
                      key={task.id}
                      index={index}
                    >
                      {(magic) => (
                        <div
                          className="bg-white rounded-lg flex items-center justify-between p-2"
                          ref={magic.innerRef}
                          {...magic.dragHandleProps}
                          {...magic.draggableProps}
                        >
                          {task.label}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {magic.placeholder}
                </div>
              )}
            </Droppable>
          </CardContent>
        </Card>
      </DragDropContext>
    </div>
  );
}
