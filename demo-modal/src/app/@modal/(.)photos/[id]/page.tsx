import { Modal } from './modal';
import Link from 'next/link';
export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <Modal> <Link className="card" href={`/cards`} passHref> {photoId} modal page
  </Link> </Modal>;
}
