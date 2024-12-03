type Props = {
  title: string;
  content: string[];
};

export function Row({ title, content }: Props) {
  return (
    <section className="flex justify-between">
      <h2>{title}</h2>
      <div className="space-x-2">
        {content.map((item, index) => (
          <span className="text-end " key={index}>{item}</span>
        ))}
      </div>
    </section>
  );
}
