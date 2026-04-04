import { ArchiveIcon, FilePlusIcon, Plus, SquarePenIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function homePage() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {/* 카드 칼럼 */}
      <Card className="space-y-5 p-2 rounded-xl bg-[#EED7FD]">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>To Do :)</CardTitle>
            <Button variant={"ghost"}>menu icon</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {Array.from({ length: 10 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg flex items-center justify-between p-2"
            >
              <input type="radio" />
              <p>기본 레이아웃 만들기</p>
              <div className="flex">
                <ArchiveIcon size={16} />
                <SquarePenIcon size={16} />
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <div className="flex justify-between">
            <Button>
              <Plus />
              Add a card
            </Button>
            <Button>
              <FilePlusIcon />
            </Button>
          </div>
        </CardFooter>
      </Card>
      <div>
        <h1>Doing :)</h1>
        <div className="space-y-5">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <h1>Done :)</h1>
        <div className="space-y-5">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <h1>Archive :)</h1>
        <div className="space-y-5">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
