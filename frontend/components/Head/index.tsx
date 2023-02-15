import React from "react"
import { NextPage } from "next"
import NextHead from "next/head"

export const Head: NextPage<{ title: string, description?: string }> = ({title, description = 'Building together inclusive finance infrastructure'}) => {
    return (
        <NextHead>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="robots" content="index, follow" />
            {description && <meta name="description" content={description} />}

            <title>{title}</title>
        </NextHead>
    )
}
