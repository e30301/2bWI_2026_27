import styles from './Gif.module.css';
import img from '../assets/sthmCnCpfr8M8jtTQy.webp';

type Props = { show: boolean };

export default function Gif({ show }: Props) {
  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none ${
        show ? styles.animate : styles.hidden
      }`}
    >
      <img src={img} alt="" className="w-full h-full object-cover" />
    </div>
  );
}