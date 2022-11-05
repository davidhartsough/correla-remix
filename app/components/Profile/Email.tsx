export default function Email({ email }: { email: string }) {
  return (
    <div>
      <p>
        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
          Email
        </a>
      </p>
    </div>
  );
}
