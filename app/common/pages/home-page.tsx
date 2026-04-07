import { TaskCard } from "~/features/boards/components/task-card";

const TASK_LABEL = "기본 레이아웃 만들기";

const tasks = Array.from({ length: 10 }, (_, idx) => ({
  id: String(idx),
  label: TASK_LABEL,
}));

export default function homePage() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {/* 카드 칼럼 */}
      <TaskCard title="To Do :)" tasks={tasks} />
      <TaskCard title="Doing :)" tasks={tasks} />
      <TaskCard title="Done :)" tasks={tasks} />
      <TaskCard title="Archive :)" tasks={tasks} />
    </div>
  );
}
