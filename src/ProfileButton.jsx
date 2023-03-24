export function ProfileButton(props) {
  const handleClick = () => {
    window.location.href = `/profile/${props.id}`;
  };

  return (
    <a className="nav-link active" href="#" onClick={handleClick}>
      Profile
    </a>
  );
}