import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from "next-auth/react";

import styles from "./styles.module.scss";

export default function SignInButton() {

    const { data: session } = useSession();
    const git = useSession();

    console.log(git);

    return session ? (
        <button type="button" 
        className={styles.signInButton}
        onClick={() => signOut()}
        >
            <FaGithub color="#04d361" />
            Isaac Gonçalves
            <FiX color="#737380"className={styles.closeIcon}></FiX>
        </button>
    ) : (
        <button type="button" 
        className={styles.signInButton}
        onClick={() => signIn()}>
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    ) 
}
