function Title(props) {
  const Tag = props.tag || 'h1'
  return (
    <Tag>{props.children}</Tag>
  );
}

export default Title;
