import { Route, Routes } from "react-router-dom"

import { RootLayout } from "@/layouts/root-layout"
import { Home } from "@/pages/home"
import { Works } from "@/pages/works"
import { Services } from "@/pages/services"
import { Blog } from "@/pages/blog"
import { Contact } from "@/pages/contact"
import { NotFound } from "@/pages/not-found"

/**
 * Application route table.
 *
 * All routes share RootLayout (header/footer); the catch-all renders NotFound.
 *
 * Returns:
 *     The routed application tree.
 */
function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="works" element={<Works />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
