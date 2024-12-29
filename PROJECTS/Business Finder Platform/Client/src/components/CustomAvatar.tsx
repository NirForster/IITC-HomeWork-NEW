import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar className="w-12 h-12">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
