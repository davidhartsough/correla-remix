export default function OutboundLink({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  return (
    <p>
      <a href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
    </p>
  );
}
