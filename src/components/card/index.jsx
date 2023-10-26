import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export function CardComponent(props) {
  return (
    <Card className="mt-6 w-96 cursor-pointer">
      <CardHeader color="blue-gray" className="relative h-56">
        <img className="object-cover" src={props.imageUrl} alt={props.imageAlt} />
      </CardHeader>
      <CardBody className="grid grid-cols-2 gap-1">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          <p className="primary-font">{props.title}</p>
        </Typography>
        <Button size="md" className="primary-button h-fit">Order</Button>
      </CardBody>
    </Card>
  );
}
