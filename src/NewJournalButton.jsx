export function NewJournalButton(props) {
  const handleClick = () => {
    window.location.href = `/new/${props.id}`;
  };

  return (
    <a className="text-light nav-link active" href="#" onClick={handleClick}>
      New Journal
    </a>
  );
}
