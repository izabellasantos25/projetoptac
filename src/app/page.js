"use client"
import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const router = useRouter();
  const req = await fetch("http://localhost:3003/alunos", {cache: "no-cache"});
  const alunos = await req.json();
 
  return (

    <main className={styles.main}>

      <Link className={styles.rota} href="/cadastro">Cadastrar</Link>

      <div className={styles.container}>
        {alunos.map(aluno => (
          <div className={`${styles.card} ${styles.alunoContainer}`} key={aluno.id}>
            <div className={styles.rodape}>
              <div className={styles.info}>
                <p>{aluno.nome}</p>
                <p>{aluno.curso}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </main>

  )
}
