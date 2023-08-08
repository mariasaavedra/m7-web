import styles from './Testimonial.module.css';

export default function Testimonial() {
  return (
    <div className={styles.TestimonialComponent}>
      <figure>
        <img src='https://placehold.co/80x80' alt=''></img>
        <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
      </figure>
    </div>
  );
}
