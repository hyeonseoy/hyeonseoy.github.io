import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Comments() {
    return <div id="giscus-comments" />
  }

  Comments.afterDOMLoaded = `
    const container = document.getElementById("giscus-comments")
    if (container && !container.querySelector("script")) {
      const script = document.createElement("script")
      script.src = "https://giscus.app/client.js"
      script.setAttribute("data-repo", "hyeonseoy/hyeonseoy.github.io")
      script.setAttribute("data-repo-id", "R_kgDOSZeQsA")
      script.setAttribute("data-category", "General")
      script.setAttribute("data-category-id", "DIC_kwDOSZeQsM4C8yaV")
      script.setAttribute("data-mapping", "pathname")
      script.setAttribute("data-strict", "0")
      script.setAttribute("data-reactions-enabled", "1")
      script.setAttribute("data-emit-metadata", "0")
      script.setAttribute("data-input-position", "bottom")
      script.setAttribute("data-theme", "preferred_color_scheme")
      script.setAttribute("data-lang", "ko")
      script.setAttribute("crossorigin", "anonymous")
      script.async = true
      container.appendChild(script)
    }
  `

  Comments.css = `
    #giscus-comments {
      margin-top: 2rem;
    }
  `

  return Comments
}) satisfies QuartzComponentConstructor
