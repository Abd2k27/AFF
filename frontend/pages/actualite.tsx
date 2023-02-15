import { NextPage } from "next"
import React, { useState, useEffect } from "react"
import { Footer, Head, Header, Menu, Section } from '../components'
import { Container, Row, Col, Card, Spinner } from "react-bootstrap"
import InfiniteScroll from "react-infinite-scroll-component"
import Link from "next/link"
import { getHref, truncateText, getApiUrl, getApiImageUrl } from "../utils"
import { CardStyle } from "../styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faLocationDot, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import { postProps } from "../props"

const News: NextPage = () => {
    /*const [page, setPage] = useState(1)

    const [posts, setPosts] = useState<{
        data: Array<postProps>,
        next_page_url: '' | null
    }>({
        data: [],
        next_page_url: null
    })

    const getPosts = () => {
        setPage(page => page + 1)

        fetch(getApiUrl(`/api/news/actualite?page=${page}&limit=4`))
            .then(res => res.json())
            .then(data => setPosts({
                ...posts,
                data: [...posts.data, ...data.data],
                next_page_url: data.next_page_url
            }))
    }

    useEffect(() => {
        fetch(getApiUrl(`/api/news/actualite?limit=4`))
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [setPosts])*/

    return (
        <>
        </>
    )
}

export default News
