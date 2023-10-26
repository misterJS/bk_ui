import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export function CardPriceComponent(props) {
  return (
    <Card className="mt-6 w-96 cursor-pointer">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          className="object-cover"
          src={props.imageUrl}
          alt={props.imageAlt}
        />
      </CardHeader>
      <CardBody className="text-left">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          <p className="primary-font text-lg">{props.title}</p>
          <p className="primary-font text-sm">{props.price}</p>
        </Typography>
      </CardBody>
    </Card>
  );
}
