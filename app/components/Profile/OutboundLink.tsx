export default function OutboundLink({ url }: { url: string }) {
  return (
    <p>
      <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
    </p>
  );
}
