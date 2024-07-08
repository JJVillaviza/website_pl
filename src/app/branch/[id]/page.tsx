"use client";

export default function BranchID({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
