import { QuartzComponentConstructor } from "./types"

const Comments: QuartzComponentConstructor = () => {
  return (
    <div className="giscus">
      <script
        src="https://giscus.app/client.js"
        data-repo="hyeonseoy/hyeonseoy.github.io"
        data-repo-id="R_kgDOSZeQsA"
        data-category="General"
        data-category-id="DIC_kwDOSZeQsM4C8yaV"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="ko"
        crossOrigin="anonymous"
        async
      />
    </div>
  )
}

export default Comments
