import React from 'react'
import { Footer } from './component/Footer'
import { Signoption } from './component/Signoption'
import { Testimonials } from './component/Testimonials'
import { Imageshowcases } from './component/Imageshowcases'
import { Iconsgrid } from './component/Iconsgrid'
import { Masthead } from './component/Masthead'
import { Navigation } from './component/Navigation'

function App() {
  return <>
        <Navigation />
        <Masthead />
        <Iconsgrid />
        <Imageshowcases />
        <Testimonials />
        <Signoption />
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
  </>
}

export default App


