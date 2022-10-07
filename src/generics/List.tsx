type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends { id: number; value: string }>({
  items,
  onClick,
}: ListProps<T>) => {
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
