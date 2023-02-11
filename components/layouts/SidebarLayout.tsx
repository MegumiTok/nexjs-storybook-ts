import Link from 'next/link';
import React from 'react';
import styles from './SidebarLayout.module.css';
export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default SidebarLayout;
