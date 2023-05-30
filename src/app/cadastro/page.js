'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [inscricao, setInscricao] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            inscricao: inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("ERRO: Não foi possível realizar seu cadastro."))
    }

    return (

        <div className={styles.main}>

          <div className={styles.container}>

           <div className={styles.titulo}>Cadastre-se</div>
            
            <form action='' onSubmit={cadastrar} className={styles.fromulario}>
                <input type="text" placeholder='Nome:' nome="nome" onChange={e => setNome(e.target.value)} className={styles.input}/><br/>
                <input type="text" placeholder='Curso:' nome="curso" onChange={e => setCurso(e.target.value)} className={styles.input}/><br/>
                <input type="number" placeholder='Número de Inscrição:' nome="inscricao" onChange={e => setInscricao(e.target.value)} className={styles.input}/><br/>
                <button type="submit" className={styles.botao}>Cadastrar</button>
                
                <div className={styles.botao}>
                    <a href='/' className={styles.voltar}>Voltar</a>
                </div>
            </form>

          </div>

        </div>

    );
}