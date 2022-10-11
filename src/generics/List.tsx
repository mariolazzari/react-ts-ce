type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

type ItemType = {
  id: number;
  value: string;
};

const List = <T extends ItemType>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List on items</h2>
      {items.map(item => (
        <div key={item.id} onClick={() => onClick(item)}>
          {item.value}
        </div>
      ))}
    </div>
  );
};

export default List;
