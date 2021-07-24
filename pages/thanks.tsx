import React from "react";
import Layout from "../components/Layout";
import PageContentWrapper from "../components/PageContentWrapper";

export default function Thanks() {
    return (
        <Layout title="Brishty - search for weather" background={"bg-white"}>
            <PageContentWrapper classNameCustomAttributes={"px-4 pt-20 min-h-screen"}
                                addDefaultAttributes={false}>
                <h1>Thanks!</h1>
            </PageContentWrapper>
        </Layout>
    );
}