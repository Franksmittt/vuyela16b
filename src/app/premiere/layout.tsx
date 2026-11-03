import PremiereChrome from './PremiereChrome';
import './premiere.css';

export default function PremiereLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PremiereChrome>{children}</PremiereChrome>;
}
