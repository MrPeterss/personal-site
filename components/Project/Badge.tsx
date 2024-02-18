export default function Badge({ children, ...attributes }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...attributes} className="p-2 rounded-md text-sm font-semibold bg-white shadow-lg">
      {children}
    </div>
  );
}