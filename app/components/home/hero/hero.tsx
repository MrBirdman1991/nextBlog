import { FC } from "react";
import Image from "next/image";

import classes from "./hero.module.css";

export const HeroSection: FC = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/pummelhorn.jpg" alt="what a nice schwobsie" width={300} height={300}/>
      </div>
      <h1>Schwobsi says Hellou</h1>
      <p>Schwobsies are friendly and handsome creatures</p>
    </section>
  );
};
