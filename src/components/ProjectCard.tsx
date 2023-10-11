import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  type data = {
    id:number,
    title:String,
    image:any,
    description:any,
}

const ProjectCard = (data:data) => {
  return (
    <div>
      <Card className="max-w-[22rem] overflow-hidden bg-black border-[0.3px] transform hover:rotate-1 transition-transform duration-300" >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={data.image}
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="white">
            {data.title}
          </Typography>
          <Typography variant="lead" color="white" className="mt-3 font-normal">
            Because it&apos;s about motivating the doers. Because I&apos;m here to
            follow my dreams and inspire others.
          </Typography>
      
        </CardBody>
        <CardFooter className="pt-0">
        <Button className="bg-[#FABD13] text-black">View Project</Button>
      </CardFooter>
      </Card>
    </div>
  )
}

export default ProjectCard