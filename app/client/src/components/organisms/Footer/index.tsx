import styles from './styles.module.scss'
import {useEffect, useState} from "react";

export const Footer = () => {

  const [commitSha, setCommitSha] = useState<string>("");

  useEffect(() => {
    // P'tite dédicade à Fred et Choco pour ce bout de code, c'est quand même bien de les créditer :)
    const fetchCommitSha = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/EFREI-M1-Dev/GraphQL-Eval-FLMP/commits/main");
        const data = await response.json();
        if (!data.sha)
          throw new Error("No commit sha found");
        setCommitSha(data.sha);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCommitSha().then().catch((error) => console.error(error));
  }, []);

  return (
      <footer className={styles.footer}>
        <div>
          <div>
            <p>© 2024 - EFREI M1 Dev. Groupe 3</p>
          </div>
          <div>
            Last commit :&nbsp;
            <a href={`https://github.com/EFREI-M1-Dev/GraphQL-Eval-FLMP/commit/${commitSha}`} target="_blank"
               rel="noopener noreferrer">{commitSha.slice(0, 10) + "..."} </a>
          </div>
        </div>
        <div>
          <p>Project by :&nbsp;</p>
          <ul>
            <li>
              Florent PARIS
            </li>
            <li>
              Pierre VIPREY
            </li>
            <li>
              Louis LUBINEAU
            </li>
            <li>
              Mattéo VECHIONNE
            </li>
          </ul>
        </div>

      </footer>

  );
};