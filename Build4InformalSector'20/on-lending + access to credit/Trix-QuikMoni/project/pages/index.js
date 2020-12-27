import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect } from "react";
import store from "../store/store";
import firebase from "../services/firebase";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    store.loading = true;
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        store.loading = false;
      } else {
        router.push("/dashboard");
      }
    });
  }, []);
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className="heading mb-3">Welcome to QuikMoni</h1>
          <p className="sub-heading mb-2">Your quick access to money</p>
          <p className="text-mini mb-2 text-gray">
            Login or Signup to continue
          </p>
          <Link href="/register">
            <button className="btn btn-outline mb-2">Signup</button>
          </Link>
          <Link href="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </main>
      </div>
    </Layout>
  );
}
