import { Suspense } from "react"
import { Header } from "./Header/Header"

export const SharedLayout = () => {
    return (
        <>
            <Header />
            <Suspense/>
        </>

    )
}