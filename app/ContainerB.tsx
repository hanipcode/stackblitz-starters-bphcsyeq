'use client';

export default function ContainerB({
  children,
  hasAccess,
}: {
  children: React.ReactNode;
  hasAccess: boolean;
}) {
  if (!hasAccess) return null;
  return children;
}
