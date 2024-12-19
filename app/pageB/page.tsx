import ContainerB from '../ContainerB';
import Hello from '../Hello';

export default function pageB() {
  return (
    <div>
      <ContainerB hasAccess={true}>
        <Hello name="ContainerB" />
      </ContainerB>
    </div>
  );
}
