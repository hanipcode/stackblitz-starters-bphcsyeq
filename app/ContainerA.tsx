'use client';
import Hello from './Hello';
import { useState } from 'react';

export default function ContainerA({ hasAccess }: { hasAccess: boolean }) {
  if (!hasAccess) {
    return null;
  }
  return <Hello name="Container A" />;
}
