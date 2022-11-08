import { GetStaticProps } from 'next';
import Head from 'next/head'
import React from 'react'
import { getPrismicClient } from '../../services/prismic';
import styles from "./styles.module.scss";
import * as Prismic from "@prismicio/client";

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a>
                        <time>
                            <span>January 1, 2021</span>
                        </time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>
                            In this post, I'll show you how to create a monorepo with Lerna and Yarn Workspaces.
                        </p>
                    </a>
                    <a>
                        <time>
                            January 1, 2021
                        </time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>
                            In this post, I'll show you how to create a monorepo with Lerna and Yarn Workspaces.
                        </p>
                    </a>
                    <a>
                        <time>
                            <span>January 1, 2021</span>
                        </time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>
                            In this post, I'll show you how to create a monorepo with Lerna and Yarn Workspaces.
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}

const GetsStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication'), {
            fetch: ['publication.title', 'publication.content'],
            pageSize: 100,
        }
    ]);

    console.log(JSON.stringify(response, null, 2));

    return {
        props: {}
    }

}

