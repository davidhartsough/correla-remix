import OutboundLink from "./OutboundLink";

export default function Links({ links }: { links: string[] }) {
  return (
    <div>
      {links.map((url) => (
        <OutboundLink key={url} url={url} />
      ))}
    </div>
  );
}
