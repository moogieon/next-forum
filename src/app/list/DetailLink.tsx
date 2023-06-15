"use client";
import { useRouter } from "next/navigation";

const DetailLink = ({
  children,
  _id,
}: {
  children: React.ReactNode;
  _id: string;
}) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push(`detail/${_id}`)}>{children}</button>
  );
};

export default DetailLink;
