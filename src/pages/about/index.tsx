import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function About() {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      About works!
    </div>
  )
}

export default About
