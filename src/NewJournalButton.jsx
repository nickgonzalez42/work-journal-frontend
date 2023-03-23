export function NewJournalButton(props) {
  const handleClick = () => {
    window.location.href = `/new/${props.id}`;
  };

  return (
    <a className="nav-link active" href="#" onClick={handleClick}>
      New Journal
    </a>
  );
}
