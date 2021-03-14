import Footer from './footer'
import Meta from './meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="layout">
        
        <main>{children}</main>
      </div>
      <Footer />
      <style jsx>{`
        .layout {
          min-height: 100vh;
          
        }
        `}</style>
    </>
  )
}