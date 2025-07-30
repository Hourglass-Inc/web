import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import styles from './mdx.module.css';
import { MdArrowOutward } from 'react-icons/md';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        wrapper: ({ children }) => <div style={{
            maxWidth: "1000px",
            width: "calc(100% - 40px)",
            margin: "140px auto",
        }}>
            {children}
        </div>,

        h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
        h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
        h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,

        p: ({ children }) => <p className={styles.p}>{children}</p>,

        ul: ({ children }) => <ul className={styles.ul}>{children}</ul>,
        ol: ({ children }) => <ol className={styles.ol}>{children}</ol>,
        li: ({ children }) => <li className={styles.li}>{children}</li>,

        a: ({ children, href }) => (
            <a className={styles.a} target="_blank" href={href}>
                {children}
                <MdArrowOutward />
            </a>
        ),

        img: (props: ImageProps) => (
            <Image
                className={styles.img}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                {...(props as ImageProps)}
            />
        ),
        code: ({ children, className }) => {
            // If it's inline code (no className), use the original styling
            if (!className) {
                return <code className={styles.code}>{children}</code>;
            }
            // For code blocks, return the children directly (handled by pre)
            return <code className={className}>{children}</code>;
        },
        blockquote: ({ children }) => <blockquote className={styles.blockquote}>{children}</blockquote>,
        hr: () => <hr className={styles.hr} />,
        toc: ({ children }) => <div className={styles.toc}>{children}</div>,

        // Table components
        table: ({ children }) => <table className={styles.table}>{children}</table>,
        thead: ({ children }) => <thead className={styles.thead}>{children}</thead>,
        tbody: ({ children }) => <tbody className={styles.tbody}>{children}</tbody>,
        tr: ({ children }) => <tr className={styles.tr}>{children}</tr>,
        th: ({ children }) => <th className={styles.th}>{children}</th>,
        td: ({ children }) => <td className={styles.td}>{children}</td>,

        ...components,
    }
}