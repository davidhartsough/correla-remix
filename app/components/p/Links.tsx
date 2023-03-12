import OutboundLink from "./OutboundLink";

type Link = {
  title: string;
  url: string;
};

export default function Links({ links }: { links: Link[] }) {
  return (
    <div>
      {links.map(({ title, url }) => (
        <OutboundLink key={url} title={title} url={url} />
      ))}
    </div>
  );
}
