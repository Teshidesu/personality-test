// import styles from "../css/hola.module.css";

import { Link } from "react-router-dom";

export function Component(){
  return (
    <>
      <main className="body">
        <section className="box">
          <h1 className="title">Pokemon personality test</h1>

          <p className="text">Welcome to the Pokemon Test!
    Find out which Pokemon you really are,
    Choose wisely and find your true adventure companion in the world of Pokemon!</p>

          <figure className="img">
            <img src="" alt=""/>
          </figure>

          <div id="button">
            <label htmlFor="init"></label>
            <Link to={"/questions"}>hola</Link>
          </div>

        </section>

      </main>

      <footer>
&copy; 2024 by Ambar P
      </footer>


    </>
  );
}


