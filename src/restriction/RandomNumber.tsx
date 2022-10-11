type Random = {
  value: number;
};

type Positive = Random & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type Negative = Random & {
  isNegative: boolean;
  isPositive: never;
  isZero?: never;
};

type Zero = Random & {
  isZero: boolean;
  isPositive: never;
  isNegative?: never;
};

type RandomNumberProps = Positive | Negative | Zero;

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "Positive"}
      {isNegative && "Negative"}
      {isZero && "Zero"}
    </div>
  );
};

export default RandomNumber;
