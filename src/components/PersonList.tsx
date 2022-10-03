import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((n, key) => (
        <h2 key={key}>
          {n.first} {n.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
