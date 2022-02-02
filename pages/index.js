import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import Layout from "@/components/layout";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 5.5em;
  color: #011126;
`;

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Mbiaka, Tout ce dont vous avez besoin pour atteindre vos objectifs.
          </title>
        </Head>
        <div className="container mx-auto px-4">
          <H1 className="text-2xl font-bold text-center">
            Mbiaka,Tout ce dont vous avez besoin pour atteindre vos objectifs.
          </H1>
        </div>
      </Layout>
    </>
  );
}
