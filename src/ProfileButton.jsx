export function ProfileButton(props) {
  const handleClick = () => {
    window.location.href = `/profile/${props.id}`;
  };

  return (
    <a href="#" onClick={handleClick}>
      Profile
    </a>
  );
}
