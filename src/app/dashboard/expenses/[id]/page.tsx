interface PageProps {
  params: { id: string };
}

export default async function ExpenseDetailPage({ params }: PageProps) {
  const { id } = params;
  // Fetch expense  from MongoDB
const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
const res = await fetch(`${baseUrl}/api/expense/${id}`);
  const data = await res.json();

  if (!data.success) {
    return <div>Expense not found</div>;
  }

  return (
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
