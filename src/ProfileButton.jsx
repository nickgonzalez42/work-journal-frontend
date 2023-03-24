export function ProfileButton(props) {
  const handleClick = () => {
    window.location.href = `/profile/${props.id}`;
  };

  return (
    <a className="text-light nav-link active" href="#" onClick={handleClick}>
      Profile
    </a>
  );
}
