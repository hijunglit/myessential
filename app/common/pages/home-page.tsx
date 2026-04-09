import { TaskCard } from "~/features/boards/components/task-card";

const TASK_LABEL = "기본 레이아웃 만들기";

const singleTask = Array.from({ length: 1 }, (_, idx) => ({
  id: String(idx),
  label: TASK_LABEL,
}));

const tasks = Array.from({ length: 30 }, (_, idx) => ({
  id: String(idx),
  label: TASK_LABEL,
}));

export default function homePage() {
  return (
    <div className="flex flex-col bg-[url('https://d2k1ftgv7pobq7.cloudfront.net/images/backgrounds/gradients/rainbow.svg')] w-full h-full rounded-4xl">
      <nav className="bg-[#684B95] p-6 rounded-t-4xl">
        <h1 className="text-white font-bold">My Trello board</h1>
      </nav>
      {/* 카드 칼럼 */}
      <section className="flex gap-2 p-6 overflow-x-auto">
        <TaskCard title="To Do :)" tasks={singleTask} bgColor="bg-[#EED7FD]" />
        <TaskCard title="Doing :)" tasks={tasks} bgColor="bg-[#F5E989]" />
        <TaskCard title="Done :)" tasks={tasks} bgColor="bg-[#BAF3DB]" />
        <TaskCard title="Archive :)" tasks={tasks} bgColor="bg-[#F1F2F4]" />
      </section>
    </div>
  );
}
