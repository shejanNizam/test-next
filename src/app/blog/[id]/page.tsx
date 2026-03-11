// app/blog/[id]/page.tsx

interface PageProps {
  params: {
    id: string;
  };
}

export default function BlogDetails({ params }: PageProps) {
  console.log(params.id);
  return <h1 className="text-center">Post: {params.id}</h1>;
}
