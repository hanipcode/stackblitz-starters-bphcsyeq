import ContainerA from './ContainerA';

export default function pageA() {
  return (
    <div>
      <ContainerA hasAccess={true} />
    </div>
  );
}