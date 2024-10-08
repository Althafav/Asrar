import React from 'react'
import MenuComponent from './MenuComponent'
import FooterComponent from './FooterComponent'
import { useRouter } from 'next/router';



export default function LayoutComponent({ children }: any) {
    const router = useRouter();
    const isRegisterPage = router.pathname.startsWith('/register')
    return (
        <React.Fragment>
            {isRegisterPage ? "" : <MenuComponent />}

            {children}
            {isRegisterPage ? "" : <FooterComponent />}



        </React.Fragment>
    )
}
