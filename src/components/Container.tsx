type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Container</div>;
};

Container.propTypes = {};

export default Container;
