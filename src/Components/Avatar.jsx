function Avatar(props) {
  const { src, name } = props;
  return (
    <div>
      <img src={src} alt="pic" />
      <h3>{name}</h3>
    </div>
  );
}
export default Avatar;
